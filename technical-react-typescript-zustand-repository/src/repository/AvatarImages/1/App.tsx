import React, { useEffect } from "react";
import { ButtonState } from "../../../types";
import { useButtonstore } from "../../../store/useAnimatedButton";
import { useSearchStore } from "../../../store/useSearch";
import { useAnimationStore } from "../../../store/useAnimation";
import { useAspectRatio } from "../../../store/useAspectRatio";
import { useAutocompleteStore } from "../../../store/useAutocomplete";
import { useAvatarImages } from "../../../store/useAvatarImages";

const RepositoryApp: React.FC = () => {
  return (
    <>
      <AvatarImagesBox />
    </>
  );
};

export default RepositoryApp;

const AvatarImagesBox: React.FC = () => {
  const { avatarUrl, setAvatarUrl } = useAvatarImages();

  const handleImageChange =(e:React.ChangeEventHandler<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string); // Update the avatar URL
      };
      reader.readAsDataURL(file); // Convert the file to a base64 string
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={avatarUrl || "https://via.placeholder.com/150"}
          alt="Avatar"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "10px",
          }}
        />
        <input type="file" accept="image/*" onChange={handleImageChange} style={{marginTop:'10px'}} />
      </div>
    </>
  );
};
