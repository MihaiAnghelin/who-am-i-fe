import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Box = (
    {
        children,
        className,
    }: Props): JSX.Element =>
{
    return (
        <div className={"shadow rounded-xl bg-secondary text-center " + className}>
            {children}
        </div>
    );
};

export default Box;