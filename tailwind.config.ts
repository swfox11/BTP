import type { Config } from "tailwindcss";

const config: Config = {
  // content: [
  //   "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./components/**/*.{js,ts,jsx,tsx,mdx}",
  //   "./app/**/*.{js,ts,jsx,tsx,mdx}",
  //   './pages/**/*.{js,ts,jsx,tsx}', 
  //   './components/**/*.{js,ts,jsx,tsx}', 
  //   './app/**/*.{js,ts,jsx,tsx}', // If using the Next.js App directory
  //   './layouts/**/*.{js,ts,jsx,tsx}', // If using custom layouts
  //   './public/**/*.html', // For static HTML files

  // ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html", // For static HTML files
  ],
  safelist: [
    'hidden',
    'block',
    'hover:bg-[#48bf91]',
    'bg-black',
    'text-white',
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    
  ],
};
export default config;