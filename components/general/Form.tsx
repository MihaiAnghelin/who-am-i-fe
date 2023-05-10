import React from "react";

type Props = {
    onSubmit: () => void;
    className?: string;
    children: React.ReactNode;
};

const Form = (
    {
        onSubmit,
        className,
        children,
    }: Props): JSX.Element =>
{
    return (
        <form onSubmit={onSubmit} className={"grid grid-cols-1 gap-6 justify-items-center [&>*]:w-full " + className}>
            {children}
        </form>
    );
};

export default Form;