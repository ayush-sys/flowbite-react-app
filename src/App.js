import React from 'react'
import './App.css';
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import '@themesberg/flowbite';


export default function App() {
    return (
        <div className='container mx-auto px-4 py-2'>
            <Navbar/>
            <div className='grid grid-cols-3 gap-2 py-2 px-4'>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
            </div>
        </div>
    )
}
