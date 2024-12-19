// src/global.d.ts
declare global {
    interface Window {
      googleTranslateElementInit: () => void;
      google: any;
    }
  }
  
  export {}; // Ensure this file is treated as a module
  