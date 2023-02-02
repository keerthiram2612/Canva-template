import Header from '@/components/Header'
import React from 'react'
import {getProviders} from "next-auth/react";

export default function signIn({providers}){
return(
    <>
     <Header/>
     <div className="">
        
        
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