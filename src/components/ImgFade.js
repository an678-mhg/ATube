import { useState } from "react";

const ImageFade = ({ className, onLoad, crossOrigin: _, ...others }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      alt="img"
      className={`${
        loaded ? "opacity-100" : "opacity-0"
      } transition duration-300 ${className}`}
      onLoad={(e) => {
        setLoaded(true);
        onLoad && onLoad(e);
      }}
      {...others}
    />
  );
};

export default ImageFade;
