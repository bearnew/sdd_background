import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { testA } from '../../utils/format';
import Picker from '../../components/picker/index';

export default class Home extends Component {
    componentDidMount() {
        testA();
    }
    render() {
        return (
            <div>
                <h1>home</h1>
                <Link to="/login">sign in</Link>
                <div className="picker-wrapper">
                    <Picker
                        list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    />
                    <div className="border"></div>
                </div>
            </div>
        )
    }
}
