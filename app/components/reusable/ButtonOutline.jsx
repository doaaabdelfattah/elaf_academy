import React from "react";

const ButtonOutline = ({ text }) => {
  return (
    <>
      <button className="mt-6 px-6 py-3 border-2 border-mainGreen rounded-full text-lg hover:bg-white/40 hover:scale-[1.05] transition-all duration-500 ">
        {text}
      </button>
    </>
  );
};

export default ButtonOutline;
