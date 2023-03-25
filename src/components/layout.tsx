import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

import logo from '../logo.svg';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './navbar';

import '../App.css';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="App">
            <ResponsiveAppBar />
            <header className="App-header">
                <Link to="/">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
                <div>
                    <Button variant="contained">Hello World</Button>
                </div>
                <div>
                    { children }
                </div>
            </header>
        </div>
    )
}

