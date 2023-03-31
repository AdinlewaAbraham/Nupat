import React from "react";

const Tag = (p) => {
  return (
    <div className="flex">
      <div className="tagSmall"></div>
      <div
        className="tagBig"
        style={{
          background: p.dark
            ? "rgba(4, 28, 55, 0.5)"
            : "rgba(232, 232, 232, 0.5)",
        }}
      >
        {p.text}
      </div>
    </div>
  );
};

export default Tag;
