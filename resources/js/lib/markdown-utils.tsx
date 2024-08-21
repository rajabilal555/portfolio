import {Components} from "react-markdown";

export function mdC(components: Partial<Components>[]): Partial<Components> {
    let retVal: Partial<Components> = {};

    for (const el of components) {
        retVal = {...el, ...retVal};
    }
    return retVal;
}

export const mdPrimaryStrong: Partial<Components> = {
    strong: ({node, ...props}) => <span className="font-semibold text-primary" {...props}/>,
}
export const mdExperienceList: Partial<Components> = {
    ul: ({node, ...props}) => <ul className="ml-4 list-disc" {...props}/>,
}

