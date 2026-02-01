"use client";

import React, { memo } from "react";

export const AuroraText = memo(({
    children,
    className = "",
    colors = [
        "#5E4A3B", // espresso
        "#6F5B4B", // deep taupe
        "#7A6452", // warm brown
        "#8B735C", // dark nude
        "#9A8068", // mocha nude
        "#A08870"  // muted caramel
    ],
    speed = 2.2
}) => {
    const gradientStyle = {
        backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animationDuration: `${10 / speed}s`
    };

    return (
        <span className={`relative inline-block ${className}`}>
            <span className="sr-only">{children}</span>

            <span
                className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
                style={gradientStyle}
                aria-hidden="true"
            >
                {children}
            </span>
        </span>
    );
});

AuroraText.displayName = "AuroraText";