import React, { Component } from 'react';
import Create_mask from './Create_mask'
import Companyform from './Companyform'
import './Companylist.css'
import * as RecordsAPI from '../../utils/RecordsAPI'
class Companylist extends Component {
     constructor(props) {
       super(props);
         this.state={
             companylist:[]
         }
   }
    componentDidMount(){
        const data = {
            uId: 1
        }
        RecordsAPI.getProjectsCompany(data).then(
            response => {
                console.log(response);

                // if (response.code == 1)
                this.setState({companylist: response.data});
            },
            error => console.log(error)
        );
    }

    deleteform(){
       /* this.setState({
            const companyformIndex = this.state.companylist.indexOf(companylist);
            const newCompanylist = this.state.companylist.filter( (item, index) => index !== companyformIndex);
            this.setState({
                companylist: newCompanylist
            });
            console.log(companyform)
        });*/
    }
    render() {
        return (
            <div>
                <h4>公司列表</h4>
                <Create_mask />
                <table className="table table-bordered tables">
                    <thead>
                    <tr className="tabs">
                        <th>公司名称</th>
                        <th>负责人</th>
                        <th>联系电话</th>
                        <th>状态</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.companylist.map((companyform) => (
                            <Companyform
                                key={companyform.id}
                                companyform={companyform}
                                handleDelete={this.deleteform.bind(this)}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Companylist;
