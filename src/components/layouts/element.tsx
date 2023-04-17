import { Element as Section } from "react-scroll";

export {Element}

type props = {
    children?: React.ReactElement | React.ReactElement[];
    name: string
    className?: string;
}

function Element({name, children, className}: props): React.ReactElement {
    return(
        <Section name={name} className={className}>
            {children}
        </Section>
    )
}