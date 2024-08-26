import React from 'react';
import NavLink from '@/components/NavLink';

const MenuOverlay = ({ links, closeFn }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} closeFn={closeFn} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
