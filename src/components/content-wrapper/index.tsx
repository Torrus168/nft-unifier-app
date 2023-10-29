import React from "react";

type ContentWrapperProps = {
    children: React.ReactNode
}
const ContentWrapper = ({ children }: ContentWrapperProps): React.JSX.Element => {
    return (
        <div className="content-wrapper">
        {children}
        </div>
    )
}