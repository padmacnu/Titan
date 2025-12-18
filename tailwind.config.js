/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables mode switching via Figma Variable logic
  theme: {
    extend: {
      // 1. High-Density Spacing (4px Baseline Grid)
      spacing: {
        'token-xs': 'var(--space-1)', // 4px
        'token-sm': 'var(--space-2)', // 8px
        'token-md': 'var(--space-4)', // 16px
        'token-lg': 'var(--space-6)', // 24px
      },

      // 2. Semantic Color Mapping
      colors: {
        // Backgrounds mapped to Figma Surface Tokens
        bg: {
          canvas: 'var(--color-surface-primary)',
          surface: 'var(--color-surface-secondary)',
          overlay: 'var(--color-surface-overlay)',
        },
        // Action colors for UI interactions
        action: {
          primary: 'var(--color-action-primary)',
          'primary-hover': 'var(--color-action-primary-hover)',
          ai: 'var(--color-action-ai)', // Unique to your AI niche
        },
        // Status colors for Storage & Cloud Health
        status: {
          success: 'var(--color-status-success)',
          warning: 'var(--color-status-warning)',
          error: 'var(--color-status-error)',
          processing: 'var(--color-status-ai-processing)',
        },
        // Typography tokens
        text: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          on: {
            primary: 'var(--color-text-on-primary)',
          }
        },
        // Border tokens for High-Density Grids
        border: {
          subtle: 'var(--color-border-subtle)',
          strong: 'var(--color-border-strong)',
        }
      },

      // 3. Specialized Typography for Data
      fontFamily: {
        // Monospace is critical for Storage Capacity & AI Metrics
        data: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      // 4. Custom Animations for AI Processing States
      keyframes: {
        'ai-pulse': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(0.95)' },
        }
      },
      animation: {
        'ai-status': 'ai-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Essential for accessible inputs
  ],
}

//three technical decisions:
// CSS Variable Abstraction: "I didn't hardcode colors in Tailwind. I mapped them to CSS variables so that when I update a variable in Figma, it updates the code automatically via a JSON export."
// The "Data" Font Stack: "I implemented a specific font-data stack to ensure that storage metrics (TB/GB) and AI timestamps remain perfectly aligned in high-density tables."
// Semantic Naming: "Notice the naming like bg-canvas instead of bg-white. This ensures the codebase is 'Theme-Agnostic'—it works perfectly in both Light and Dark modes without changing a single line of component code."