import React from 'react';
import User from './user';
import { SearchIcon} from "@heroicons/react/solid";

export default function Header(){
    return(
      
        <header className="flex justify-between p-5 text-sm">
            <div className="flex space-x-8 items-center  hover:underline">
                <img className ="w-20 ml-10 object-cover cursor-pointer"src="https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png" 
                alt="canva-logo"/>
                <p className="link  text-gray-600 btn-Design">Design spotlight</p>
                <p className="link  text-gray-600 btn-Bussiness ">Bussiness</p>
                <p className="link text-gray-600 btn-Education">Education</p>
                <p className="link  text-gray-600 btn-plans">plans and pricing</p>
                <p className="link  text-gray-600 btn-Learn">Learn</p>
              
            </div>
            <div className="search flex space-x-4 ">
            <SearchIcon className="h-7 text-gray-500 mr-3 "/> 
                    <input className="srch" name=""placeholder="Try logo,poster anything!"/>
                    <a href="#"> <button class="btn"></button></a>
                   
                
                </div>
            <div className="flex space-x-4 items-center hover:underline">
                <p className="link  text-gray-600 btn-Login cent">Log in</p>
                <p className="link  text-gray-600 btn-Signup cent ">Sign up</p>
                </div>
                
                
                 
                
            
        </header>
    )
}
