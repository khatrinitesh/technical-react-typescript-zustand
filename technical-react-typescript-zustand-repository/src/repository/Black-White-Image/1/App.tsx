import React, { useEffect } from "react";
import { useBlackWhiteImgStore } from "../../../store/useBlackWhiteImg";

const RepositoryApp: React.FC = () => {
  return (
    <>
      <BlackWhiteImageBox />
    </>
  );
};

export default RepositoryApp;

const BlackWhiteImageBox: React.FC = () => {
  const { imageUrl, setImageUrl } = useBlackWhiteImgStore();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string); // Update the image URL
      };
      reader.readAsDataURL(file); // Convert the file to a base64 string
    }
  };

  return (
    <>
       <div style={{ textAlign: 'center' }}>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ marginBottom: '10px' }}
      />
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Black and White"
          style={{
            width: '300px',
            height: 'auto',
            filter: 'grayscale(100%)', // Apply black and white filter
            borderRadius: '8px',
          }}
        />
      )}
    </div>
    </>
  );
};
