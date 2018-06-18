import React from "react";
import ReactDom from "react-dom";

class App extends React.Component{
    render(){
        return (
            <div className="app">app</div>
        );
    }
}

// if(module.hot){
//     module.hot.accept();
// }

ReactDom.render(
    <App />,
    document.getElementById('content')
);