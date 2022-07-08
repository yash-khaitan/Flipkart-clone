import React from 'react'
import HeaderContent from './HeaderContent'
import './header.css'

export default function Header() {
    return (
        <div className='Header'>
            <div className='Header__blank'></div>
            <HeaderContent />
            <div className='Header__blank'></div>

        </div>
    )
}
