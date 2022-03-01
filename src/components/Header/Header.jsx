import React from 'react';
import { Nav, NavLink, NavMenu } from '../Header/Header.style';

const Header = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to='/'>
                        HOME
                    </NavLink>
                    <NavLink to='/faq'>
                        FAQ
                    </NavLink>
                    <NavLink to='/about-us'>
                        ABOUT US
                    </NavLink>
                    <NavLink to='/contact-us'>
                        CONTACT US
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Header;
