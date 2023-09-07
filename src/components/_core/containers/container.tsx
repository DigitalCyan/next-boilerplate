import IChildrenProps from "@/interfaces/children-props";
import IClassNameProps from "@/interfaces/classname-props";
import classNames from "@/util/classNames";

interface IContainerProps extends IClassNameProps, IChildrenProps {
  flow?: boolean;
  fill?: boolean;
  responsive?: boolean;
  center?: boolean;
}

const Container = ({flow = true, fill = false, responsive = false, center = true, className, children}: IContainerProps) => {
  return (
    <div
      className={classNames(
        "flex gap-10",
        flow && "w-full",
        fill && "w-full h-full",
        responsive ? "flex-col lg:flex-row" : "flex-col",
        center && "items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;