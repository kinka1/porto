import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  /** Opens in a new tab with the right rel attributes. Set for off-site links. */
  external?: boolean;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:bg-foreground/85 border border-transparent",
  secondary:
    "border border-border bg-background text-foreground hover:border-foreground/40 hover:bg-card",
  ghost: "text-foreground hover:bg-card border border-transparent",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

/**
 * Link styled as a button. Every CTA in the site is a navigation action,
 * so this intentionally renders an anchor rather than a <button>.
 */
export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors",
    variants[variant],
    sizes[size],
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
