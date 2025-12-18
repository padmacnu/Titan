// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Mapped to titan.color.background
        'titan-bg-primary': 'var(--titan-color-background-primary-strong)',
        'titan-bg-canvas': 'var(--titan-color-background-canvas)',
        
        // Mapped to titan.button.primary
        'titan-button-primary': 'var(--titan-button-primary-rest-background)',
        'titan-button-primary-hover': 'var(--titan-button-primary-hover-background)',
      },
      spacing: {
        // Mapped to titan.spacing scale
        'titan-sm': 'var(--titan-spacing-small)',   // 4px
        'titan-md': 'var(--titan-spacing-medium)',  // 8px
        'titan-lg': 'var(--titan-spacing-large)',   // 16px
      },
      borderRadius: {
        'titan-radius-sm': 'var(--titan-radius-small)',
      }
    }
  }
}
