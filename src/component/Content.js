import React, {Component} from 'react';
import Projects from './project/Projects';
import ProjectDetail from './project/ProjectDetail';
import Companylist from './company/Companylist';

class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            project: {}
        }
    }

    handleAlertHidden(){
        this.props.handleAlertHidden();
    }

    handleDelete(data){
        console.log("content-handleDelete");
        this.refs.projects.handleDelete(data);
    }

    handleAlertShow(alertContent){
        this.props.handleAlertShow(alertContent);
    }

    handleProjectDetailOnClick(project) {
        this.props.handleOnMenuChange(2);
        this.setState({
            project:project
        });
    }

    handleProjectListOnClick(){
        this.props.handleOnMenuChange(0);
    }

    render() {
        switch (this.props.index) {
            case 0:
                return (<Projects handleProjectDetailOnClick={this.handleProjectDetailOnClick.bind(this)}
                                  handleAlertShow = {this.handleAlertShow.bind(this)}
                                  handleAlertHidden={this.handleAlertHidden.bind(this)}
                                  contentIndex={this.state.contentIndex} ref="projects"/>);
            case 1:
                return ( <Companylist contentIndex={this.state.contentIndex}/>);
            case 2:
                return (<ProjectDetail handleProjectListOnClick={this.handleProjectListOnClick.bind(this)}
                                       project={this.state.project}/>);
            case 3:
                return (<div></div>);
            case 4:
                return (<div></div>);
            case 5:
                return (<div></div>);
            default:
                return (<div></div>);
        }
    }

}

export default Content;