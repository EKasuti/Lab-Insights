"use client";

import { Info } from "lucide-react";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

interface InfoTooltipProps {
    content: React.ReactNode;
    className?: string;
}

export default function InfoTooltip({ content, className = "" }: InfoTooltipProps) {
    const [open, setOpen] = useState(false);

    return (
        <TooltipProvider>
            <Tooltip open={open} onOpenChange={setOpen}>
                <TooltipTrigger asChild>
                    <button
                        className={`text-gray-400 hover:text-gray-600 transition-colors ${className}`}
                        aria-label="Information"
                        onClick={() => setOpen(!open)}
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                    >
                        <Info className="h-5 w-5" />
                    </button>
                </TooltipTrigger>
                <TooltipContent
                    side="bottom"
                    align="start"
                    className="max-w-[280px] md:max-w-sm"
                    onPointerDownOutside={() => setOpen(false)}
                >
                    {content}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
