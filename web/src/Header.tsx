import React from 'react'

interface HeadersProps{
    title: string;
}

const Header: React.FC<HeadersProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    ); 
}

export default Header;