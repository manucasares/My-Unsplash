import React from 'react';

import { Logo, Navbar_el } from './Navbar.elements';
import { Button, Input } from 'shared';
import { AiOutlineSearch } from "react-icons/ai";


export const Navbar = () => {
    return (
        <Navbar_el>
            <Logo />
            <Input
                placeholder="Search by name"
                Icon={ AiOutlineSearch }
            />
            <Button> Add a photo </Button>
        </Navbar_el>
    )
}
