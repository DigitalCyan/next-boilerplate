import Text from "@/components/_core/text/text";
import classNames from "@/util/classNames";
import Link from "next/link";

interface IButtonProps {
  href: string;
  onClick?: () => void;
  text: string;
  flow?: boolean
  colorOverride?: string;
  className?: string;
}

const LinkButton = ({href, onClick, text, flow = false, colorOverride, className: passedClassName}: IButtonProps) => {
  const className = classNames(
    "flex justify-center items-center rounded-lg shadow-md text-black",
    colorOverride || "bg-primary",
    flow && "w-full",
    passedClassName
  );

  return (
    <Link
      onClick={() => onClick?.()}
      href={href}
      className={className}
    >
      <Text>{text}</Text>
    </Link>
  );
};

export default LinkButton;