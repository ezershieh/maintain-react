import React, { Component } from 'react';
import { Button, Modal, Form, Input, DatePicker, Col} from 'antd';
import './Companylist.css'
const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};
const CollectionCreateForm = Form.create()(
    (props) => {
        const { visible, onCancel, onCreate, form } = props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title="创建公司"
                person="person is not null"
                telephone="telephonen is not null"
                okText="Create"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical" >
                    <FormItem label="公司名称" >
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: '公司名称不能为空!' }],
                        })(
                            <Input />
                        )}
                    </FormItem>
                    <FormItem label="公司负责人">
                        {getFieldDecorator('person',{
                            rules: [{ required: true, message: '公司负责人不能为空!' }],
                        })(
                            <Input type="textarea" />
                        )}
                    </FormItem>
                    <FormItem label="电话号码">
                        {getFieldDecorator('telephone',{
                            rules: [{ required: true, message: '电话号码不能为空!' }],
                        })(
                            <Input  type="textarea" />
                        )}
                    </FormItem>
                    <FormItem label="备注">
                        {getFieldDecorator('description')(<Input type="textarea" />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
);
class Create_mask extends Component {
    /* handleSubmit(){
         const data ={
             name:this.state.name,
             managerName:this.state.managerName,
             managerPhone:this.state.managerPhone
         }
     }*/
    state = {
        visible: false,
    };
    showModal = () => {
        this.setState({ visible: true });
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    handleCreate = () => {
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    }
    saveFormRef = (form) => {
        this.form = form;
    }
    render() {
        return(
            <div>
                <Button type="primary" onClick={this.showModal} className="btncre">创建公司</Button>
                <CollectionCreateForm
                    ref={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        )
    }
}
export default Create_mask;





