import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Avatar, Icon} from 'zent';
import header from './Header.scss';
const {MenuItem, SubMenu} = Menu;
const onClick = (e, key) => {
    console.log(e, key);
}

export default class Header extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        firstHide: true,        // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
    };
    onClick = (e, key) => {
  console.log(e, key);
}
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.onCollapse(nextProps.collapsed);
    };
    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
            firstHide: collapsed,
            mode: collapsed ? 'pop' : 'inline',
        });
    };
    render() {
        const sidebarWidth = {
            sidebar:{
                width: (this.state.collapsed) ? '100px' : '200px',
                flexBasis: (this.state.collapsed) ? '100px' : '200px'
            }
        }
        return (
            <div className='sidebar' style={sidebarWidth.sidebar}>
                <div className='avatar'>
                    <Avatar size="large" icon="customer"/>
                </div>
                <Menu
                    mode={this.props.collapsed ? 'pop' : 'inline'}
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

                <div className={header.userinfo}></div>
            </div>
        )
    }
}
