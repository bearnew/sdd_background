import * as React from "react";
import { Layout, Breadcrumb } from "antd";
import SvgIcon from "components/common/SvgIcon/index";

const { Header, Content, Footer } = Layout;

export default class AsideMenu extends React.Component<any, any> {
    render() {
        return (
            <Layout tagName="main">
                <Header
                    tagName="header"
                    style={{ background: "#fff", padding: 0 }}
                />
                <Content tagName="section" style={{ margin: "0 16px" }}>
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
                        <div>
                            <SvgIcon type="tuikuan" color="red" size={40} />
                        </div>
                    </div>
                </Content>
                <Footer tagName="footer" style={{ textAlign: "center" }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}
