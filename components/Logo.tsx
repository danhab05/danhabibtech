/** Logo NovaOr : étoile et orbites dorées, fond transparent. */
export default function Logo({ height = 56 }: { height?: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="logo-img"
      src="/brand/novaor-logo.png"
      alt="NovaOr"
      width={Math.round((height * 206) / 144)}
      height={height}
    />
  );
}
