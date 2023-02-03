import React from 'react';
import User from './user';
import { SearchIcon} from "@heroicons/react/solid";
import {BsFillQuestionCircleFill} from "react-icons/Bs";
import{IoIosArrowDown}from  "react-icons/Io";
export default function Header(){
    return(
      
        <header className="flex justify-between p-5 text-sm lg:justify-start border-b pb-0 border-shadow-12">
            
            <div className="flex space-x-8 items-center  hover:underline">
                <img className ="w-20 ml-10 object-cover cursor-pointer"src="https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png" 
                alt="canva-logo"/>
                <p className="link  text-gray-600 btn-Design "><IoIosArrowDown className/>
                    Design spotlight</p>

                <p className="link  text-gray-600 btn-Bussiness "><IoIosArrowDown className/>
                    Bussiness</p>
                <p className="link text-gray-600 btn-Education"><IoIosArrowDown className/>
                    Education</p>
                <p className="link  text-gray-600 btn-plans"><IoIosArrowDown className/>
                    plans and pricing</p>
                <p className="link  text-gray-600 btn-Learn"><IoIosArrowDown className/>
                    Learn</p>
              
            </div>
            <div className="search flex space-x-4 items-center pt-2 pb-12 ">
            <form className="flex border border-gray-200 square-full shadow-lg py-2 ml-15 mr-5 flex-grow max-w-3xl items-center ">
            <SearchIcon className="h-8 text-gray-500 mr-3 px-2 "/>
            <input className=" w-full focus:outline-none"
            type="text" name=""placeholder="Try logo,poster anything!"/>
           
            </form>
            <BsFillQuestionCircleFill className=""/>
            </div>

            <div className="flex space-x-4 items-center ">
                <p className="link  text-gray-600 btn-Login cent">Log in</p>
                <p className="link  text-gray-600 btn-Signup cent ">Sign up</p>
                </div>
                
                
                 
                
            
        </header>
    )
}
