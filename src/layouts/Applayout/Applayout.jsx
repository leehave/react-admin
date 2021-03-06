import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Icon, Badge, Popover, Menu,Layout } from 'zent';
import Footer from '@/components/Footer/Footer'
import layoutStyle from './Applayout.scss';
import Routes from '@/router';
const {MenuItem} = Menu;

export default class Applayout extends Component {
    state = {
        collapsed: false
    };
    componentWillUnmount() {
        this
            .triggerResizeEvent
            .cancel();
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.onCollapse(nextProps.collapsed);
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        console.log(this.props.mode);
        this.setState({
            collapsed
     });
    };
    popoverHide = () => {
        this.setState({
            visible: false,
        });
    };
    /* eslint-disable*/
    // @Debounce(600);
    triggerResizeEvent() {
        const event = document.createEvent('HTMLEvents');
        event.initEvent('resize', true, false);
        window.dispatchEvent(event);
    }
    render() {
        const sidebarWidth = {
            sidebar:{
                marginLeft: (this.state.collapsed) ? '100px' : '200px',
            }
        }
        return (
            <div className='layout' style={sidebarWidth.sidebar} >
                <div className='layoutheader' style={{width: `calc(100% - ${this.state.collapsed ? '100px' : '200px'})`}}>
                    <div className='headercontent'>
                        <div className='js_control' onClick={this.props.toggle}>
                            <span className={this.props.collapsed ? 'ion-android-menu': 'ion-android-close'}></span>
                        </div>
                        <div className='rightheader'>
                            <Badge>
                                <Icon type="help-circle-o" className='bellcont' />
                            </Badge>

                            <Badge count={5} offset={[15, 10]}>
                                <Icon type="bell-o" className='bellcont' />
                            </Badge>

                            <Popover position={Popover.Position.AutoBottomLeft} display="inline-block">
                                <Popover.Trigger.Hover>
                                    <div className='avatarcontent'>
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
                <Routes />
                <Footer />
            </div>
        )
    }
}
