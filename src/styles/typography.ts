// Typography classes for consistent text styling across the website

export const typography = {
  // Headings
  h1: "text-4xl sm:text-6xl lg:text-7xl font-bold",
  h2: "text-3xl sm:text-5xl lg:text-6xl font-bold",
  h3: "text-2xl sm:text-4xl lg:text-5xl font-bold",
  h4: "text-xl sm:text-3xl lg:text-4xl font-bold",
  h5: "text-lg sm:text-2xl lg:text-3xl font-bold",
  h6: "text-base sm:text-xl lg:text-2xl font-bold",

  // Body text
  bodyLg: "text-xl sm:text-2xl text-neon-green",
  body: "text-lg text-neon-green",
  bodySm: "text-base text-neon-green",

  // Special text
  gradient: "bg-gradient-to-r from-[#6F00FF] via-neon-blue to-[#6F00FF] bg-clip-text text-transparent animate-gradient-x",
  gradientStatic: "bg-gradient-to-r from-[#6F00FF] to-neon-blue bg-clip-text text-transparent",
  caption: "text-sm text-neon-green",
  
  // Interactive elements
  link: "text-neon-green hover:text-neon-blue transition-colors duration-300",
  button: "text-base font-semibold",
  buttonPrimary: "group inline-flex items-center justify-center px-8 py-3 bg-[#6F00FF] hover:bg-[#6F00FF]/90 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105",
  buttonSecondary: "group inline-flex items-center justify-center px-8 py-3 bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/10 rounded-md transition-all duration-300 transform hover:scale-105",
  buttonOutline: "group inline-flex items-center justify-center px-6 py-3 bg-transparent border border-[#6F00FF] text-[#6F00FF] hover:bg-[#6F00FF]/10 rounded-md transition-all duration-300",
  
  // Section headers
  sectionTitle: "text-3xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 text-neon-blue",
  sectionSubtitle: "text-xl sm:text-2xl text-neon-green text-center max-w-3xl mx-auto mb-16",

  // Card elements
  cardTitle: "text-xl font-semibold text-neon-blue group-hover:text-neon-green transition-colors",
  cardBody: "text-neon-green",
  
  // Form elements
  label: "text-sm font-medium text-neon-green",
  input: "text-base text-neon-green",
  
  // Navigation
  navLink: "text-sm font-medium text-neon-green hover:text-neon-blue",
  
  // Footer
  footerTitle: "text-lg font-semibold text-neon-blue",
  footerLink: "text-neon-green hover:text-neon-blue transition-colors",
  footerText: "text-neon-green text-sm",
} as const;
