"use client";

import Text from "@/components/_core/text/text";
import classNames from "@/util/classNames";
import {useRouter} from "next/navigation";

interface IButtonProps {
  href?: string;
  onClick: () => void;
  text: string;
  flow?: boolean;
  colorOverride?: string;
}

const Button = ({href, onClick, text, flow = false, colorOverride}: IButtonProps) => {
  const router = useRouter();

  const className = classNames(
    "flex justify-center items-center rounded-lg shadow-md p-5",
    "border-2 border-primary hover:scale-110 transition-all duration-200",
    "bg-black/[0.25]",
    flow && "w-full",
    colorOverride || "border-primary"
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