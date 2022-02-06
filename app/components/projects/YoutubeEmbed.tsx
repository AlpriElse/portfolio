import { CSSProperties } from "react";
import { ABYSS } from "~/constants/Colors";

const styles: CSSProperties = {
  borderRadius: "1em",
  backgroundColor: ABYSS,
};

type YoutubeEmbedProps = {
  src: string;
};

export default function YoutubeEmbed({ src }: YoutubeEmbedProps) {
  return (
    <iframe
      style={styles}
      width="560"
      height="350"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
