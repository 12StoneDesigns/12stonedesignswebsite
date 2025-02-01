# 12 Stone Designs Website Color Scheme

## Primary Colors

### Neon Colors
- **Neon Green** (`#39FF14`): Used for primary buttons, icons, and accent elements
- **Neon Blue** (`#00FFFF`): Used in gradients and secondary interactive elements
- **Electric Indigo** (`#4B0082`): Used for depth and alternative accents

### Background Colors
- **Black** (`#000000`): Primary background color
- **Dark Gray** (`#111111`): Secondary background color for cards and sections
- **Deep Indigo** (`#2E0854`): Alternative section backgrounds and card hover states
- **Transparent Black** (`bg-black/50`): Used for overlays and backdrop effects

## Text Colors
- **White** (`#FFFFFF`): Primary text color
- **Light Gray** (`#D1D5DB`, `text-gray-300`): Secondary text and body content
- **Muted Gray** (`#9CA3AF`, `text-gray-400`): Caption text and less important information
- **Indigo Glow** (`#8A2BE2`): Accent text and highlights

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

### Indigo Gradient
```css
bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-500
```
Used for:
- Alternative section backgrounds
- Card hover effects
- Secondary decorative elements

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

4. **Indigo Button**
   - Background: Electric Indigo
   - Text: White
   - Hover: Deep Indigo
   - Animation: Subtle glow effect

### Links
- Default: Light Gray (`text-gray-300`)
- Hover: Neon Green
- Alternative Hover: Indigo Glow
- Transition: Color change with 300ms duration

## Component-Specific Colors

### Cards
- Background: Dark Gray with 30% opacity (`bg-gray-900/30`)
- Alternative Background: Deep Indigo with 20% opacity
- Border: Dark Gray (`border-gray-800`)
- Hover Border: Neon Green at 50% opacity (`border-neon-green/50`)
- Alternative Hover: Electric Indigo at 40% opacity

### Navigation
- Background: Dark with blur effect
- Text: White
- Active/Hover: Neon Green
- Alternative Active: Indigo Glow

### Form Elements
- Input Background: Dark Gray
- Input Border: Gray
- Focus Border: Neon Green
- Alternative Focus: Electric Indigo
- Placeholder Text: Muted Gray

## Usage Guidelines

1. **Contrast**
   - Always maintain high contrast ratios for accessibility
   - Use light text colors on dark backgrounds
   - Ensure neon and indigo colors are used sparingly for maximum impact

2. **Gradients**
   - Use animated gradients for primary headings only
   - Static gradients for secondary emphasis
   - Indigo gradients for alternative section styling
   - Keep gradient directions consistent (right-to-left)

3. **Dark Mode Optimization**
   - Design is optimized for dark mode by default
   - Use transparency and blur effects for depth
   - Maintain consistent neon and indigo accents for brand recognition

4. **Accessibility**
   - Main content uses high-contrast combinations
   - Interactive elements have clear hover/focus states
   - Text remains readable at all sizes

## Implementation

The color scheme is implemented through Tailwind CSS classes and custom CSS variables. Key color values are defined in the Tailwind configuration file for consistent usage across the application.
