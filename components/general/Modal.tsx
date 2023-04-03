import React from "react";

type Props = {
    children: React.ReactNode;
    open: boolean;
};

const Modal = (
    {
        children,
        open,
    }: Props): JSX.Element =>
{


    return (
        <div className={(open ? "" : "hidden")}>
            <div id="overlay" className={"fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-70"}></div>

            <div id="dialog"
                 className={"absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl drop-shadow-lg"}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;