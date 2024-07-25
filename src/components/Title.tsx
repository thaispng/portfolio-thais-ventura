import React from "react";

interface TitleProps {
    title: string;
}

export default function Title({ title }: TitleProps) {
    return (
        <h1 className="flex w-full text-primary font-semibold">
            {title}
        </h1>
    );
}
