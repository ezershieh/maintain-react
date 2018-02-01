import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as RecordsAPI from '../../utils/RecordsAPI'
class Companylist extends Component {
    constructor(props) {
        super(props);
    }

   /* handleToggle(){
        this.setState({
            edit: !this.state.edit
        });
    }*/
/*   删除操作*/
    handleDelete(event){
        event.preventDefault();
        RecordsAPI.remove(this.props.companyform.id).then(
            response => this.props.handleDeleteRecord(this.props.companyform)
        ).catch(
            error => console.log(error.message)
        )
    }
   render() {
        return (
            <tr>
                    <td>{this.props.companyform.name}</td>
                    <td>{this.props.companyform.managerName}</td>
                    <td>{this.props.companyform.managerPhone}</td>
                    <td>
                        <button className="btn btn-info mr-1" >编辑</button>
                        <button className="btn btn-danger mr-1" onClick={this.handleDelete.bind(this)}>删除</button>
                        <button className="btn btn-info">详情</button>
                    </td>
            </tr>
        );
    }

    /*companyDom() {
        return (
            <tr>
                <td><input type="text" className="form-control" defaultValue={this.props.name} ref="name" /></td>
                <td><input type="text" className="form-control" defaultValue={this.props.managerName} ref="managerName" /></td>
                <td><input type="text" className="form-control" defaultValue={this.props.managerPhone} ref="managerPhone" /></td>
                <td>
                    <button className="btn btn-info mr-1" onClick={this.handleEdit}>编辑</button>
                    <button className="btn btn-danger" onClick={this.handleToggle}>取消</button>
                </td>
            </tr>
        );
    }
    render() {
        if (this.state.edit) {
            return this.companyDorm();
        } else {
            return this.companyRorm();
        }
    }*/
}
export default  Companylist;