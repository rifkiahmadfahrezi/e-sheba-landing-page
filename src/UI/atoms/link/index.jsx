import React from "react";

export default function Link({href = '#', className, children}){
    return(
        <>
        <a 
            href={href} 
            className={`cursor-pointer ${className}`}>
            {children}
        </a>
        </>
    )
}