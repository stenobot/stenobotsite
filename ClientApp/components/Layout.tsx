import * as React from 'react';
import { NavBar } from './NavBar';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className="frame-cont">


            { this.props.children }

            <header className="site-header fade-on-nav-hover">
                <h2>a. myers portfolio</h2>
            </header>

            
            <footer className="site-footer fade-on-nav-hover">
                <div className="footer-cont">
                    <ul className="footer-list">
                        <li><a className="footer-item" href='https://stenobot.wordpress.com/'>irregular expressions (blog)</a></li>
                        <li><a className="footer-item" href='http://supercommuter.net/'>supercommuter</a></li>
                        <li><a className="footer-item" href='http://stenobot.bandcamp.com'>stenobot</a></li>
                    </ul>
                </div>
            </footer>

        </div>;
    }
}
