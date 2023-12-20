import React from "react";

import Link from "@/UI/atoms/link";


export default function NavButton(){
    return(
        <> 
          <div className="flex gap-3">
            <Link
              label="login button"
              className="bg-blue rounded-full py-2 px-5 font-ibm bg-transparent text-blue font-semibold border border-blue hover:bg-blue hover:text-white hover:ring-4">
              Log in</Link>
            <Link 
              label="sign up button"
              className="bg-blue font-semibold text-white rounded-full py-2 px-5 font-ibm  hover:bg-blue hover:text-white hover:ring-4">
                Sign up</Link>
          </div>
        </>
    )
}