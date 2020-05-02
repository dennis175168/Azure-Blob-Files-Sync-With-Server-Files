import React from "react";
import ReactDom from "react-dom";
import File from './file';
import Header from './header';
import { Button } from 'react-bootstrap';

class App extends React.Component{
    render(){
        return (
            <div  className="app">
            <Header/>
                <div style={{ padding: '30px' }}>
                    <File /> 
                </div>
            
            </div>
        );
    }
}

if(module.hot){
    module.hot.accept();
}

ReactDom.render(
    <App />,
    document.getElementById('content')
);