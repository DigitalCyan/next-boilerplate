"use client";

import Text from "@/components/_core/text/text";
import classNames from "@/util/classNames";
import {useRouter} from "next/navigation";
import {BUTTON_SIZEMAP} from "@/util/sizemaps";

interface IButtonProps {
  href?: string;
  onClick: () => void;
  text: string;
  size?: Size;
  colorOverride?: string;
}

const Button = ({href, onClick, text, size = "md", colorOverride}: IButtonProps) => {
  const router = useRouter();

  const className = classNames(
    "flex justify-center items-center rounded-lg shadow-md text-black",
    BUTTON_SIZEMAP[size],
    colorOverride || "bg-primary"
  );

  const clickHandler = () => {
    onClick();

    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      onClick={clickHandler}
      className={className}
    >
      <Text>{text}</Text>
    </button>
  );
};

export default Button;