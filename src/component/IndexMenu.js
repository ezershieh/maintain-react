import React, {Component} from 'react';
import Content from './Content'

class IndexMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            collapsed: false
        }
    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    handleOnClick(event) {
        if(event.target.name=="projectList"){
            this.setState({
                index:0
            });
        }else{
            this.setState({
                index:1
            });
        }
    }

//     return (
// <div style={{ width: 256 }}>
// <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
// <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
// </Button>
// <Menu
// defaultSelectedKeys={['1']}
// defaultOpenKeys={['sub1']}
// mode="inline"
// theme="dark"
// inlineCollapsed={this.state.collapsed}
// >
// <Menu.Item key="1">
// <Icon type="pie-chart" />
// <span>Option 1</span>
// </Menu.Item>
// <Menu.Item key="2">
// <Icon type="desktop" />
// <span>Option 2</span>
// </Menu.Item>
// <Menu.Item key="3">
// <Icon type="inbox" />
// <span>Option 3</span>
// </Menu.Item>
// </Menu>
// </div>
// );
// }
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
                <Content index={this.state.index}/>
            </div>
        )
    }

}

export default IndexMenu;