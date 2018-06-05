import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Avatar, Icon} from 'zent';
import './Header.scss';
const {MenuItem, SubMenu} = Menu;
const onClick = (e, key) => {
    console.log(e, key);
}

export default class Header extends Component {
    render() {
        return (
            <div className='app-sidebar'>
                <div className='app-avatar'>
                    <Avatar size="large" icon="customer"/>
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKey=""
                    defaultExpandKeys={[]}
                    onClick={onClick}>
                    <MenuItem key="1-1">
                        食品分类
                    </MenuItem>
                    <MenuItem key="1-2">
                        服装分类
                    </MenuItem>
                    <SubMenu title={"电器分类"} key="1-3">
                        <MenuItem key="1-3-1">电视机</MenuItem>
                        <MenuItem key="1-3-2">笔记本</MenuItem>
                        <MenuItem key="1-3-3">洗衣机</MenuItem>
                    </SubMenu>
                    <SubMenu title={"美妆分类"} key="1-4">
                        <MenuItem key="1-4-1">眼影</MenuItem>
                        <MenuItem key="1-4-2">洗面奶</MenuItem>
                        <SubMenu key="1-4-3" title={"食品分类"}>
                            <MenuItem key="1-4-3-1">电视机</MenuItem>
                            <MenuItem key="1-4-3-2">笔记本</MenuItem>
                            <MenuItem key="1-4-3-3">洗衣机</MenuItem>
                        </SubMenu>
                    </SubMenu>
                </Menu>

                <div className="app-user-info"></div>
            </div>
        )
    }
}