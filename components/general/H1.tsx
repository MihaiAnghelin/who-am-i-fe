import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
};

const H1 = (
    {
        children,
        className,
    }: Props): JSX.Element =>
{
    return (
        <h1 className={"text-3xl " + className}>
            {children}
        </h1>
    );
};

export default H1;