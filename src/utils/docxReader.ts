import mammoth from 'mammoth';

const styleMap = `
p[style-name='Heading 1'] => h1:fresh
p[style-name='Heading 2'] => h2:fresh
p[style-name='Heading 3'] => h3:fresh
`;

export async function readDocxFile(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }
    
    const arrayBuffer = await response.arrayBuffer();
    const result = await mammoth.convertToHtml({ 
      arrayBuffer,
      styleMap,
      transformDocument: (element) => {
        // Add any custom document transformations here if needed
        return element;
      }
    });

    if (result.messages.length > 0) {
      console.warn('Warnings during DOCX conversion:', result.messages);
    }

    return result.value;
  } catch (error) {
    console.error('Error reading DOCX file:', error);
    throw error;
  }
}
