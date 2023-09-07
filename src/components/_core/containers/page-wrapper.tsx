import IChildrenProps from "@/interfaces/children-props";

interface IPageWrapperProps extends IChildrenProps {
}

const PageWrapper = ({children}: IPageWrapperProps) => {
  return (
    <div className="flex flex-col items-center w-full overflow-y-scroll">
      {children}
    </div>
  );
};

export default PageWrapper;