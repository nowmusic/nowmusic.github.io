export default function Iframe({ url }) {
  return (
    <iframe
      width="500"
      height="305"
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
