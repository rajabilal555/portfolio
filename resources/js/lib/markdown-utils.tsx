import {Components} from "react-markdown";

export const customMarkdownComponents: Partial<Components> | null | undefined = {
    strong: ({node, ...props}) => <span className="font-semibold text-primary" {...props}/>,
}
