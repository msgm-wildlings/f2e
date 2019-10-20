import React, { FC, useState, useEffect, useRef } from 'react';
import { Carousel, Col, Divider, Form, Input, Modal, Steps } from 'antd';
import { IUserForm } from '../interface';
const { Step } = Steps;
const { Item } = Form;

const _UserForm: FC<IUserForm> = ({
  visible,
  onCancel,
  onSummit,
  form
}: IUserForm) => {
  //   const [users, setUsers] = useState<Array<IUserList>>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const sliderRef = useRef<Carousel>(null);
  const { getFieldDecorator } = form;

  const modalWidth = document.body.clientWidth / 1.6;
  useEffect(() => {
    sliderRef!.current && sliderRef.current.goTo(currentStep, false);
  }, [currentStep]);
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      onOk={onSummit}
      title="會員資料"
      okText="完成"
      cancelText="取消"
      width={modalWidth}
    >
      <Steps current={currentStep} onChange={setCurrentStep}>
        <Step title="基本資料" description="Applicant Details" />
        <Step title="法定代理人核准" description="Guardian's Consent" />
        <Step title="契約內容與免責聲明" description="" />
      </Steps>
      <Divider />
      <Form onSubmit={onSummit}>
        <Carousel ref={sliderRef}>
          <div>
            <Col span={12}>
              <Item
                label="會員姓名"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                {getFieldDecorator('name', {
                  rules: [
                    {
                      required: true,
                      message: '請輸入會員姓名'
                    }
                  ]
                })(<Input size="large" />)}
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label="會員綽號"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                {getFieldDecorator('nickname', {})(<Input size="large" />)}
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label="身分證字號"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                {getFieldDecorator('id', { rules: [{ required: true }] })(
                  <Input size="large" />
                )}
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label="E-mail"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                {getFieldDecorator('email', {
                  rules: [
                    {
                      type: 'email',
                      message: '不是正確的 email 格式'
                    }
                  ]
                })(<Input size="large" />)}
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label="聯絡電話"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: '請輸入聯絡電話' }]
                })(<Input size="large" />)}
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label="出生日期"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                {getFieldDecorator('dateOfBirth')(<Input size="large" />)}
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label="緊急聯絡人"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                {getFieldDecorator('emergencyContact', {
                  rules: [{ required: true, message: '請輸入緊急聯絡人' }]
                })(<Input size="large" />)}
              </Item>
            </Col>
            <Col span={12}>
              <Item
                label="聯絡人電話"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                {getFieldDecorator('emergencyContactPhone', {
                  rules: [{ required: true, message: '請輸入聯絡人電話' }]
                })(<Input size="large" />)}
              </Item>
            </Col>

            <Col span={24}>
              <Item
                label="地址"
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 21 }}
              >
                {getFieldDecorator('residence')(<Input size="large" />)}
              </Item>
            </Col>
          </div>
          <div>
            <h3>法定代理人核准</h3>
          </div>
          <div>
            <h3>契約內容與免責聲明</h3>
          </div>
        </Carousel>
      </Form>
    </Modal>
  );
};
const UserForm = Form.create<IUserForm>({ name: 'form_in_modal' })(_UserForm);
export default UserForm;
