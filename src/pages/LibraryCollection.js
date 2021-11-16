import React from 'react'
import { Link, NavLink } from "react-router-dom";
import Library from '../components/Library';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const LibraryCollection = () => {
    return (
        <div>
            <Header />
            <aside><Sidebar /></aside>
            <Library />
        </div>
    )
}

export default LibraryCollection
