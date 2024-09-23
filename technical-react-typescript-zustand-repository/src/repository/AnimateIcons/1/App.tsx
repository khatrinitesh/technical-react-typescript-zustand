import React from "react";
import { useIconStore } from "../../../store/useIconStore";

const RepositoryApp = () => {
    const icons = [
        'https://via.placeholder.com/50/FF0000/FFFFFF?text=A', // Placeholder icons
        'https://via.placeholder.com/50/00FF00/FFFFFF?text=B',
        'https://via.placeholder.com/50/0000FF/FFFFFF?text=C',
      ];
  return(
    <>
    <h1>Animated Icons Example</h1>
    <div>
        {icons.map((icon,index) => (
            <AnimatedIcon key={index} icon={icon}/>
        ))}
        </div>
    </>
  )
};

export default RepositoryApp;

const AnimatedIcon: React.FC<IconProps> = ({ index, icon }) => {
  const { animatedIcons, toggleIcon } = useIconStore();
  const isActive = animatedIcons.includes(index);

  return (
    <>
      <div
        className={`icon ${isActive ? "animated" : ""}`}
        onClick={() => toggleIcon(index)}
        style={{ cursor: "pointer", display: "inline-block", margin: "10px" }}
      >
        <img src={icon} alt={`icon-${index}`} width={50} height={50} />
      </div>
    </>
  );
};
