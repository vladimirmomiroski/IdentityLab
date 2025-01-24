'use client'

import React from 'react'
import Logo from '@/app/components/shared/logo/logo'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav>
            <div>
                <Logo width={400} height={400} />
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;