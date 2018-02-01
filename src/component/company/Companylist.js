import React, { Component } from 'react';
import Create_mask from './Create_mask'
import Companyform from './Companyform'
import $ from "jquery"
import './Companylist.css'
class Companylist extends Component {
     constructor() {
       super();
        this.state = {
           companylist:[
               {"id":1,"name":"我的","manager_name":"张三","manager_phone":"18790542212"},
               {"id":2,"name":"立信广场","manager_name":"李四","manager_phone":"110"},
               {"id":3,"name":"哈哈","manager_name":"你猜","manager_phone":"119"}
           ]
        }
   }
    componentDidMount(){
        /* cost data=[
             uId:1
        ]
        RecordsAPI.getAll().then(
            response=>this.setState({
                console.log(response)
                records:response.data,
            })
        ).catch(
            error => this.setState({
                error
            })
        )*/
        $.getJSON("http:10.100.1.127:8080/company/select").then(
            response =>this.setState({companylist:response}),
            error =>console.log(error.responseText)
        )
    }

    render() {
        return (
            <div>
                <h4>公司列表</h4>
                <Create_mask />
                <table className="table table-bordered tables">
                    <thead>
                    <tr>
                        <th>公司名称</th>
                        <th>创建人</th>
                        <th>联系电话</th>
                        <th>状态</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.companylist.map((companyform) =><Companyform key={companyform.id}  {...companyform}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Companylist;
