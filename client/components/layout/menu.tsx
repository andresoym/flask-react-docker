import React from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Link from 'next/link';
import cookie from 'js-cookie';
import {logout} from 'utils/auth';

export const Menu = () => {
  let userData = null;
  let isLogin = false;
  const user = cookie.get('user');
  if (user) {
    userData = JSON.parse(user);
    isLogin = true;
  }

  const onLogoutClick = () => {
    logout();
  };

  return (
    <Nav className="ml-auto" navbar>
      <NavItem>
        <Link href="/" passHref>
          <NavLink>Home</NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/components" passHref>
          <NavLink>Components</NavLink>
        </Link>
      </NavItem>
      {!isLogin && (
        <NavItem>
          <Link href="/login" passHref>
            <NavLink>Login</NavLink>
          </Link>
        </NavItem>
      )}
      {isLogin && (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            {userData.username}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <Link passHref href="/profile">
                <NavLink>Profile</NavLink>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <a onClick={onLogoutClick}>Logout</a>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      )}
    </Nav>
  );
};
