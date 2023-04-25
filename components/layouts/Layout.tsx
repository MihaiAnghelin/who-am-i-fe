import React from "react";

type Props = {
    children: React.ReactNode;
};

const Layout = (
    {
        children,
    }: Props): JSX.Element =>
{
    return (
        <>
            <div
                className="bg-primary min-h-screen px-2"
            >
                <div className="pt-2 w-full grid grid-cols-1 justify-items-center md:pt-16">
                    <div className={"container"}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;