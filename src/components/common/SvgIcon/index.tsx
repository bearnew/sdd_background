import * as React from "react";

interface SvgIconProps {
    color: string;
    size: number;
    type: string;
}

export default function SvgIcon(props: SvgIconProps) {
    const { type, color, size } = props;
    return (
        <svg className="icon" style={{ color: color, fontSize: size }}>
            <use xlinkHref={`#icon${type}`} href={`#icon${type}`} />
        </svg>
    );
}
