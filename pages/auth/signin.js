import Header from '@/components/Header'
import React from 'react'
import {getProviders,Login} from "next-auth/react";

export default function Login({providers}){
return(
    <>
     <Header/>
     <div className="">
        {Object.values(providers).map(provider=>(
            <div key={provider.name} className="">
               
               <div className="body">
           <p className="">What will you design today?</p>
           </div>
           <div>
           <p className="btn-Signupfree">Sign up free {provider.name}</p>
           
           </div>

           <img className ="h-30 mr-5 ml-5 mt-10  p-5 "src="https://www.rebilly.com/44967830fa84e1e897bb282fd02fbe55/designfromablanktemplate.gif"></img>
           <div className="mt-10 canva mr-90">
           <button className="btn-Signupfree"  onClick={()=>Login(provider.id,{callbackUrl:"/"})}> Sign up free {provider.name}</button>
          

           </div>

               </div> 
        ))}
        
        
     </div>
    </>
)
}

export async function getServerSideProps(){
    const providers= await getProviders();
    return{
        props:{providers},
    }

}