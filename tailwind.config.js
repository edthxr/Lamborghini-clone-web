/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                sm: '640px',
                md: '768px',
                lg: '960px',
                xl: '1200px',
            },
        },
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)," }
                },
            },
			textShadow: {
				'white': '0 2px 4px rgba(255, 255, 255, 0.7)',
			  },
			fontFamily: {
				sans: ['Roboto', 'sans-serif'],
				righteous: ['Righteous', 'sans-serif'],
				lato: ['Lato', 'sans-serif'],
				league: ['League Gothic', 'sans-serif'],
			  },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            backgroundImage: {
                'main-image': "url('/assets/image/main.png')", // แก้ไข path ตามที่ตั้งไว้
				
            },
            // เพิ่มการกำหนดขนาดใหม่ที่ต้องการ
            width: {
                '1200': '1200px', // ใช้ '1200' เป็นชื่อคลาสใหม่
            },
            height: {
                '750': '750px', // ใช้ '1200' เป็นชื่อคลาสใหม่
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
