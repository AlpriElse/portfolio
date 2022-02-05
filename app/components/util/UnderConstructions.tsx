import { CSSProperties } from "react";

const columnContainerStyles: CSSProperties = {
  display: "flex",

  flexDirection: "column",
};

const imageStyles: CSSProperties = {
  paddingTop: "4em",
  width: "15em",
  margin: "0 auto",
};

export default function UnderConstruction() {
  return (
    <div style={columnContainerStyles}>
      <img style={imageStyles} src="/images/under-construction.png" />
      <h4 style={{ margin: "0 auto" }}>Page Still Under Construction 😬</h4>
    </div>
  );
}
