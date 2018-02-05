import React, {Component} from 'react';
import {Form, Input, Button, DatePicker, Select, Radio} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';

class ProjectCreate extends Component {

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

    render() {
        let tittle;
        if (this.props.isCreate === true) {
            tittle = "创建项目";
        } else {
            tittle = "编辑项目";
        }
        const FormItem = Form.Item;
        const Option = Select.Option;
        const MonthPicker = DatePicker.MonthPicker;
        const RangePicker = DatePicker.RangePicker;
        const RadioGroup = Radio.Group;


        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 5},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 12},
            },
        };


        if (this.props.isCreat) {
            return (<Form className="pt-4">
                <FormItem
                    {...formItemLayout}
                    label="项目名称"
                >
                    <Input placeholder="输入项目名称" id="name" maxlength="20"/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="项目负责人"
                >
                    <Select placeholder="选择项目负责人">
                        <Option value="red">Red</Option>
                        <Option value="green">Green</Option>
                        <Option value="blue">Blue</Option>
                    </Select>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="投标状态"
                >
                    <RadioGroup className="form-control pl-2">
                        <Radio value="0">未中标</Radio>
                        <Radio value="1">已中标</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="项目状态"
                >
                    <RadioGroup className="form-control pl-2">
                        <Radio value="0">未开工</Radio>
                        <Radio value="1">已开工</Radio>
                        <Radio value="2">已完工</Radio>
                        <Radio value="3">已停工</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="项目原定计划日期"
                >
                    <RangePicker placeholder={["选择开始日期", "选择结束日期"]}/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="业主单位"
                >
                    <Select placeholder="选择业主单位">
                        <Option value="red">Red</Option>
                        <Option value="green">Green</Option>
                        <Option value="blue">Blue</Option>
                    </Select>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="建设单位"
                >
                    <Select placeholder="选择建设单位">
                        <Option value="red">Red</Option>
                        <Option value="green">Green</Option>
                        <Option value="blue">Blue</Option>
                    </Select>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="项目备注"
                >
                    <Input placeholder="输入项目备注(选填)" id="mark"/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="项目说明"
                >
                    <Input placeholder="输入项目说明(选填)" id="caption"/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="审核人"
                >
                    <Select placeholder="选择审核人(选填)">
                        <Option value="red">Red</Option>
                        <Option value="green">Green</Option>
                        <Option value="blue">Blue</Option>
                    </Select>
                </FormItem>
                <FormItem
                    wrapperCol={{
                        xs: {span: 24, offset: 0},
                        sm: {span: 16, offset: 8},
                    }}
                >
                    <Button type="primary" htmlType="submit">创建</Button>
                </FormItem>
            </Form>);
        } else {
            return (
                <Form className="pt-4">
                    <FormItem
                        {...formItemLayout}
                        label="项目名称"
                    >
                        <Input placeholder="输入项目名称" id="name" maxlength="20"/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="项目负责人"
                    >
                        <Select placeholder="选择项目负责人">
                            <Option value="red">Red</Option>
                            <Option value="green">Green</Option>
                            <Option value="blue">Blue</Option>
                        </Select>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="投标状态"
                    >
                        <RadioGroup className="form-control pl-2">
                            <Radio value="0">未中标</Radio>
                            <Radio value="1">已中标</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="项目状态"
                    >
                        <RadioGroup className="form-control pl-2">
                            <Radio value="0">未开工</Radio>
                            <Radio value="1">已开工</Radio>
                            <Radio value="2">已完工</Radio>
                            <Radio value="3">已停工</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="项目原定计划日期"
                    >
                        <RangePicker placeholder={["选择开始日期", "选择结束日期"]}/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="业主单位"
                    >
                        <Select placeholder="选择业主单位">
                            <Option value="red">Red</Option>
                            <Option value="green">Green</Option>
                            <Option value="blue">Blue</Option>
                        </Select>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="建设单位"
                    >
                        <Select placeholder="选择建设单位">
                            <Option value="red">Red</Option>
                            <Option value="green">Green</Option>
                            <Option value="blue">Blue</Option>
                        </Select>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="项目备注"
                    >
                        <Input placeholder="输入项目备注(选填)" id="mark"/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="项目说明"
                    >
                        <Input placeholder="输入项目说明(选填)" id="caption"/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="审核人"
                    >
                        <Select placeholder="选择审核人(选填)">
                            <Option value="red">Red</Option>
                            <Option value="green">Green</Option>
                            <Option value="blue">Blue</Option>
                        </Select>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="审核日期"
                    >
                        <Input placeholder="输入审核日期" id="auditDate" disabled="true"/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="创建人"
                    >
                        <Input placeholder="输入创建人" id="createPersion" disabled="true"/>
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="创建日期"
                    >
                        <Input placeholder="创建日期" id="createDate" disabled="true"/>
                    </FormItem>
                    <FormItem
                        wrapperCol={{
                            xs: {span: 24, offset: 0},
                            sm: {span: 16, offset: 8},
                        }}
                    >
                        <Button type="primary" htmlType="submit">创建</Button>
                    </FormItem>
                </Form>);
        }
        ;


    }
}

export default ProjectCreate = Form.create()(ProjectCreate);
