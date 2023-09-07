import IChildrenProps from "@/interfaces/children-props";
import IClassNameProps from "@/interfaces/classname-props";
import classNames from "@/util/classNames";

interface ITextWrapperProps extends IClassNameProps, IChildrenProps {
  flow?: boolean;
  center?: boolean;
}

const TextWrapper = ({flow = false, center = true, className, children}: ITextWrapperProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col gap-2",
        center && "items-center",
        flow && "w-full",
        className
      )}
    >
      {children}
    </div>
  );
};

export default TextWrapper;
