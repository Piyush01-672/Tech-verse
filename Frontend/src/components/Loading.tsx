import React, { useEffect, useState } from "react";

interface LoadingProps {
  show: boolean;
}

const codeSymbols = [
  "<div>",
  "</>",
  "{ }",
  "</code>",
  "<TechVerse />",
  "function(){}",
  "<h1/>",
  "<html>",
  "</script>",
  "</Tech>",
];

const Loading: React.FC<LoadingProps> = ({ show }) => {
  const [visible, setVisible] = useState<boolean>(show);
  const [symbol, setSymbol] = useState<string>("< />");

  useEffect(() => {
    if (!show) {
      const timer = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(timer);
    } else {
      setVisible(true);
    }
  }, [show]);

  // 🔁 Change coding symbol rapidly
  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * codeSymbols.length);
      setSymbol(codeSymbols[random]);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-white z-50 transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Floating Coding Symbol */}
      <div className="relative flex items-center justify-center">
        <div className="text-5xl font-mono font-bold text-blue-600 animate-pulse">
          {symbol}
        </div>
        {/* Glowing pulse ring */}
        <div className="absolute h-20 w-20 rounded-full border-4 border-blue-400 opacity-20 animate-ping"></div>
      </div>

      {/* TechVerse Loading Text */}
      <p className="mt-6 text-gray-700 font-semibold text-lg tracking-wide animate-pulse">
        Building the Future<span className="text-blue-600">...</span>
      </p>

      {/* Subtle code rain background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 text-gray-500 font-mono text-sm animate-[moveDown_3s_linear_infinite]">
          {`<html> <body> <code> console.log("TechVerse Loading...") </code> </body> </html> `}
        </div>
      </div>

      {/* Custom animation */}
      <style>{`
        @keyframes moveDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
};

export default Loading;
