import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="App">
            <header className="App-header">
                <Link to="/">
                <img src={logo} className="App-logo" alt="logo" />
                </Link>
                <Link to="blog">hey</Link>
                <div>
                    { children }
                </div>
            </header>
        </div>
    )
}

