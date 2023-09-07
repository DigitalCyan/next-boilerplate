import ClassnameProps from "@/interfaces/classname-props";
import ChildrenProps from "@/interfaces/children-props";
import classNames from "@/util/classNames";
import {HorizontalAlignment} from "@/types/alignment";

interface ITextProps extends ClassnameProps, ChildrenProps {
  bold?: boolean;
  align?: HorizontalAlignment;
}

const Text = ({align = "center", bold = false, className, children}: ITextProps) => {
  return (
    <p
      className={
        classNames(
          "text-xl max-w-xl",
          bold && "font-bold",
          align === "center"
            ? "text-center"
            : (align === "left")
              ? "text-left"
              : "text-right",
          className
        )
      }
    >
      {children}
    </p>
  );
};

export default Text;