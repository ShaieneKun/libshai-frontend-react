import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';
import { ReactNode } from 'react';

import Button from '@mui/material/Button';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="App">
            <head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </head>
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

