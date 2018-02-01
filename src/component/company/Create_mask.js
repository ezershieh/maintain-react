import React, { Component } from 'react';
export default class Create_mask extends Component {
    render() {
        return(
        <div>
            <button className=" btn btn-default btn-primary col-sm-12 top25 text-center test create" data-toggle="modal" data-target="#myModal" >创建公司</button>
            <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">创建公司</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        </div>
                        <div className="modal-body">
                            <form action="" className="bs-example bs-example-form">
                                <label >
                                    <span>项目名称</span>
                                    <input type="text" className="form-control" id="pname" placeholder="项目名称"/>
                                </label><br/>
                                <label >
                                    <span>项目状态</span>
                                    <input type="text" className="form-control" id="pstates" placeholder="项目状态"/>
                                </label><br/>
                                <label >
                                    <span>归属公司</span>
                                    <input type="text" className="form-control" id="comname" placeholder="归属公司"/>
                                </label><br/>
                                <label >
                                    <span>地址</span>
                                    <input type="text" className="form-control" id="addres" placeholder="地址"/>
                                </label><br/>
                                <label >
                                    <span>归属部门</span>
                                    <input type="text" className="form-control" id="department" placeholder="归属部门"/>
                                </label><br/>
                                <label >
                                    <span>备注</span>
                                    <input type="text" className="form-control" id="discribe" placeholder="备注"/>
                                </label><br/>
                                <label >
                                    <span>计划开始时间</span>
                                    <input type="text" className="form-control" id="begindate" placeholder="计划开始时间"/>
                                </label><br/>
                                <label >
                                    <span>计划结束时间</span>
                                    <input type="text" className="form-control" id="endate" placeholder="计划结束时间"/>
                                </label><br/>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default qu" data-dismiss="modal">取消</button>
                            <button type="button" className="btn btn-primary" onClick={this.confirm}>确认</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}