import { useEffect, useState } from "react";
import {
    ScrollupLink,
    ScrollupIcon,
} from "./styledScrollup";

export const Scrollup = () => {
    const [showScroll, setShowScroll] = useState(false);
    const handleShowScroll = () => window.scrollY >= 560 ? setShowScroll(true) : setShowScroll(false);

    useEffect(() => {
        window.addEventListener("scroll", handleShowScroll);
    }, []);

    return (
        <ScrollupLink showScroll={showScroll} href="#">
            <ScrollupIcon>
                <i className='bx bxs-chevron-up'></i>
            </ScrollupIcon>
        </ScrollupLink>
    );
};
