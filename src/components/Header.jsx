import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4 flex justify-end">
      <button className="px-4 py-2 bg-blue-500 rounded-full hover:bg-blue-600">
        Login / Sign Up
      </button>
    </header>
  );
};

export default Header;
