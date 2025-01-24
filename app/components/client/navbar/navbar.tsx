'use client'

import React from 'react'
import Logo from '@/app/components/shared/logo/logo'
import Button from '@/app/components/shared/button/button'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className="py-12 px-10 container flex justify-between items-center mx-auto">
            <div>
                <Logo width={100} height={100} />
            </div>
            <div>
                <ul className="flex justify-between items-center text-text font-font_family_primary">
                    <li className="hover:text-color_green cursor-pointer pr-6">Home</li>
                    <li className="hover:text-color_green cursor-pointer pr-6">Our Story</li>
                    <Button/>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;