import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Avatar, Icon, Badge, Popover, Menu} from 'zent';
import './Applayout.scss'
const {MenuItem} = Menu;

export default class Applayout extends Component {
    render() {
      /*** 兄弟组件传递数据 ***/
      const {collapse} = this.props;

        return (
            <div className="app-layout">
                <div className="layout-header">
                    <div className="header-content">
                        <div className="js_control">
                            <Icon type="settings-o"/>
                        </div>
                        <div className="right-header">
                            <Badge>
                                <Icon type="help-circle-o" className="bell-cont" onClick={this.Collapse} />
                            </Badge>

                            <Badge count={5} offset={[15, 10]}>
                                <Icon type="bell-o" className="bell-cont"/>
                            </Badge>

                            <Popover position={Popover.Position.AutoBottomLeft} display="inline-block">
                                <Popover.Trigger.Hover>
                                    <div className="avatar-content">
                                        <Avatar
                                            src="https://img.yzcdn.cn/public_files/2018/02/01/5df3bb4b640ddc5efae915b7af90a243.png"/>
                                    </div>
                                </Popover.Trigger.Hover>
                                <Popover.Content>
                                    <Menu>
                                        <MenuItem>个人中心</MenuItem>
                                        <MenuItem>用户管理</MenuItem>
                                    </Menu>
                                </Popover.Content>
                            </Popover>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}