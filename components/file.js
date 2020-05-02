import React, { Component } from 'react';
import ReactDom from "react-dom";

class File extends Component {

    constructor(props) {
        super(props);

        this.state = {
            default: [{
                a: '123',
                b: '456'
            }],
            data : []
        };

        // this.path = this.path.bind(this); //傳遞子物件
        this.Listfile = this.Listfile.bind(this); //傳遞子物件
        // this.Updatefile = this.Updatefile.bind(this); //傳遞子物件
        this.previewFile = this.previewFile.bind(this); //傳遞子物件
    }

    渲染前執行
    componentWillMount() {
        // this.Listfile()
    }

    Listfile(){
        var Api_url = "http://localhost:3000/listfile" ;
        fetch(Api_url, {
            method: 'get',
        }).then((res) => {
            console.log("res.json");
            // console.log(res);
            return res.json();
        }).then((res) => {
            this.setState({ data: res.entries});
            console.log(res.entries);
            
        });
    }

    previewFile() {
        console.log("ppp")
        const preview = document.querySelector('img');
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();
        console.log(file)
        reader.addEventListener("load", function () {
            // convert image file to base64 string
            preview.src = reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    render() {
        var files = this.state.data
        return (
            <div>
                <h1>Azure blob</h1>
                <form ref='uploadForm'
                    id='uploadForm'
                    action='http://localhost:3000/upload'
                    method='post'
                    encType="multipart/form-data"
                    onChange={() => this.previewFile()}>
                    <input type="file" id="filedemo" style={{ margin: '5px' }} class="btn btn-primary" name="sampleFile" />
                    <input type='submit' style={{ margin: '5px' }} class="btn btn-success"  value='Upload' />
                    
                </form> 
                <img src="/img/multimedia.png" style={{ margin: '5px' }}  height="200" alt="Image preview..." /><br />

                <div>
                    <button style={{ margin: '5px' }}  class="btn btn-success" onClick={() => this.Listfile()}>Refresh List</button>
                    {this.state.data.length} rows
                </div>
                <div>
                    <table class="table table-striped">
                        <thead>
                            <tr >
                                <th >Name</th>
                                <th >Create Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(function (object, i) {
                                return(
                                    <tr key={i} >
                                        <td >{object.name}</td>
                                        <td >{(object.creationTime)}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    
                    {/* {(JSON.stringify(files))} */}
                </div>
            </div>
        );
    }
}

export default File;
