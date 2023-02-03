import React from 'react';
import User from './user';

export default function Header(){
    return(
        <header className="flex justify-between p-5 text-sm">
            <div className="flex space-x-8 items-center  hover:underline">
                <img className ="w-20 ml-10 object-cover cursor-pointer"src="https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png" 
                alt="canva-logo"/>
                <p className="link  text-gray-600 ">Design spotlight</p>
                <p className="link  text-gray-600">Bussiness</p>
                <p className="link text-gray-600">Education</p>
                <p className="link  text-gray-600">plans and pricing</p>
                <p className="link  text-gray-600">Learn</p>
              
            </div>
            <div className="flex space-x-4 items-center hover:underline">
                <p className="link  text-gray-600">Log in</p>
                <p className="link  text-gray-600">Sign up</p>
                 <User/>
                
            </div>
        </header>
    )
}