import React, {Component} from 'react';
import Content from './Content'

class IndexMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    handleOnClick(event) {
        if(event.target.name ==="projectList"){
            this.setState({
                index:0
            });
        }else{
            this.setState({
                index:1
            });
        }
    }

    handleOnMenuChange(index){
        this.setState({
            index:index
        });
    }

    render() {
        return (
            <div>
                <div className="pt-4 pb-4 pl-4 pr-4 bg-info">
                    <button className="btn btn-default mr-1" name="projectList"
                            onClick={this.handleOnClick.bind(this)}>项目列表
                    </button>
                    <button className="btn btn-default " name="companyList"
                            onClick={this.handleOnClick.bind(this)}>甲方公司列表
                    </button>
                </div>
                <Content handleOnMenuChange = {this.handleOnMenuChange.bind(this)} index={this.state.index}/>
            </div>
        )
    }

}

export default IndexMenu;