import { CSSProperties, ReactNode } from "react";

type UIFlexProps = {
  children: ReactNode;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "start"
    | "end"
    | "left"
    | "right";
  style?: CSSProperties;
};

export default function UIFlex({
  children,
  direction = "row",
  justify = "flex-start",
  style,
}: UIFlexProps) {
  const styles: CSSProperties = {
    display: "flex",
    flexDirection: direction,
    justifyContent: justify,
    ...style,
  };

  return <div style={styles}>{children}</div>;
}
