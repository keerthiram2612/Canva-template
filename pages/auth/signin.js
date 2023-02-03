import Header from '@/components/Header'
import React from 'react'
import {getProviders} from "next-auth/react";

export default function signIn({providers}){
return(
    <>
     <Header/>
     <div className="">
        {Object.values(providers).map(provider=>(
            <div key={provider.name} className="">
                <img src="https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png" 
                alt="canva-logo"/>
                <p>This website is created for styling purposes</p>
                <button>Sign in with {provider.name}</button>
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