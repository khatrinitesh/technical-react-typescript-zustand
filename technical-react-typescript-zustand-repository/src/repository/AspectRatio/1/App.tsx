import React from "react";
import { ButtonState } from "../../../types";
import { useButtonstore } from "../../../store/useAnimatedButton";
import { useSearchStore } from "../../../store/useSearch";
import { useAnimationStore } from "../../../store/useAnimation";
import { useAspectRatio } from "../../../store/useAspectRatio";

const RepositoryApp: React.FC = () => {
  return (
    <>
      <AspectRatioBox />
    </>
  );
};

export default RepositoryApp;

const AspectRatioBox: React.FC = () => {
  const { aspectRatio } = useAspectRatio();
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%", // Full width of its container
          paddingBottom: `${(1 / aspectRatio) * 100}%`, // Maintain aspect ratio
          backgroundColor: "#007BFF",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "24px",
          }}
        >
          {`Aspect Ratio: ${aspectRatio.toFixed(2)}`}
        </div>
      </div>
    </>
  );
};
