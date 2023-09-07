import ClassnameProps from "@/interfaces/classname-props";
import ChildrenProps from "@/interfaces/children-props";
import classNames from "@/util/classNames";

interface ITextProps extends ClassnameProps, ChildrenProps {
  bold?: boolean;
}

const Text = ({bold = false, className, children}: ITextProps) => {
  return (
    <p
      className={
        classNames(
          "text-xl",
          bold && "font-bold",
          className
        )
      }
    >
      {children}
    </p>
  );
};

export default Text;