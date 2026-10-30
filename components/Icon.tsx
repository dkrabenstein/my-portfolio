type IconName = "arrow-up-right" | "chevron-down" | "chevron-up" | "download" | "user-round";

type IconProps = {
  name: IconName;
  size: number;
  className?: string;
};

// Renders an SVG from public/icons as a mask so it takes the current text color (a token)
// instead of the stroke color baked into the exported file.
export function Icon({ name, size, className = "" }: IconProps) {
  const url = `url(/icons/${name}.svg)`;
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{
        width: size,
        height: size,
        maskImage: url,
        WebkitMaskImage: url,
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
      }}
    />
  );
}
