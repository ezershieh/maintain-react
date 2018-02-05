import React, {Component} from 'react';

export default class ProjectCreate extends Component {

    constructor(props) {
        super(props);
        if (props.isCreate === true) {
            this.state = {
                project: {}
            }
        } else {
            this.state = {
                project: props.project
            }
        }
    }

    handleProjectListOnClick() {

    }

    onCheckChange() {

    }

    render() {
        let tittle;
        if (this.props.isCreate === true) {
            tittle = "创建项目";
        } else {
            tittle = "编辑项目";
        }
        return (
            <div>
                <div className="bg-info pl-4 pr-4 pb-1">

                    <span onClick={this.handleProjectListOnClick.bind(this)}><h6><b>我的项目 > </b></h6></span>
                    <span> </span>
                    <span><h6>{tittle}</h6></span>

                </div>
                <div className="pl-4 pr-4 pt-4 pb-4">
                    <form className="bs-example bs-example-form " role="form">
                        <div className="input-group center-block">
                            <span className="input-group-addon center-block">项目名称</span>
                            <input type="text" className="form-control" placeholder="输入项目名称"/>
                        </div>
                        <div className="input-group  mt-2">
                            <span className="input-group-addon center-block">项目负责人</span>
                            <input type="text" className="form-control" placeholder="输入项目负责人"/>
                        </div>
                        <div className="input-group  mt-2">
                            <span className="input-group-addon">投标状态</span>
                            <input type="radio" name="bidState" className="form-control" 
                                   value="0" onChange={this.onCheckChange.bind(this)}/>未中标
                            <input type="radio" name="bidState" className="form-control" value="1"
                                   onChange={this.onCheckChange.bind(this)}/>已中标
                        </div>
                        <div className="input-group mt-2">
                            <span className="input-group-addon">项目状态</span>
                            <input type="radio" name="projectState" className="form-control"
                                   onChange={this.onCheckChange.bind(this)}
                                   value="0"/>未开工
                            <input type="radio" name="projectState" className="form-control" value="1"
                                   onChange={this.onCheckChange.bind(this)}/>已开工
                            <input type="radio" name="projectState" className="form-control" value="2"
                                   onChange={this.onCheckChange.bind(this)}/>已完工
                            <input type="radio" name="projectState" className="form-control" value="3"
                                   onChange={this.onCheckChange.bind(this)}/>已停工
                        </div>
                        <div className="input-group mt-2">
                            <span className="input-group-addon">项目原定计划日期</span>
                            <input type="text" className="form-control" placeholder="输入项目原定计划日期"/>
                        </div>
                        <div className="input-group mt-2">
                            <span className="input-group-addon">业主单位</span>
                            <input type="text" className="form-control" placeholder="输入业主单位"/>
                        </div>
                        <div className="input-group mt-2">
                            <span className="input-group-addon">建设单位</span>
                            <input type="text" className="form-control" placeholder="输入建设单位"/>
                        </div>
                        <div className="input-group mt-2">
                            <span className="input-group-addon">项目备注</span>
                            <input type="text" className="form-control" placeholder="输入项目备注"/>
                        </div>
                        <div className="input-group mt-2">
                            <span className="input-group-addon">项目说明</span>
                            <input type="text" className="form-control" placeholder="输入项目说明"/>
                        </div>
                        <div className="input-group mt-2">
                            <span className="input-group-addon">审核人</span>
                            <input type="text" className="form-control" placeholder="输入审核人"/>
                        </div>
                        <div className="input-group mt-2">
                            <span className="input-group-addon">审核日期</span>
                            <input type="text" className="form-control" placeholder="输入审核日期"/>
                        </div>
                        <div className="input-group mt-2">
                            <span className="input-group-addon">创建人</span>
                            <input type="text" className="form-control" placeholder="输入创建人"/>
                        </div>
                        <div className="input-group mt-2">
                            <span className="input-group-addon">创建日期</span>
                            <input type="text" className="form-control" placeholder="输入创建日期"/>
                        </div>
                    </form>
                </div>
            </div>);
    }
}