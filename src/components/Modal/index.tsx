import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { classNames } from "../../utils/helper";
import { useSelector } from "react-redux";
import { getLoading } from "../../reducer/loading/loadingSlice";

interface IProps {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  width?: string;
  close?: boolean;
  closeable?: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<IProps> = ({
  open,
  onClose,
  width,
  close,
  closeable = true,
  children,
}) => {
  const cancelButtonRef = useRef(null);

  const modalWidth = width ? `sm:max-w-${width} ` : "sm:max-w-sm";
  const loading = useSelector(getLoading);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={
          closeable
            ? onClose
            : () => {
                return;
              }
        }
      >
        <div
          className={classNames(
            loading.loading && "pointer-events-none",
            "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
          )}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className={classNames(
                modalWidth,
                "sm:max-w-3xl w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle"
              )}
            >
              {close && (
                <div className="hidden sm:block absolute top-2 right-2 pt-4 pr-4 z-[80]">
                  <button
                    className="bg-gray-200 p-1 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none "
                    onClick={() => onClose(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              )}
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
