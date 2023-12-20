import React from "react";

export default function Link({href = '#', className, children, label}){
    return(
        <>
        <a 
            aria-label={label}
            href={href} 
            className={`cursor-pointer ${className}`}>
            {children}
        </a>
        </>
    )
}