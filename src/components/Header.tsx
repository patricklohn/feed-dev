import classes from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={classes.header}>
            <img src={igniteLogo} alt="Logotipo do ignite"/>
            <strong></strong>
        </header>
    )
}