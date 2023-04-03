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
                className="bg-primary min-h-screen"
            >
                <div className="p-16 grid grid-cols-1 justify-items-center">
                    <div className={"container"}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;