import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Avatar} from 'zent';
import SideMenu from './SideMenu';
import {menu} from './menu'
import header from './Header.scss';
const onClick = (e, key) => {
    console.log(e, key);
}

export default class Header extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
        firstHide: true,        // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
    };
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
        console.log(this.state);
        const { popoverHide } = this.props;     // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
        popoverHide && popoverHide();
    };
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
                <div>
                  <SideMenu
                    menus={menu}
                    mode={this.props.collapsed ? 'pop' : 'inline'}
                    defaultSelectedKey=""
                    defaultExpandKeys={[]}
                    onClick={this.menuClick}
                    ></SideMenu>
                </div>
                <div className={header.userinfo}></div>
            </div>
        )
    }
}
