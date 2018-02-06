import React, {Component} from 'react';
import Projects from './project/Projects';
import ProjectDetail from './project/ProjectDetail';
import ProjectCreate from './project/ProjectCreate';
import Companylist from './company/Companylist';
import Information from './company/Information';
class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            project: {},
            company: {}
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
    handleInformationOnClick(company) {
        this.props.handleOnMenuChange(5);
        this.setState({
            company:company
        });
    }

    handleProjectListOnClick(){
        this.props.handleOnMenuChange(0);
    }

    handleCreateProject(){
        console.log("内容相应");
        this.props.handleOnMenuChange(3);
    }

    handleCompanyformOnClick(){
        this.props.handleCompanyformOnClick(1);
    }

    handleCreateProject(){
        this.props.handleOnMenuChange(0);
    }

    handleCreateProjectClick(){
        this.props.handleOnMenuChange(3);
    }

    handleProjectEditClick(project){
        console.log("内容项目编辑");
        this.props.handleOnMenuChange(4);
        this.setState({
            ...this.state,
            project:project
        });
    }

    render() {
        switch (this.props.index) {
            case 0:
                return (<Projects handleProjectDetailOnClick={this.handleProjectDetailOnClick.bind(this)}
                                  handleCreateProjectClick = {this.handleCreateProjectClick.bind(this)}
                                  handleProjectEditClick = {this.handleProjectEditClick.bind(this)}
                                  handleAlertShow = {this.handleAlertShow.bind(this)}
                                  handleAlertHidden={this.handleAlertHidden.bind(this)}
                                  contentIndex={this.state.contentIndex} ref="projects"/>);
            case 1:
                return ( <Companylist contentIndex={this.state.contentIndex}
                                      handleInformationOnClick={this.handleInformationOnClick.bind(this)}
                />);
            case 2:
                return (<ProjectDetail handleCreateProject={this.handleCreateProject.bind(this)}
                                       project={this.state.project}/>);
            case 3:
                return (<ProjectCreate isCreate = {true} handleCreateProject={this.handleCreateProject.bind(this)}></ProjectCreate>);
            case 4:
                return (<ProjectCreate isCreate = {false} project={this.state.project} handleCreateProject={this.handleCreateProject.bind(this)}></ProjectCreate>);
            case 5:
                return (<Information handleCompanyformOnClick={this.handleCompanyformOnClick.bind(this)}
                                        company={this.state.company}/>);
            default:
                return (<div></div>);
        }
    }

}

export default Content;