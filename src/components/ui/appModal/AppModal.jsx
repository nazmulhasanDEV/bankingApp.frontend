import React from "react";
import { Modal } from "antd";
import { X } from "react-feather";

const AppModal = ({ isOpen, onClose, footerBtn: { btnOne, btnTwo }, title, content }) => {
  const CustomFooter = () => (
    <div className="border-t-[2px] border-gray-300 border-opacity-40 absolute left-0 h-24 w-full bg-white-primary rounded-b-md flex items-center justify-end px-5">
      <span>
        <button className="btn-outline mx-2" onClick={onClose}>
          {btnOne}
        </button>
      </span>
      <span>
        <button className="btn-primary" onClick={onClose}>
          {btnTwo}
        </button>
      </span>
    </div>
  );
  const CustomHeader = () => (
    <div className="flex justify-between items-center absolute left-0 top-0 w-full px-6 text-center bg-purple-soft rounded-t-md">
      <p className="text-medium-24 text-gray-primary py-5">{title}</p>
      <button className="text-gray-primary outline-none border-none" onClick={onClose}>
        <X className="w-7 h-7" />
      </button>
    </div>
  );
  return (
    <>
      <Modal
        title={<CustomHeader />}
        open={isOpen}
        onOk={onClose}
        onCancel={onClose}
        closable={false}
        width={900}
        className="modal"
        transitionName=""
        maskTransitionName=""
        footer={<CustomFooter />}
      >
        {content}
      </Modal>
    </>
  );
};

export default AppModal;
