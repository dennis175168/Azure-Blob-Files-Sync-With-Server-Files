import React, { Component } from 'react';
import ReactDom from "react-dom";

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        // this.path = this.path.bind(this); //傳遞子物件
        // this.Listfile = this.Listfile.bind(this); //傳遞子物件
    }

    渲染前執行
    componentWillMount() {
    }


    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    {/* <!-- Brand --> */}
                        <a class="navbar-brand" href="#">Dennis DEMO</a>

                    {/* <!-- Links --> */}
                        <ul class="navbar-nav">
                        {/* <li class="nav-item">
                            <a class="nav-link" href="#">Link 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link 2</a>
                        </li> */}

                        {/* <!-- Dropdown --> */}
                        {/* <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Dropdown link
                            </a>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Link 1</a>
                            <a class="dropdown-item" href="#">Link 2</a>
                            <a class="dropdown-item" href="#">Link 3</a>
                        </div>
                        </li> */}
                </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
