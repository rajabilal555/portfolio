import {CSSProperties, SVGAttributes} from "react";
import {IconContext} from "react-icons/lib";
import loadable from "@loadable/component";

interface IProps {
    icon: string;
    color?: string;
    size?: string;
    className?: string;
    style?: CSSProperties;
    attr?: SVGAttributes<SVGElement>;
}


// Major thanks to https://github.com/react-icons/react-icons/issues/364#issuecomment-894542146
const DynamicFAIcon = ({...props}: IProps) => {
    // @ts-ignore
    const Icon = loadable(() => import(`react-icons/fa`), {
        resolveComponent: (el: JSX.Element) => {
            const key = props.icon as keyof JSX.Element;
            if (key in el) {
                return el[key];
            } else {
                const backupKey = "FaQuestion" as keyof JSX.Element;
                return el[backupKey];
            }
        }
    })

    const value: IconContext = {
        color: props.color,
        size: props.size,
        className: props.className,
        style: props.style,
        attr: props.attr
    };

    return (
        <IconContext.Provider value={value}>
            <Icon/>
        </IconContext.Provider>
    );
};

export default DynamicFAIcon;
