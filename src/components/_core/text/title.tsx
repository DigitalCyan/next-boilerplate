import ClassnameProps from "@/interfaces/classname-props";
import ChildrenProps from "@/interfaces/children-props";
import classNames from "@/util/classNames";

interface ITitleProps extends ClassnameProps, ChildrenProps {
}

const Title = ({className, children}: ITitleProps) => {
  return (
    <p
      className={classNames("text-4xl", className)}
    >
      {children}
    </p>
  );
};

export default Title;
