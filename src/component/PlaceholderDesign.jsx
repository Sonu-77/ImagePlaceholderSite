import React from "react";
import { useParams } from "react-router-dom";

const PlaceholderDesign = () => {
  const { width, height, color, bg, text } = useParams();

  const inlineStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: `#${bg}`,
    color: `#${color}`,
    fontSize: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  };

  return (
    <div className={`flex w-[100vw] h-[100vh] items-center justify-center`}>
      <div style={inlineStyle}>{text}</div>
    </div>
  );
};

export default PlaceholderDesign;
