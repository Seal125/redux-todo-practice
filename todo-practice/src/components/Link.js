import React from "react";

const Link = ({ active, onClick, children }) => {
  return (
    <button
      style={{
        marginLeft: "4px",
      }}
      disabled={active}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Link;
