import React from "react";
import {computedTextClass} from "@/utils/frontend/computedClass";
import styles from './index.module.css'

type TextProps = {
    children: React.ReactNode,
    variant: "heading" | "subheading" | "body" | "caption" | "button" | "link" | "paragraph",
}
const Heading= ({ children, variant }: TextProps): React.JSX.Element => {
    return <p className={computedTextClass({
        baseClassName: styles.text,
        variant: variant,
        styles: styles
    })
    }>{children}</p>;
}
export default Heading;