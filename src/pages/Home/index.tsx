import * as React from "react";
import { Link } from "react-router-dom";
import { Layout, Breadcrumb, Menu, Icon, Switch } from "antd";
import SvgIcon from "components/common/SvgIcon/index";
import "./style";

const SubMenu = Menu.SubMenu;
const { Header, Content, Footer, Sider } = Layout;

interface HomeState {
    theme: any;
    current: string;
    collapsed: boolean;
}

export default class Home extends React.Component<any, any> {
    state: HomeState = {
        theme: "dark",
        current: "0",
        collapsed: false
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
    onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (
            <React.Fragment>
                <Layout style={{ minHeight: "100vh" }}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo" />
                        <Menu
                            theme={this.state.theme}
                            onClick={this.handleClick}
                            style={{ width: 256 }}
                            defaultOpenKeys={["sub1"]}
                            selectedKeys={[this.state.current]}
                            mode="inline"
                        >
                            <Menu.Item key="0">概览</Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={
                                    <span>
                                        <Icon type="mail" />
                                        <span>Navigation One</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="1">Option 1</Menu.Item>
                                <Menu.Item key="2">Option 2</Menu.Item>
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={
                                    <span>
                                        <Icon type="appstore" />
                                        <span>Navigtion Two</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu
                                key="sub4"
                                title={
                                    <span>
                                        <Icon type="setting" />
                                        <span>Navigation Three</span>
                                    </span>
                                }
                            >
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                            <Menu.Item>
                                <Switch
                                    checked={this.state.theme === "dark"}
                                    onChange={this.changeTheme}
                                    checkedChildren="Dark"
                                    unCheckedChildren="Light"
                                />
                            </Menu.Item>
                        </Menu>
                        <div>
                            <SvgIcon type="tuikuan" color="red" size={40} />
                        </div>
                    </Sider>
                    <Layout>
                        <Header style={{ background: "#fff", padding: 0 }} />
                        <Content style={{ margin: "0 16px" }}>
                            <Breadcrumb style={{ margin: "16px 0" }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div
                                style={{
                                    padding: 24,
                                    background: "#fff",
                                    minHeight: 360
                                }}
                            >
                                Bill is a cat.
                            </div>
                        </Content>
                        <Footer style={{ textAlign: "center" }}>
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </Layout>
                </Layout>
            </React.Fragment>
        );
    }
}
