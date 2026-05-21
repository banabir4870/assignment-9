import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathName = usePathname();
    const isActive = pathName === href;
    return (
        <Link href={href} className={`${isActive ? 'text-green-700 font-bold' : ''}`}>
            {children}
        </Link>
    );
};

export default NavLink;