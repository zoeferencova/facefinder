import React from 'react';
import styles from './Navigation.module.css'

const Navigation = ({ onRouteChange, isSignedIn }) => {
    return (
        <nav className={styles.navBar}>
            <img alt="Logo" src='' />
            { isSignedIn
                ? <p className="link" onClick={() => onRouteChange('signout')}>Sign Out</p>
                : <div className={styles.multiNav}>
                    <p className="link" onClick={() => onRouteChange('signin')}>Sign In</p>
                    <p className="link" onClick={() => onRouteChange('register')}>Sign Up</p>
                </div>
            }    
        </nav>
    )
}

export default Navigation;