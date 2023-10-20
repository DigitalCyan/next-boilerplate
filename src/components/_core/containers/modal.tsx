"use client";

import IChildrenProps from "@/interfaces/children-props";
import IClassNameProps from "@/interfaces/classname-props";
import classNames from "@/util/classNames";
import {Transition} from "@headlessui/react";

interface IModalProps extends IChildrenProps, IClassNameProps {
  show: boolean;
  fullscreen?: boolean;
}

const Modal = ({show, fullscreen, className, children}: IModalProps) => {
  return (
    <Transition
      show={show}
      enter="transition-all duration-500"
      enterFrom="bg-black/[0.0]"
      enterTo="bg-black/[0.5]"
      leave="transition-all duration-500"
      leaveFrom="bg-black/[0.5]"
      leaveTo="bg-black/[0.0]"

      className={classNames(
        "fixed top-0 left-0 w-full h-[100svh] z-20 flex justify-center items-center",
        className
      )}
    >
      <Transition.Child
        enter="transition-all duration-500"
        enterFrom="translate-y-full"
        enterTo="translate-y-0"
        leave="transition-all duration-500"
        leaveFrom="translate-y-0"
        leaveTo="translate-y-full"
        className="w-full h-[100svh] flex items-center justify-center"
      >
        <div
          className={
            classNames(
              "w-full h-full bg-background p-5",
              !fullscreen && "max-w-4xl max-h-96 rounded-xl"
            )
          }
        >
          {children}
        </div>
      </Transition.Child>
    </Transition>
  );
};

export default Modal;