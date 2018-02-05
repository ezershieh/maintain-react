import React, {Component} from 'react';
import Content from './Content';
import * as RecordsAPI from '../utils/RecordsAPI';
import { Modal, Button } from 'antd';
const confirm = Modal.confirm;


class IndexMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            alertContent: {},
            alertShow: false
        }
    }

    handleOnClick(event) {
        if (event.target.name === "projectList") {
            this.setState({
                index: 0,
                alertContent: this.state.alertContent,
                alertShow: this.state.alertShow,
            });
        } else {
            this.setState({
                index: 1,
                alertContent: this.state.alertContent,
                alertShow: this.state.alertShow
            });
        }
    }

    handleAlertShow(alertContent) {
        this.setState({
            ...this.state,
            alertContent:alertContent,
            alertShow:true
        });
    }

    handleAlertHidden(){
        this.setState({
            ...this.state,
            alertShow:false
        });
    }

    handleOnMenuChange(index) {
        console.log("主页相应");
        this.setState({
            ...this.state,
            index: index
        });
    }

    handleOk = () => {
        switch (this.state.index) {
            case 0:
                let postDdatas = {
                    uId: RecordsAPI.uId,
                    pId: this.state.alertContent.data.id
                }
                RecordsAPI.delectProjects(postDdatas).then(
                    response => {
                        console.log(response);
                        this.refs.contentView.handleDelete(this.state.alertContent.data);
                    },
                    error => {
                        console.log(error);
                        this.setState({
                            ...this.state,
                            alertShow:false
                        });
                    });
                break;
            case 1:
                break;
        }
    }
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            ...this.state,
            alertShow:false
        });
    }

    handleCreateProject(){
        this.setState({
            ...this.state,
            index:3
        });
    }

    render() {
        const { visible, confirmLoading, ModalText } = this.state;
        return (
            <div>
                <div>
                    <div className="pt-4 pb-4 pl-4 pr-4 bg-info">
                        <button className="btn btn-default mr-1" name="projectList"
                                onClick={this.handleOnClick.bind(this)}>项目列表
                        </button>
                        <button className="btn btn-default " name="companyList"
                                onClick={this.handleOnClick.bind(this)}>甲方公司列表
                        </button>
                    </div>
                    <Content index={this.state.index} handleOnMenuChange={this.handleOnMenuChange.bind(this)}
                             handleAlertShow={this.handleAlertShow.bind(this)} ref="contentView"
                             handleAlertHidden={this.handleAlertHidden.bind(this)}/>
                </div>
                <Modal title={this.state.alertContent.tittle}
                       visible={this.state.alertShow}
                       onOk={this.handleOk}
                       onCancel={this.handleCancel}>
                    <p>{this.state.alertContent.content}</p>
                </Modal>
            </div>
        )
    }

}

export default IndexMenu;