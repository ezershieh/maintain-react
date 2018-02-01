import React, { Component } from 'react';
class Companylist extends Component {
   /* constructor(props) {
        super(props);
       /!* this.state = {
            date: "",
            title: "",
            amount: ""
        }*!/
    }*/
    render() {
        return (
            <tr>
                  <td>{this.props.name}</td>
                <td>{this.props.manager_name}</td>
                <td>{this.props.manager_phone}</td>
                <td>
                    <button className="btn btn-info mr-1" >编辑</button>
                    <button className="btn btn-danger" >删除</button>
                </td>
            </tr>
        );
    }
}
export default  Companylist;