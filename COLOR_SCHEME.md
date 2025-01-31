# 12 Stone Designs Website Color Scheme

## Primary Colors

### Neon Colors
- **Neon Green** (`#39FF14`): Used for primary buttons, icons, and accent elements
- **Neon Blue** (`#00FFFF`): Used in gradients and secondary interactive elements

### Background Colors
- **Black** (`#000000`): Primary background color
- **Dark Gray** (`#111111`): Secondary background color for cards and sections
- **Transparent Black** (`bg-black/50`): Used for overlays and backdrop effects

## Text Colors
- **White** (`#FFFFFF`): Primary text color
- **Light Gray** (`#D1D5DB`, `text-gray-300`): Secondary text and body content
- **Muted Gray** (`#9CA3AF`, `text-gray-400`): Caption text and less important information

## Gradient Combinations
### Primary Gradient
```css
bg-gradient-to-r from-neon-green via-neon-blue to-neon-green
```
Used for:
- Main headings
- Hero section text
- Important call-to-action elements

### Static Gradient
```css
bg-gradient-to-r from-neon-green to-neon-blue
```
Used for:
- Secondary headings
- Decorative elements

## Interactive Elements

### Buttons
1. **Primary Button**
   - Background: Neon Green
   - Text: Black
   - Hover: 90% opacity of Neon Green
   - Animation: Scale transform on hover

2. **Secondary Button**
   - Background: Transparent
   - Border: Neon Blue
   - Text: Neon Blue
   - Hover: 10% opacity Neon Blue background

3. **Outline Button**
   - Background: Transparent
   - Border: Neon Green
   - Text: Neon Green
   - Hover: 10% opacity Neon Green background

### Links
- Default: Light Gray (`text-gray-300`)
- Hover: Neon Green
- Transition: Color change with 300ms duration

## Component-Specific Colors

### Cards
- Background: Dark Gray with 30% opacity (`bg-gray-900/30`)
- Border: Dark Gray (`border-gray-800`)
- Hover Border: Neon Green at 50% opacity (`border-neon-green/50`)

### Navigation
- Background: Dark with blur effect
- Text: White
- Active/Hover: Neon Green

### Form Elements
- Input Background: Dark Gray
- Input Border: Gray
- Focus Border: Neon Green
- Placeholder Text: Muted Gray

## Usage Guidelines

1. **Contrast**
   - Always maintain high contrast ratios for accessibility
   - Use light text colors on dark backgrounds
   - Ensure neon colors are used sparingly for maximum impact

2. **Gradients**
   - Use animated gradients for primary headings only
   - Static gradients for secondary emphasis
   - Keep gradient directions consistent (right-to-left)

3. **Dark Mode Optimization**
   - Design is optimized for dark mode by default
   - Use transparency and blur effects for depth
   - Maintain consistent neon accents for brand recognition

4. **Accessibility**
   - Main content uses high-contrast combinations
   - Interactive elements have clear hover/focus states
   - Text remains readable at all sizes

## Implementation

The color scheme is implemented through Tailwind CSS classes and custom CSS variables. Key color values are defined in the Tailwind configuration file for consistent usage across the application.
