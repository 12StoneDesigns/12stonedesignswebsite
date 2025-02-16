import mammoth from 'mammoth';

export async function readDocxFile(url: string): Promise<string> {
  try {
    console.log('Attempting to fetch DOCX file from:', url);
    const response = await fetch(url);
    
    if (!response.ok) {
      console.error('Failed to fetch DOCX file:', response.status, response.statusText);
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }
    
    console.log('Successfully fetched DOCX file, converting to array buffer...');
    const arrayBuffer = await response.arrayBuffer();
    
    console.log('Converting DOCX to HTML...');
    const result = await mammoth.convertToHtml({ 
      arrayBuffer
    });

    if (result.messages.length > 0) {
      console.warn('Warnings during DOCX conversion:', result.messages);
    }

    if (!result.value) {
      console.error('No HTML content generated from DOCX');
      throw new Error('Failed to convert DOCX to HTML');
    }

    console.log('Successfully converted DOCX to HTML');
    return result.value;
  } catch (error) {
    console.error('Error reading DOCX file:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to process DOCX file: ${error.message}`);
    }
    throw error;
  }
}
