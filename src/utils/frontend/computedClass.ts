type Styles = {
    [key: string]: string;
}
type ComputedTextClassProps = {
    baseClassName: string;
    variant: string;
    styles: Styles;
}
export const computedTextClass = ({ baseClassName, variant, styles }: ComputedTextClassProps) => {
    return `${baseClassName} ${styles[variant]}`;
}