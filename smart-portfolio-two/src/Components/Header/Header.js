import { useEffect, useState } from "react";
import {
    HeaderTag,
    Nav,
    Logo,
    NavMenu,
    NavList,
    NavItem,
    NavLink,
    NavToggle,
} from "./styledHeader";

export const Header = ({ data }) => {
    const [show, setShow] = useState(false);
    const [scrollHeader, setScrollHeader] = useState(false);

    const toggleShow = () => setShow(state => !state);
    const toggleHide = () => setShow(false);
    const showShadow = () => window.scrollY > 100 ? setScrollHeader(true) : setScrollHeader(false);

    // Icons Declaration
    const bxMenu = 'bx-menu';
    const bxX = 'bx-x';

    const links = data.map(link => (
        <NavItem key={link.id}>
            <NavLink
                scrollheader={scrollHeader.toString()}
                to={link.href}
                smooth={true}
                duration={50}
                spy={true}
                exact="true"
                offset={-50}
                activeClass="active-link"
                onClick={toggleHide}
            >
                {link.name}
            </NavLink>
        </NavItem>
    ));

    useEffect(() => {
        window.addEventListener("scroll", showShadow);
    }, []);

    return (
        <HeaderTag scrollHeader={scrollHeader}>
            <Nav>
                <Logo scrollHeader={scrollHeader}>Omar Hassan</Logo>

                <NavMenu scrollHeader={scrollHeader} show={show}>
                    <NavList>
                        {links}
                    </NavList>
                </NavMenu>

                <NavToggle scrollHeader={scrollHeader} onClick={toggleShow}>
                    <i className={`bx ${show ? bxX : bxMenu}`}></i>
                </NavToggle>
            </Nav>
        </HeaderTag>
    );
};
