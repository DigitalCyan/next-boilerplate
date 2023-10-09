import IChildrenProps from "@/interfaces/children-props";
import IClassNameProps from "@/interfaces/classname-props";
import classNames from "@/util/classNames";

interface IPageWrapperProps extends IClassNameProps, IChildrenProps {
}

const PageWrapper = ({className, children}: IPageWrapperProps) => {
  return (
    <div
      className={
        classNames(
          "flex flex-col items-center gap-10 w-screen h-[100svh] overflow-y-scroll pb-20",
          className
        )}
    >
      {children}
    </div>
  );
};

export default PageWrapper;