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
  bodyLg: "text-xl sm:text-2xl text-gray-300",
  body: "text-lg text-gray-300",
  bodySm: "text-base text-gray-300",

  // Special text
  gradient: "bg-gradient-to-r from-neon-green via-neon-blue to-neon-green bg-clip-text text-transparent animate-gradient-x",
  gradientStatic: "bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent",
  caption: "text-sm text-gray-400",
  
  // Interactive elements
  link: "text-gray-300 hover:text-neon-green transition-colors duration-300",
  button: "text-base font-semibold",
  buttonPrimary: "group inline-flex items-center justify-center px-8 py-3 bg-neon-green hover:bg-neon-green/90 text-black font-semibold rounded-md transition-all duration-300 transform hover:scale-105",
  buttonSecondary: "group inline-flex items-center justify-center px-8 py-3 bg-transparent border border-neon-blue text-neon-blue hover:bg-neon-blue/10 rounded-md transition-all duration-300 transform hover:scale-105",
  buttonOutline: "group inline-flex items-center justify-center px-6 py-3 bg-transparent border border-neon-green text-neon-green hover:bg-neon-green/10 rounded-md transition-all duration-300",
  
  // Section headers
  sectionTitle: "text-3xl sm:text-5xl lg:text-6xl font-bold text-center mb-8",
  sectionSubtitle: "text-xl sm:text-2xl text-gray-300 text-center max-w-3xl mx-auto mb-16",

  // Card elements
  cardTitle: "text-xl font-semibold text-white group-hover:text-neon-green transition-colors",
  cardBody: "text-gray-300",
  
  // Form elements
  label: "text-sm font-medium text-gray-300",
  input: "text-base text-white",
  
  // Navigation
  navLink: "text-sm font-medium",
  
  // Footer
  footerTitle: "text-lg font-semibold text-white",
  footerLink: "text-gray-300 hover:text-neon-green transition-colors",
  footerText: "text-gray-300 text-sm",
} as const;
