import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
        "./resources/js/**/*.ts",
    ],

    theme: {
        patterns: {
            opacities: {
                20: ".20",
                10: ".10",
                5: ".05",
            },
            sizes: {
                6: "1.5rem",
                8: "2rem",
                16: "4rem",
            },
        },
        extend: {
            colors: {
                // background: "#252a3a",
                background:"#0c0c0c",
                // background: "#191c1b",
                // background: "#030d0c",
                foreground: "#e0e3e1",
                primary: {
                    100: "#70f9e0",
                    200: "#4edcc4",
                    300: "#24c0a9",
                    400: "#00a38f",
                    500: "#51dec6",
                    600: "#006b5d",
                    700: "#005046",
                    800: "#003730",
                    900: "#00201b",

                    DEFAULT: "#51dec6",

                    dark: "#005046",
                    light: "#006b5d",
                },
                "primary-container": "#005046",
                "primary-container-foreground": "#70f9e0",
                secondary: "#b1ccc5",
                "secondary-container": "#334b46",
                "secondary-container-foreground": "#cde8e1",
                "tertiary-container": "#2b4a60",
                "tertiary-container-foreground": "#cae6ff",

                "card": "#171819",
                muted: "#6b7280",
            },
            fontFamily: {
                sans: [
                    "Inter",
                    '"Helvetica Neue Light"',
                    "Helvetica",
                    ...defaultTheme.fontFamily.sans,
                ],
            },
        },
    },

    plugins: [forms, require("tailwindcss-bg-patterns")],
};
