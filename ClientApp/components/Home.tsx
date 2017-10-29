import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { NavBar } from './NavBar';

export class Home extends React.Component<RouteComponentProps<{}>, {}> 
{
    public render() 
    {
        return <div className="home-cont">         
            <NavBar />          
        </div>;
    }
}
