import * as React from "react";
import { Layout, Breadcrumb } from "antd";
import SvgIcon from "components/common/SvgIcon/index";
import './style.pcss';

const { Header, Content, Footer } = Layout;

interface overviewModel {
    icon: string;
    iconColor: string;
    text: string;
    count: number;
    unit: string;
}

interface overviewListState {
    overviewList: overviewModel[]
}

export default class AsideMenu extends React.Component<any, overviewListState> {
    state = {
        overviewList: [
            {
                icon: 'icon27',
                iconColor: '#27A9E3',
                text: '用户数量',
                count: 0,
                unit: '人'
            },
            {
                icon: 'iconfenzucopy',
                iconColor: '#28B779',
                text: '团长数量',
                count: 0,
                unit: '人'
            },
            {
                icon: 'iconicon-',
                iconColor: '#FFB748',
                text: '订单数量',
                count: 0,
                unit: '笔'
            },
            {
                icon: 'iconyingyee',
                iconColor: '#DA552A',
                text: '平台营业',
                count: 0,
                unit: '元'
            },
            {
                icon: 'icontuikuan',
                iconColor: '#2255A4',
                text: '平台退款',
                count: 0,
                unit: '元'
            },
            {
                icon: 'iconyongjin',
                iconColor: '#F4516C',
                text: '订单佣金',
                count: 0,
                unit: '元'
            }
        ]
    }
    render() {
        const { overviewList } = this.state;
        return (
            <Layout tagName="main">
                <Header tagName="header">概览</Header>
                <Content tagName="section" style={{ margin: "0 16px" }}>
                    <div className="overview">
                        {
                            overviewList.map((overview, index) => (
                                <div className="overview-item" key={index}>
                                    <SvgIcon type={overview.icon} color={overview.iconColor} size={60} />
                                    <div className="right">
                                        <div className="text">{overview.text}</div>
                                        <div className="amount">{overview.count} {overview.unit}</div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Content>
                <Footer tagName="footer" style={{ textAlign: "center" }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}
