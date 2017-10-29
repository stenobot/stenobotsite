import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class CircleNavItem extends React.Component<{}, {}> {
    public render() {
        return <div className="nav-link-cont">
            <NavLink to={ '/bitsynth' } className="nav-link">
                <svg width="150" height="150">
                    <defs>
                        <pattern id="image" patternUnits="userSpaceOnUse" height="100" width="100">
                            <image x="0" y="0" height="100" width="100" xlinkHref="http://f4.bcbits.com/img/a1644578621_2.jpg"/>
                        </pattern>
                    </defs>
                    <circle className="circle-btn" cx="50" cy="50" r="50" fill="url(#image)"/>
                    <text className="circle-btn-text" x="28%" y="47%" text-anchor="middle" stroke="#51c5cf" stroke-width="2px" dy=".3em">BitSynth</text>
                </svg>         
            </NavLink>
        </div>;
    }
}
