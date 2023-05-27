/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".payment-content": {
          "@apply flex items-center sm:justify-center pr-16 sm:p-8 h-16 sm:h-28 w-full bg-gray-100 border-2 border-gray-200 rounded-md transition": {},
        },
        ".payment-text": {
          "@apply static sm:absolute top-full sm:mt-1 text-center text-lg w-full opacity-70 font-medium": {},
        },
        ".payment-image": {
          "@apply max-w-[4rem] max-h-[2.5rem]": {},
        }
      });
    },
  ],
};

