import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'primary': '#EE772F',
                'secondary': '#9984D4',
                'surface-light': '#F7F3E3',
                'surface-dark': '#36393B',
            },

            container: {
                center: true,
            },

            dropShadow: {
                'harsh': '0 5px 0 rgba(0, 0, 0, 1)',
            }
        }
    },
    plugins: [],
  }

export default config;
