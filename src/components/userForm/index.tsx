import React, { FC, useState, useEffect, useRef } from 'react';
import {
  Carousel,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Steps,
  Checkbox
} from 'antd';
import { IUserForm } from '../interface';
import './index.sass';
const { Step } = Steps;
const { Item } = Form;
const { Group } = Checkbox;

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
      destroyOnClose
      afterClose={() => setCurrentStep(0)}
    >
      <Steps current={currentStep} onChange={setCurrentStep}>
        <Step title="基本資料" description="Applicant Details" />
        <Step title="法定代理人核准" description="Guardian's Consent" />
        <Step title="契約內容與免責聲明" description="" />
      </Steps>
      <Divider />
      <Form onSubmit={onSummit}>
        <Carousel ref={sliderRef} initialSlide={currentStep} adaptiveHeight>
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
            <Col span={12}>
              <Item
                label="代理人姓名"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 18 }}
              >
                {getFieldDecorator('guardianName', {
                  rules: [
                    {
                      required: true,
                      message: '請輸入代理人姓名'
                    }
                  ]
                })(<Input size="large" />)}
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
          </div>
          <div>
            <h3>
              <Col span={24}>
                <Item>
                  1.
                  您必須在此確認，關於身體狀況及使用健身器材的能力，在您加入之前無任何醫藥方面的建議，若目前有任何健康與醫療方面的任何顧慮，可能會影響您的健身計畫，請您在上課之前與專業醫師討論。
                </Item>
              </Col>
              <Col span={24}>
                <Item>
                  {getFieldDecorator('checkbox-group', {
                    initialValue: []
                  })(
                    <Group style={{ width: '100%' }}>
                      <Checkbox value="A">
                        <span>心臟疾病</span>
                      </Checkbox>
                      <Checkbox value="B">
                        <span>低血壓 / 高血壓</span>
                      </Checkbox>
                      <Checkbox value="C">
                        <span>低血糖 / 糖尿病</span>
                      </Checkbox>
                      <Checkbox value="D">
                        <span>內分泌失調</span>
                      </Checkbox>
                      <Checkbox value="E">
                        <span>暈眩</span>
                      </Checkbox>
                      <Checkbox value="F">
                        <span>懷孕中 / 產後未超過一年</span>
                      </Checkbox>
                      <Checkbox value="G">
                        <span>關節狀況 / 受傷</span>
                      </Checkbox>
                      <Checkbox value="H">
                        <span>曾有重大手術</span>
                      </Checkbox>
                      <Checkbox value="I">
                        <span>中風</span>
                      </Checkbox>
                      <Checkbox value="J">
                        <span>上述未涉及之醫療狀況</span>
                      </Checkbox>
                    </Group>
                  )}
                </Item>
              </Col>
              <Col span={24}>
                <Item>
                  2.
                  遵守現場教練指導，申請人在課程進行中隨時可以停止與休息，維護自己健康並未自身的健康問題承擔所有風險。
                </Item>
              </Col>
              <Col span={24}>
                <Item>
                  3.
                  需著運動服裝，拳擊區不可穿鞋，重訊區虛換乾淨運動鞋並攜帶毛巾。
                </Item>
              </Col>
              <Col span={24}>
                <Item>4. 管場內禁止飲食，水及運動飲料不在此限至內。</Item>
              </Col>
              <Col span={24}>
                <Item>
                  5. 器材勿重摔，用必請歸回原位；惡意損毀器材者，將照價賠償。
                </Item>
              </Col>
              <Col span={24}>
                <Item>
                  6. 申請人在外地與他人發生鬥毆、打架等事件與本場館及教練無關。
                </Item>
              </Col>
              <Col span={24}>
                <Item>
                  7.
                  您在此確認已充分閱讀，理解和同意其中全部條款，即表示即日起同意本聲明內容。
                </Item>
              </Col>
              <Col span={24}>
                <Item>8. 野人格鬥體適能保有更改上述聲明事項內容之權利。</Item>
              </Col>
            </h3>
          </div>
        </Carousel>
      </Form>
    </Modal>
  );
};
const UserForm = Form.create<IUserForm>({ name: 'form_in_modal' })(_UserForm);
export default UserForm;
