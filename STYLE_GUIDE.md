# 12 Stone Designs Style Guide

## Color Palette

### Primary Colors
- **Electric Indigo** (`#6F00FF`) - Primary brand color, used for icons and hover states
- **Neon Blue** (`#00F3FF`) - Primary text color, borders, and accents
- **Neon Green** (`#39FF14`) - Used for active states, card titles, and important headings

### Color Usage Guidelines
- **Navigation**:
  - Default text: Neon Blue
  - Hover state: Electric Indigo
  - Active/selected state: Neon Green

- **Cards and Sections**:
  - Icons: Electric Indigo
  - Titles: Neon Green
  - Body text: Neon Blue
  - Borders: Neon Blue

### Background Colors
- **Black** (`#000000`) - Primary background color
- **Dark Overlay** (`bg-gray-900/30`) - Used for card backgrounds with blur effect
- **Transparent Black** (`bg-black/40`) - Used for navigation and footer backgrounds

### Additional Effects
- **Backdrop Blur** - Applied to navigation and footer for depth (`backdrop-blur-sm`)
- **Gradients** - Used for special headings and accents:
  - `bg-gradient-to-r from-neon-blue via-[#6F00FF] to-neon-green`
- **Transitions** - Smooth color changes on hover and interaction (`transition-colors duration-300`)

## Typography

### Headings
```css
h1: text-4xl sm:text-6xl lg:text-7xl font-bold
h2: text-3xl sm:text-5xl lg:text-6xl font-bold
h3: text-2xl sm:text-4xl lg:text-5xl font-bold
h4: text-xl sm:text-3xl lg:text-4xl font-bold
h5: text-lg sm:text-2xl lg:text-3xl font-bold
h6: text-base sm:text-xl lg:text-2xl font-bold
```

### Body Text
```css
bodyLg: text-xl sm:text-2xl text-neon-blue
body: text-lg text-neon-blue
bodySm: text-base text-neon-blue
```

## Gradients & Animations

### Text Effects
- **Gradient Text** - Used for main headings:
  ```css
  bg-gradient-to-r from-[#6F00FF] via-[#00F3FF] to-[#39FF14] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-x
  ```
  - Colors Flow:
    1. Electric Indigo (#6F00FF)
    2. Neon Blue (#00F3FF)
    3. Neon Green (#39FF14)
  - Animation: `animate-gradient-x` for smooth gradient flow

### Animations
- **Gradient Animation**
  ```css
  @keyframes gradient-x {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  .animate-gradient-x {
    animation: gradient-x 10s ease-in-out infinite;
  }
  ```

## Buttons

### Primary Button
```css
group inline-flex items-center justify-center px-8 py-3
bg-[#6F00FF] hover:bg-[#6F00FF]/90 text-white font-semibold
rounded-md transition-all duration-300 transform hover:scale-105
```

### Secondary Button
```css
group inline-flex items-center justify-center px-8 py-3
bg-transparent border border-neon-blue text-neon-blue
hover:bg-neon-blue/10 rounded-md transition-all duration-300
transform hover:scale-105
```

## Layout & Backgrounds

### Page Background
```css
/* Container */
min-h-screen text-white relative bg-black

/* Background Image Overlay */
fixed inset-0 w-full h-full z-0
opacity-0.3
background-position: center
background-repeat: no-repeat
background-size: cover
```

### Section Spacing
```css
/* Vertical Padding */
py-24

/* Container Width */
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

### Navigation
- Height: `h-20`
- Padding: `px-4 sm:px-6 lg:px-8`
- Border: `border-b border-[#00F3FF]`

### Footer
- Outer padding: `py-12`
- Inner padding: `py-6 px-4 sm:px-6 lg:px-8`
- Border: `border-t border-[#00F3FF]`

## Icons
- Use Lucide React icons
- Icon size: `w-8 h-8` for feature icons
- Icon size: `w-5 h-5` for contact/social icons
- Icon color: `text-[#6F00FF]`

## Hover Effects
- Links: `hover:text-neon-green transition-colors`
- Buttons: `hover:scale-105 transition-all duration-300`
- Images: `hover:opacity-80 transition-opacity`

## Z-Index Hierarchy
- Background: `z-0`
- Content: `z-20`

## Responsive Design
- Mobile First approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## Grid System
- Use CSS Grid for layouts: `grid grid-cols-1 lg:grid-cols-2 gap-12`
- Flexbox for component alignment: `flex items-center justify-center`
