import React from "react";

const BodyOverlay = ({
  showOffcanvas,
  setShowOffcanvas,
}: {
  showOffcanvas: boolean;
  setShowOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`tz-body-overlay${showOffcanvas ? " opened" : ""}`}
      onClick={() => setShowOffcanvas(false)}
    />
  );
};

export default BodyOverlay;
