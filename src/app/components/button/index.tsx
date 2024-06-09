'use client'

import { cn } from "@/lib/cn";

interface button {
    title: string;
    type: 'orange' | 'outline' | 'light' ;
    className?: string;
    onClick: () => void;
}

const styles = {
    outline: 'font-manrope  text-orange py-[18px] px-[20px] border-[1px] border-orange rounded-[8px]',
    orange: 'font-manrope text-bgLight bg-orange py-[18px] px-[20px]  border-[1px] border-orange rounded-[8px]',
    light: 'font-manrope  text-bgLight py-[18px] px-[20px]  border-[1px] border-bgLight rounded-[8px]',
}
export default function Button({title, type = 'orange', onClick, className}:button) {

    return (
        <button
            onClick={onClick}
            className={cn(styles[type], className)}
        >{title}</button>
    )
}

