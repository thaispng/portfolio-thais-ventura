import React from "react";

interface SubTitleProps {
    subTitle: string;
}

export default function SubTitle({ subTitle }: SubTitleProps) {
    return (
        <h1 className="text-tertiary font-medium">
            {subTitle}
        </h1>
    );
}
