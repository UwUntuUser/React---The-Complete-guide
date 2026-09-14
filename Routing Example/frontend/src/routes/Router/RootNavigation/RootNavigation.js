import {Outlet} from 'react-router-dom';
import MainNavigation from "../MainNavigation/MainNavigation";
import classes from './RootNavigation.module.css';

export function RootNavigation() {
    return <>
        <MainNavigation></MainNavigation>
        <main className={classes.content}>
            <Outlet></Outlet>
        </main>
    </>
}