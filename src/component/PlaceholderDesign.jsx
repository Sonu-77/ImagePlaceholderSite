import { useParams } from "react-router-dom";

const PlaceholderDesign = () => {
  const { width, height, color, bg, text } = useParams();

  // Create an SVG string based on URL parameters
  const generateSvg = () => {
    return `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
        <rect width="100%" height="100%" fill="#${bg}" />
        <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" font-size="20" font-weight="bold" fill="#${color}">
          ${text}
        </text>
      </svg>
    `;
  };

  // Convert the SVG to a Blob URL
  const svgDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(generateSvg())}`;

  return (
    <div className="flex w-[100vw] h-[100vh] items-center justify-center">
      <img src={svgDataUrl} alt="Generated Placeholder" />
    </div>
  );
};

export default PlaceholderDesign;
