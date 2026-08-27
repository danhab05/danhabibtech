type MarqueeProps = {
  items: readonly string[];
  variant?: "fill" | "outline";
  reverse?: boolean;
};

export default function Marquee({
  items,
  variant = "fill",
  reverse = false,
}: MarqueeProps) {
  const group = (
    <>
      {items.map((item, i) => (
        <span className="marquee-item" key={i}>
          {item}
          <span className="marquee-sep" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </>
  );

  return (
    <div
      className={`marquee marquee-${variant}${reverse ? " marquee-reverse" : ""}`}
      aria-hidden="true"
    >
      <div className="marquee-track">
        <div className="marquee-group">{group}</div>
        <div className="marquee-group">{group}</div>
      </div>
    </div>
  );
}
