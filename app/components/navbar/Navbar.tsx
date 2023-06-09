'use client';

import React from 'react';
import { SafeUser } from "@/app/types";
//components
import { 
  Container, 
  Logo, 
  Search, 
  UserMenu,
  Categories
} from '../';

type NavbarProps = {
  currentUser?: SafeUser | null;
};

const Navbar:React.FC<NavbarProps> = ({currentUser}) => {
  
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
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>

      {/* categories */}
      <Categories/>

    </div>
  )
}
export default Navbar;