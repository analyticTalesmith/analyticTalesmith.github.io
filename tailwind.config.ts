import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        letterSpacing: {
            tighter: '-0.0937500rem',
            tight: '-0.0312500rem',
            normal: '0rem',
            wide: '0.0062500rem',
            wider: '0.0093750rem',
            widest: '0.0156250rem',
            'x-wide': '0.0250000rem',
            '2x-wide': '0.0312500rem',
            '3x-wide': '0.0781250rem',
            '4x-wide': '0.0937500rem'
        },
        fontSize: {
            '2xs': '0.75rem',
            xs: '0.875rem',
            sm: '0.9375rem',
            base: '1rem',
            lg: '1.0625rem',
            xl: '1.125rem',
            '2xl': '1.375rem',
            '3xl': '1.625rem',
            '4xl': '2.3125rem',
            '5xl': '3.25rem',
            '6xl': '4.0625rem',
            '7xl': '6.5rem',
        },

        extend: {
            fontFamily: {
                jost: ['var(--font-jost)'],
                spaceGrotesk: ['var(--font-space-grotesk)'],
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'primary': 'var(--primary)',
                'surface-tint': 'var(--surface-tint)',
                'on-primary': 'var(--on-primary)',
                'primary-container': 'var(--primary-container)',
                'on-primary-container': 'var(--on-primary-container)',
                'secondary': 'var(--secondary)',
                'on-secondary': 'var(--on-secondary)',
                'secondary-container': 'var(--secondary-container)',
                'on-secondary-container': 'var(--on-secondary-container)',
                'tertiary': 'var(--tertiary)',
                'on-tertiary': 'var(--on-tertiary)',
                'tertiary-container': 'var(--tertiary-container)',
                'on-tertiary-container': 'var(--on-tertiary-container)',
                'error': 'var(--error)',
                'on-error': 'var(--on-error)',
                'error-container': 'var(--error-container)',
                'on-error-container': 'var(--on-error-container)',
                'background': 'var(--background)',
                'on-background': 'var(--on-background)',
                'surface': 'var(--surface)',
                'on-surface': 'var(--on-surface)',
                'surface-variant': 'var(--surface-variant)',
                'on-surface-variant': 'var(--on-surface-variant)',
                'outline': 'var(--outline)',
                'outline-variant': 'var(--outline-variant)',
                'shadow': 'var(--shadow)',
                'scrim': 'var(--scrim)',
                'inverse-surface': 'var(--inverse-surface)',
                'inverse-on-surface': 'var(--inverse-on-surface)',
                'inverse-primary': 'var(--inverse-primary)',
                'primary-fixed': 'var(--primary-fixed)',
                'on-primary-fixed': 'var(--on-primary-fixed)',
                'primary-fixed-dim': 'var(--primary-fixed-dim)',
                'on-primary-fixed-variant': 'var(--on-primary-fixed-variant)',
                'secondary-fixed': 'var(--secondary-fixed)',
                'on-secondary-fixed': 'var(--on-secondary-fixed)',
                'secondary-fixed-dim': 'var(--secondary-fixed-dim)',
                'on-secondary-fixed-variant': 'var(--on-secondary-fixed-variant)',
                'tertiary-fixed': 'var(--tertiary-fixed)',
                'on-tertiary-fixed': 'var(--on-tertiary-fixed)',
                'tertiary-fixed-dim': 'var(--tertiary-fixed-dim)',
                'on-tertiary-fixed-variant': 'var(--on-tertiary-fixed-variant)',
                'surface-dim': 'var(--surface-dim)',
                'surface-bright': 'var(--surface-bright)',
                'surface-container-lowest': 'var(--surface-container-lowest)',
                'surface-container-low': 'var(--surface-container-low)',
                'surface-container': 'var(--surface-container)',
                'surface-container-high': 'var(--surface-container-high)',
                'surface-container-highest': 'var(--surface-container-highest)',

            },

            container: {
                center: true,
            },

            dropShadow: {
                'harsh': '0 3px 0 rgb(0, 0, 0, 1)',
            }
        }
    },
    plugins: [],
  }

export default config;
