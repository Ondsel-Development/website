import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import clsx from 'clsx';
import styles from './styles.module.css';
function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
function NavbarItems({items}) {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
    </>
  );
}
function NavbarContentLayout({left, center, right}) {
  return (
    <div className={clsx('navbar__inner')}>
      <div className='navbar__items navbar_layout'>{left}</div>
      <div className="navbar__items desktop text_gray">{center}</div>
      <div className="navbar__items navbar__items--right desktop text_gray">{right}</div>
    </div>
  );
}
export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === 'search');
  return (
    <div className='wrapper'>
      <div className='menu_button'>
        {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
      </div>
      <NavbarContentLayout
        left={
          // TODO stop hardcoding items?
          <>
            {/* {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />} */}
            <NavbarLogo />
          </>
        }
        center={
          <NavbarItems items={leftItems} />
        }
        right={
          // TODO stop hardcoding items?
          // Ask the user to add the respective navbar items => more flexible
          <>
            <NavbarItems items={rightItems} />
            {/* <NavbarColorModeToggle className={styles.colorModeToggle} /> */}
            {!searchBarItem && (
              <NavbarSearch>
                <SearchBar />
              </NavbarSearch>
            )}
          </>
        }
      />
    </div>
  );
}
