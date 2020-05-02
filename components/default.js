import React, { Component } from 'react';
import ReactDom from "react-dom";

class Defualt extends Component {

    constructor(props) {
        super(props);

        this.state = {
            default: [{
                a: '123',
                b: '456'
            }],
            data: []
        };

        this.path = this.path.bind(this); //傳遞子物件
        this.Listfile = this.Listfile.bind(this); //傳遞子物件
    }

    渲染前執行
    componentWillMount() {
    }


    render() {
        return (
            <div>
                <h1>Azure blob</h1>
                Upload File <input class="btn btn-primary" id='abc' type="file" />
            </div>
        );
    }
}

export default Defualt;
