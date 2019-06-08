import * as React from "react";
import { Menu, Icon, Switch } from "antd";
import SvgIcon from "components/common/SvgIcon/index";
import menuStore from 'store/menu.store';
import {
    Link
} from 'react-router-dom';
import './style.pcss';

const SubMenu = Menu.SubMenu;

interface menuItemStore {
    icon?: string;
    text: string;
    subMenuList?: menuItemStore[];
}
interface MenuState {
    theme: any;
    current: string;
    menuList: menuItemStore[]
}

export default class AsideMenu extends React.Component<any, MenuState> {
    state: MenuState = {
        theme: "dark",
        current: "0",
        menuList: menuStore.menuList
    };
    changeTheme = (checked: Boolean) => {
        this.setState({
            theme: checked ? "dark" : "light"
        });
    };
    handleClick = (e: any) => {
        console.log("click ", e);
        this.setState({
            current: e.key
        });
    };
    render() {
        const { menuList } = this.state;
        console.log(menuList)
        return (
            <Menu
                theme={this.state.theme}
                onClick={this.handleClick}
                defaultOpenKeys={["sub1"]}
                selectedKeys={[this.state.current]}
                mode="inline"
            >
                <Menu.Item>
                    <Link to="/">概览</Link>
                </Menu.Item>
                {
                    menuList.map((item, index) => {
                        return (
                            <SubMenu
                                key={index}
                                title={
                                    <span>
                                        <SvgIcon type={item.icon} color="#F3F3F3" size={20} />
                                        <span className="menu-text">{item.text}</span>
                                    </span>
                                }
                            >
                                {
                                    item.subMenuList &&
                                    item.subMenuList.map(sub => <Menu.Item key={sub.text}><Link to="/headManagement">{sub.text}</Link></Menu.Item>)
                                }
                            </SubMenu>)
                    })
                }
            </Menu>
        );
    }
}
