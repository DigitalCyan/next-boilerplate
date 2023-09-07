import ClassnameProps from "@/interfaces/classname-props";
import ChildrenProps from "@/interfaces/children-props";
import classNames from "@/util/classNames";

const titleSizes: Record<Size, string> = {
  xl: "text-8xl",
  lg: "text-7xl",
  md: "text-6xl",
  sm: "text-5xl",
};

interface ITitleProps extends ClassnameProps, ChildrenProps {
  size?: Size;
}

const Title = ({size = "md", className, children}: ITitleProps) => {
  return (
    <p
      className={classNames(titleSizes[size], className)}
    >
      {children}
    </p>
  );
};

export default Title;
