import React, {Component} from 'react';
import Project from './Project';
import * as RecordsAPI from '../../utils/RecordsAPI'

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        const data = {
            uId: 1
        }
        RecordsAPI.getProjects(data).then(
            response => {
                console.log(response);
                // if (response.code == 1)
                this.setState({projects: response.data});

            },
            error => console.log(error));
    }

    handleProjectClick(event) {

    }

    render() {
        return (
            <div className="ml-4 mr-4 mt-4 mb-4">
                <div>
                    <h3><b>我的项目</b></h3>
                </div>
                <div className="mr-4 mt-4 pr-4 pull-right">
                    <button className="btn pull-right btn-success  mr-4 ">甲方公司列表</button>
                    <button className="btn pull-right btn-success mr-4">创建项目</button>
                </div>
                <table className="table mr-4 mt-4 pr-4">
                    <thead>
                    <tr className="bg-primary table-condensed ">
                        <th><h5>项目名称</h5></th>
                        <th><h5>项目状态</h5></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.projects.map(project => <Project onClick={this.handleProjectClick.bind(this)}
                                                                 key={project.id} project={project}/>)}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Projects;
