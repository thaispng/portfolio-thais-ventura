import React from "react";

interface TitleProps {
    title: string;
}

export default function Title({ title }: TitleProps) {
    return (
        <h1 className="text-primary font-semibold">
            {title}
        </h1>
    );
}
