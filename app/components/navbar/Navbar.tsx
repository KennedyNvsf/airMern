'use client';

import React from 'react';
//components
import { 
  Container, 
  Logo, 
  Search, 
  UserMenu 
} from '../';

type NavbarProps = {
  
};

const Navbar:React.FC<NavbarProps> = () => {
  
  return (

    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div 
            className='
              flex
              flex-row
              items-center
              justify-between
              gap-3
              md: gap-0
            '
          >
            <Logo/>
            <Search/>
            <UserMenu/>
          </div>
        </Container>
      </div>
    </div>
  )
}
export default Navbar;