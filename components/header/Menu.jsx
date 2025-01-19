import Link from 'next/link';

import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
} from '../../data/mainMenuData';
import CategoriesMegaMenu from './CategoriesMegaMenu';
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from '../../utils/linkActiveChecker';
import { useRouter } from 'next/router';

const Menu = ({ style = '' }) => {
  const router = useRouter();

  return (
    <nav className='menu js-navList'>
      <ul className={`menu__nav ${style} -is-active`}>
        {/* End home page menu */}

        <li className='menu-item-has-children -has-mega-menu'>
          <Link href='/flight/flight1'>
            <span className='mr-10'>Flights</span>
            {/* <i className='icon icon-chevron-sm-down' /> */}
          </Link>
          {/* <div className='mega'>
            <CategoriesMegaMenu />
          </div> */}
        </li>
        <li className='menu-item-has-children -has-mega-menu'>
          <Link href='/hotel/hotel1'>
            <span className='mr-10'>Hotels</span>
            {/* <i className='icon icon-chevron-sm-down' /> */}
          </Link>
          {/* <div className='mega'>
            <CategoriesMegaMenu />
          </div> */}
        </li>
        {/* End categories menu items */}

        <li className={router.pathname === '/visa' ? 'current' : ''}>
          <Link href='/visa'>Visa</Link>
        </li>
        <li
          className={
            router.pathname === '/package/tour-package' ? 'current' : ''
          }
        >
          <Link href='/package/tour-package'>Tour Package</Link>
        </li>
        {/* End Destinatinos single menu */}

        {/* <li
          className={`${
            isActiveParentChaild(blogItems, router.asPath) ? 'current' : ''
          } menu-item-has-children`}
        >
          <a href='#'>
            <span className='mr-10'>Tour Package</span>
            <i className='icon icon-chevron-sm-down' />
          </a>
          <ul className='subnav'>
            {blogItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? 'current' : ''
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}
        {/* End blogIems */}

        {/* <li
          className={`${
            isActiveParentChaild(pageItems, router.asPath) ? 'current' : ''
          } menu-item-has-children`}
        >
          <a href='#'>
            <span className='mr-10'>Pages</span>
            <i className='icon icon-chevron-sm-down' />
          </a>
          <ul className='subnav'>
            {pageItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? 'current' : ''
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}
        {/* End pages items */}
        {/* 
        <li
          className={`${
            isActiveParentChaild(dashboardItems, router.asPath) ? 'current' : ''
          } menu-item-has-children`}
        >
          <a href='#'>
            <span className='mr-10'>Dashboard</span>
            <i className='icon icon-chevron-sm-down' />
          </a>
          <ul className='subnav '>
            {dashboardItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? 'current' : ''
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}

        {/* <li className={router.pathname === '/contact' ? 'current' : ''}>
          <Link href='/contact'>Contact</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Menu;
