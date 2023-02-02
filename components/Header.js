import React from 'react';
import User from './user';

export default function Header(){
    return(
        <header className="flex justify-between p-5 text-sm">
            <div className="flex space-x-4 items-center">
                <p className="link">Design spotlight</p>
                <p className="link">Bussiness</p>
                <p className="link">Education</p>
                <p className="link">plans and pricing</p>
                <p className="link">Learn</p>
            </div>
            <div className="flex space-x-4 items-center">
                <p className="link">Log in</p>
                <p className="link">Sign up</p>
                
            </div>
        </header>
    )
}