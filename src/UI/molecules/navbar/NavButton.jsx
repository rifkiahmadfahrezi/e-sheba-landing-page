import React from "react";

import Link from "@/UI/atoms/link";


export default function NavButton(){
    return(
        <> 
          <div className="flex gap-3">
            <Link
              className="bg-blue rounded-full py-2 px-5 font-ibm bg-transparent text-blue font-semibold border border-blue hover:opacity-[.8]">
              Log in</Link>
            <Link 
              className="bg-blue font-semibold text-white rounded-full py-2 px-5 font-ibm hover:opacity-[.8]">
                Sign up</Link>
          </div>
        </>
    )
}