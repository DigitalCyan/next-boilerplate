"use client";

import Modal from "@/components/_core/containers/modal";
import Text from "@/components/_core/text/text";
import {useState} from "react";
import Button from "@/components/_core/button";


const ModalExample = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <Button
        text="Show" onClick={() => setShow(true)}
      />
      <Modal show={show}>
        <div className="flex flex-col justify-between items-center w-full h-full">
          <Text>Holly molly, now that&apos;s a cute little modal ain&apos;t it?</Text>
          <Button text="Close" onClick={() => setShow(false)} />
        </div>
      </Modal>
    </div>
  );
};

export default ModalExample;