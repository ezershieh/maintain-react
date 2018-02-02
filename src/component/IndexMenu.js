import React, {Component} from 'react';
import Content from './Content';
import * as RecordsAPI from '../utils/RecordsAPI';

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

    handleAlertConfirmClick(index,data) {
        switch (index) {
            case 0:
                let postDdatas = {
                    uId: RecordsAPI.uId,
                    pId: data.id
                }
                RecordsAPI.delectProjects(postDdatas).then(
                    response => {
                        console.log(response);
                        this.setState({
                            index: this.state.index,
                            alertShow: this.state.alertShow,
                            alertContent: this.state.alertContent
                        });
                    },
                    error => {
                        console.log(error);
                    });
                break;
            case 1:
                break;
        }
        this.setState({
            index: this.state.index,
            alertContent: {},
            alertShow: false
        });
    }

    handleAlertShow(alertContent) {
        this.setState({
            index: this.state.index,
            alertContent: alertContent,
            alertShow: true
        });
    }

    handleOnMenuChange(index){
        this.setState({
            index: index,
            alertContent: this.state.alertContent,
            alertShow: this.state.alertShow
        });
    }

    render() {
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
                    <Content index={this.state.index} handleOnMenuChange ={this.handleOnMenuChange.bind(this)}
                             handleAlertShow={this.handleAlertShow.bind(this)}/>
                </div>
                <div className="modal fade " id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                     aria-hidden="true" data-backdrop="false" data-show={this.state.alertShow}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×
                                </button>
                                <h4 className="modal-title" id="myModalLabel">
                                    {this.state.alertContent.tittle}
                                </h4>
                            </div>
                            <div className="modal-body">
                                {this.state.alertContent.content}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary"
                                        data-dismiss="modal">关闭
                                </button>
                                <button type="button" className="btn btn-danger"
                                        onClick={this.handleAlertConfirmClick.bind(this)}>
                                    确定
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default IndexMenu;