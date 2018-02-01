import React, {Component} from 'react';
import Projects from './project/Projects';
import Companylist from './company/Companylist';


class Content extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentIndex:0
        }
    }

    render() {
        switch (this.props.index){
            case 0:
                return(
                    <Projects contentIndex={this.state.contentIndex}/>
                );
            case 1:
                return(
                <Companylist contentIndex={this.state.contentIndex}/>
                );
            default:
                switch (this.state.contentIndex){
                    case 2:
                        return(<div></div>);
                    case 3:
                        return(<div></div>);
                    case 4:
                        return(<div></div>);
                    case 5:
                        return(<div></div>);
                    default:
                        return(<div></div>);
                }
        }
    }

}

export default Content;