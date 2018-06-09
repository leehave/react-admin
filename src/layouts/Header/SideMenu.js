import React from 'react';
import {Menu, Avatar} from 'zent';
import { Link } from "react-router-dom";
const { MenuItem, SubMenu } = Menu;
const renderMenuItem = ({ key, title, icon, link, ...props }) => (
  <MenuItem key={key || link} {...props}>
    <Link to={link || key}>
      {icon && <span className={icon}></span>}
      <span className="nav-text">{title}</span>
    </Link>
  </MenuItem>
);

const renderSubMenu = ({ key, title, icon, link, sub, ...props }) => (
  <Menu.SubMenu
    key={key || link}
    title={
      <span>
        {icon && <span className={icon}></span>}
        <span className="nav-text">{title}</span>
      </span>
    }
    {...props}
  >
    {sub && sub.map(item => renderMenuItem(item))}
  </Menu.SubMenu>
);

export default ({ menus, ...props }) => (
  <Menu {...props}>
    {menus &&
      menus.map(
        item =>
          item.sub && item.sub.length
            ? renderSubMenu(item)
            : renderMenuItem(item)
      )}
  </Menu>
);
