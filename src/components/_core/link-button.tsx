import Text from "@/components/_core/text/text";
import classNames from "@/util/classNames";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {BUTTON_SIZEMAP} from "@/util/sizemaps";

interface IButtonProps {
  href: string;
  onClick?: () => void;
  text: string;
  size?: Size;
  colorOverride?: string;
  className?: string;
}

const LinkButton = ({href, onClick, text, size = "md", colorOverride, className: passedClassName}: IButtonProps) => {
  const className = classNames(
    "flex justify-center items-center rounded-lg shadow-md text-black",
    BUTTON_SIZEMAP[size],
    colorOverride || "bg-primary",
    passedClassName
  );

  console.log(BUTTON_SIZEMAP[size]);

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