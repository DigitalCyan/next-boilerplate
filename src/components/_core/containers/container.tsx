import IChildrenProps from "@/interfaces/children-props";
import IClassNameProps from "@/interfaces/classname-props";
import classNames from "@/util/classNames";

interface IContainerProps extends IClassNameProps, IChildrenProps {
  flow?: boolean;
  fill?: boolean;
  responsive?: boolean;
  center?: boolean;
  screen?: boolean;
}

const Container = ({
  flow = false,
  fill = false,
  responsive = false,
  center = true,
  screen = false,
  className,
  children
}: IContainerProps) => {
  return (
    <div
      className={classNames(
        "relative flex gap-10",
        flow && "w-full",
        fill && "w-full h-full",
        responsive ? "flex-col lg:flex-row" : "flex-col",
        center && "items-center justify-center",
        screen && "min-h-[100svh] w-full items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;