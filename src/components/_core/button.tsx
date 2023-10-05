import Text from "@/components/_core/text/text";
import classNames from "@/util/classNames";
import Link from "next/link";

interface IButtonProps {
  href?: string;
  onClick?: () => void;
  text: string;
  size?: Size;
  colorOverride?: string;
}

const sizes: Record<Size, string> = {
  xl: "w-52 h-32",
  lg: "w-40 h-24",
  md: "w-32 h-16",
  sm: "w-20 h-10"
};

const Button = ({href, onClick, text, size = "md", colorOverride}: IButtonProps) => {
  const className = classNames(
    "flex justify-center items-center rounded-lg shadow-md text-black",
    sizes[size],
    colorOverride || "bg-primary"
  );

  return href ?
    (
      <Link
        href={href}
        onClick={() => onClick?.()}
        className={className}
      >
        <Text>{text}</Text>
      </Link>
    ) : (
      <button
        onClick={() => onClick?.()}
        className={className}
      >
        <Text>{text}</Text>
      </button>
    );
};

export default Button;