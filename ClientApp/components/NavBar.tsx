import * as React from 'react';
import { CircleNavItem } from './CircleNavItem';

export class NavBar extends React.Component<{}, {}> {
    public render() {
        return <div className="nav-bar">
            <CircleNavItem />          
        </div>;
    }
}
