import * as React from "react";
import {
    Layout,
    Table,
    Form,
    Input,
    Select,
    Button
} from "antd";
import headStore from 'store/community/head.store';
import "./style.pcss";

const Option = Select.Option;

const {
    cityData,
    communityData,
    columns,
    data,
    onChange
} = headStore;

interface HomeState {
    collapsed: boolean;
    count: number;
    selectedCommunity: string;
    communitys: string[];
}

export default class extends React.Component<any, any> {
    // static getDerivedStateFromProps(nextProps) {
    //     // Should be a controlled component.
    //     if ('value' in nextProps) {
    //         return {
    //             ...(nextProps.value || {}),
    //         };
    //     }
    //     return null;
    // }
    state: HomeState = {
        collapsed: false,
        count: 0,
        selectedCommunity: communityData['上海市'][0],
        communitys: communityData['上海市']
    };
    onCollapse = (collapsed: boolean) => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    handleCityChange = () => {

    }
    handleCommunityChange = () => {

    }
    handleSubmit = () => {

    }
    render() {

        return (
            <React.Fragment>
                <div>
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                        <Form.Item label="选择区域">
                            <Select
                                defaultValue={cityData[0]}
                                style={{ width: 120 }}
                                onChange={this.handleCityChange}
                            >
                                {cityData.map(city => <Option key={city}>{city}</Option>)}
                            </Select>
                            <Select
                                style={{ width: 120 }}
                                value={this.state.selectedCommunity}
                                onChange={this.handleCommunityChange}
                            >
                                {this.state.communitys.map(community => <Option key={community}>{community}</Option>)}
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div>
                    <Table columns={columns} dataSource={data} onChange={onChange} />
                </div>
            </React.Fragment>
        );
    }
}
