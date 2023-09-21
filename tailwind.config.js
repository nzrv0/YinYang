/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            screens: {
                "2xl": "1600px",
            },
        },

        extend: {
            colors: {
                primary: "#111111",
                secondary: "#FFFFFF",
                dark95: "rgba(0, 0, 0, 0.95)",
                dark65: "rgba(0, 0, 0, 0.65)",
                dark60: "rgba(0, 0, 0, 0.60)",
                dark50: "rgba(0, 0, 0, 0.50)",
                dark35: "rgba(0, 0, 0, 0.35)",
                dark30: "rgba(0, 0, 0, 0.30)",
                dark20: "rgba(0, 0, 0, 0.20)",
                dark10: "rgba(0, 0, 0, 0.10)",
                dark5: "rgba(0, 0, 0, 0.05)",
                // white
                white95: "rgba(255, 255, 255, 0.95)",
                white65: "rgba(255, 255, 255, 0.65)",
                white60: "rgba(255, 255, 255, 0.60)",
                white50: "rgba(255, 255, 255, 0.50)",
                white35: "rgba(255, 255, 255, 0.35)",
                white30: "rgba(255, 255, 255, 0.30)",
                white20: "rgba(255, 255, 255, 0.20)",
                white10: "rgba(255, 255, 255, 0.10)",
                white5: "rgba(255, 255, 255, 0.05)",
            },
        },
    },
    plugins: [],
};
