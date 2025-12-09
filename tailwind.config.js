/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette 1: Rich browns and tans (darker skin tones)
        earth: {
          cream: '#ffedd8',     // Lightest cream
          light: '#f3d5b5',      // Light tan
          tan: '#e7bc91',        // Medium tan
          warm: '#d4a276',       // Warm brown
          medium: '#bc8a5f',     // Medium brown
          rich: '#a47148',       // Rich brown
          deep: '#8b5e34',       // Deep brown
          dark: '#6f4518',       // Dark brown
          darker: '#603808',      // Darker brown
          darkest: '#583101',    // Darkest brown
        },
        // Palette 2: Neutrals with warm accent
        neutral: {
          dark: '#463f3a',       // Dark charcoal
          medium: '#8a817c',     // Medium gray
          light: '#bcb8b1',      // Light gray
          pale: '#f4f3ee',       // Pale cream
          accent: '#e0afa0',     // Warm pink accent
        },
        // Palette 3: Soft pinks and peaches (lighter skin tones)
        skin: {
          light: '#f8edeb',      // Lightest pink
          soft: '#fcd5ce',        // Soft pink
          warm: '#ffb5a7',       // Warm coral
          tan: '#f9dcc4',        // Tan peach
          golden: '#fec89a',     // Golden peach
        },
        // Palette 4: Sage greens and creams
        sage: {
          light: '#fefae0',      // Lightest cream
          soft: '#faedcd',        // Soft cream
          pale: '#e9edc9',       // Pale sage
          medium: '#ccd5ae',     // Medium sage
          warm: '#d4a373',       // Warm tan
        },
        // Primary colors - using diverse skin tones
        primary: {
          50: '#fefae0',         // Sage lightest
          100: '#f8edeb',        // Skin lightest
          200: '#fcd5ce',        // Skin soft
          300: '#ffb5a7',        // Skin warm
          400: '#e0afa0',        // Neutral accent
          500: '#d4a276',        // Earth warm
          600: '#bc8a5f',        // Earth medium
          700: '#a47148',        // Earth rich
          800: '#8b5e34',        // Earth deep
          900: '#6f4518',        // Earth dark
        },
        // Secondary colors - using sage and earth tones
        secondary: {
          50: '#f4f3ee',         // Neutral pale
          100: '#e9edc9',        // Sage pale
          200: '#ccd5ae',        // Sage medium
          300: '#d4a373',        // Sage warm
          400: '#e7bc91',        // Earth tan
          500: '#d4a276',        // Earth warm
        },
      },
    },
  },
  plugins: [],
}

