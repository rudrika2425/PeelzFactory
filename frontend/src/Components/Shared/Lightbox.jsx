/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { handleImageError } from "../utils/imagePaths";

const Lightbox = ({ image, alt, onClose }) => {
  useEffect(() => {
    if (!image) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={onClose}
    >
      <img
        src={image}
        alt={alt}
        className="max-h-[95vh] max-w-[95vw] object-contain"
        onError={handleImageError}
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
};

export default Lightbox;
