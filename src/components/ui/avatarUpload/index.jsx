import React, { useRef, useState } from "react";
import { User } from "react-feather";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const hiddenFileInput = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = Math.max(img.width, img.height);
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, (maxSize - img.width) / 2, (maxSize - img.height) / 2);
        canvas.toBlob(
          (blob) => {
            const newFile = new File([blob], imgname, {
              type: "image/png",
              lastModified: Date.now()
            });
            setImage(newFile);
          },
          "image/jpeg",
          1.0
        );
      };
    };
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleRemovePhoto = () => {
    setImage(null);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="p-16 flex flex-col items-center">
        <button onClick={handleClick} style={{ cursor: "pointer" }} className="relative">
          {image ? (
            <>
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="border-1 border-solid border-gray-secondary rounded-full h-40 w-40"
              />
            </>
          ) : (
            <span className="">
              <User className="h-40 w-40 p-10 border-[1px] border-solid border-gray-secondary rounded-full text-white-primary bg-purple-secondary" />
            </span>
          )}
          <input
            id="image-upload-input"
            type="file"
            onChange={handleImageChange}
            ref={hiddenFileInput}
            className="hidden rounded-full "
          />
        </button>
        <p className="my-3">profile image</p>
        {!image && (
          <button className="btn-outline" onClick={handleClick}>
            Choose file
          </button>
        )}
        <p className="text-medium-500 text-gray-secondary my-3">
          The maximum file size allowed is 200KB.
        </p>
        {image && (
          <button className="btn-outline text-red-primary" onClick={handleRemovePhoto}>
            Remove photo
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
