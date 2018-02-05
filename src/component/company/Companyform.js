import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as RecordsAPI from '../../utils/RecordsAPI'
import 'antd/dist/antd.css';
import { Modal, Button } from 'antd';

class Companylist extends Component {
    constructor(props) {
        super(props);
    }

    handleToggle(){

    }
    /*   删除操作*/
    handleDelete(event){
        event.preventDefault();
        RecordsAPI.remove(this.props.companyform.id).then(
            response => this.props.handleDeleteRecord(this.props.companyform)
        ).catch(
            error => console.log(error.message)
        )
    }

    handleInformationOnClick(){
        this.props.handleInformationOnClick(this.props.companyform);
    }

    handleOk = (e) => {
        alert(6666)
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    confirm() {
        Modal.confirm({
            title: 'Confirm',
            content: 'Bla bla ...',
            okText: '确定',
            cancelText: '取消',
        });
    }
    render() {
        return (
            <tr>
                <td>{this.props.companyform.name}</td>
                <td>{this.props.companyform.managerName}</td>
                <td>{this.props.companyform.managerPhone}</td>
                <td>
                    <button className="btn btn-info mr-1" onClick={this.handleToggle.bind(this)}>编辑</button>
                    {/*<button className="btn btn-danger mr-1" onClick={this.handleDelete.bind(this)}>删除</button>*/}
                    <Button className="btn btn-danger mr-1" onClick={this.confirm.bind(this)}>删除</Button>
                    <button className="btn btn-info" onClick={this.handleInformationOnClick.bind(this)}>详情</button>
                </td>
            </tr>
        );
    }

    /* companyDom() {
         return (
             <tr>
                 <td><input type="text" className="form-control" defaultValue={this.props.companyform.name} ref="name" /></td>
                 <td><input type="text" className="form-control" defaultValue={this.props.companyform.managerName} ref="managerName" /></td>
                 <td><input type="text" className="form-control" defaultValue={this.props.companyform.managerPhone} ref="managerPhone" /></td>
                 <td>
                     <button className="btn btn-info mr-1" onClick={this.handleUpdate.bind(this)}>编辑</button>
                     <button className="btn btn-danger" onClick={this.handleToggle}>取消</button>
                     <button className="btn btn-info" onCliak={this.handleLink.bind(this)}>详情</button>
                 </td>
             </tr>
         );
     }*/
    /* render() {
         if (this.state.edit) {
             return this.companyDom();
         } else {
             return this.companyRom();
         }
     }*/
}
export default  Companylist;