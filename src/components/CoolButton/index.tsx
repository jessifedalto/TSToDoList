import { ButtonHTMLAttributes, useState } from "react";

interface ICoolButtonProps {
    increment: number;
    start?: number;
}

export default function CoolButton(
    { increment, start, ...props }:ICoolButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const [count, setCount] = useState<number>(start || 0);

    return(
        <button {...props} onClick={() => setCount(prev => prev + increment)}>
            { count }
        </button>
    )
}