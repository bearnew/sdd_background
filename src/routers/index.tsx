import * as React from 'react';
import { Layout } from "antd";
import AsideMenu from "pages/Home/AsideMenu/";
import MainLayout from "pages/Home/MainLayout/";
import HeaderManagement from "pages/Community/HeadManagement/";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Home from 'pages/Home/index';
import Login from 'pages/Login/index';

const { Sider } = Layout;

interface HomeState {
    collapsed: boolean;
    count: number;
}

export default class Index extends React.Component<any, any> {
    state: HomeState = {
        collapsed: false,
        count: 0
    };
    onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Layout tagName="main">
                        <Sider
                            collapsible
                            collapsed={this.state.collapsed}
                            onCollapse={this.onCollapse}
                        >
                            <div className="logo" />
                            <AsideMenu />
                        </Sider>
                        <Switch>
                            <Route path="/" exact component={MainLayout} />
                            <Route path="/headManagement" component={HeaderManagement} />
                            <Route path="/login" component={Login} />
                        </Switch>
                    </Layout>
                </Router>
            </React.Fragment >
        );

    }
}
