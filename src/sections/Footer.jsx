import React from "react";

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center pt-12 border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Kristal Pithwa. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
