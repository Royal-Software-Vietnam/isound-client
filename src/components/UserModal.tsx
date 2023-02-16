import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Modal, message } from 'antd';
import styled from 'styled-components';
import '../assets/GlobalStyles.css'
import LoginBackground from "./../assets/login-bc.jpg"
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { signin, signup } from '../services';
import { useApp } from '../context';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: center center / cover no-repeat url(${LoginBackground});
  display: flex;
  align-items: center;
  
`

const FormContainer = styled.div`
    width: 40%;
    height: 70vh;
    text-align: center;
    background: rgba(255, 255, 255, 0.425);
    box-shadow: 0px 6px 8px rgba(3, 7, 6, 0.8),0px 3px 4px rgba(110, 27, 27, 0.5), 0px 1px 16px rgba(11, 12, 12, 0.5);
    border-radius: 8px;
    margin: 2rem;
    transform: translateX(125%);
    transition: all .325s ease-in-out;
    
    & .form__header {
        display: flex;
        flex-direction: column;

        margin: 42px 0;

        & .form__header-name {
            font-weight: 700;
            font-size: 1.75rem;
            color: #fff;
            text-shadow: 3px 3px 0px red;
        }

        & .form__header-title {
            font-weight: 700;
            font-size: 1.25rem;
            color: #fff;
            text-shadow: 3px 2px 5px red;
        }
    }

    & .form-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      & .form-action {
        position: relative;

        display: flex;
        justify-content: center;
        align-items: center;
        width: 85%;
        margin: 8px 0;
      }
    }

    & .form-footer {
        margin-top: 12px;
        color: #fff;  
        font-size: 1rem;

        & p span {
          font-weight: 700;
          cursor: pointer;
        }
      }

    &.active {
      transform: translateX(0);
      transition: all .325s ease-in-out;
    }
`

const InputAntd = styled(Input)`
  background-color: #3b3b3b;
  border-radius: 15px;
  border: none;

  & input.ant-input {
    width: 100%;
    height: 100%;
    background-color: #3b3b3b;
    padding: 15px 12px 15px 12px;
    color: #fff;

    &::placeholder  {
      color: #ccc;
    }
  }

  & svg {
    color: #fff;
    font-size: 1.125rem;
  }
`

const FormBtn = styled(Button)`
    width: 85%;
    margin-top: 4px;
    padding: 5px 0;
    height: unset;
    border-radius: 10px;
    border: 0;
    outline: 0;
    background-color: #e9003f;
    opacity: 1;
    font-size: 1.125rem;
    font-weight: 700;
    cursor: pointer;

    &:hover {
      background-color: #e9003f !important ;
      opacity: 0.85;
    }
`

const LoginModalBtn = styled(Button)`
  height: 2.2rem;

  &.ant-btn-primary {
    border: 2px solid #e9003f;
    color: #e9003f;
    background-color: rgba(0, 0, 0, 0);
    font-weight: 500;
  }

  &.ant-btn-primary:hover {
    color: #ffffff;
    background-color: #e9003f;
  }
`

type MessageType = 'success' | 'info' | 'warning' | 'error';

const UserModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false)
  const [form] = Form.useForm()
  const { setUser, user, setLoading } = useApp()
  const [messageApi, contextHolder] = message.useMessage()

  const openMessage = (type: MessageType, content: string) => {
    messageApi.open({
      type: type,
      content: content,
    });
  };

  const handleSign = async (values: any) => {
    setLoading(true)
    try {
      if (toggle) {
        let { data } = await signup({ username: values.username, password: values.password, email: values.email })
        /* @ts-ignore */
        localStorage.setItem('auth', JSON.stringify(data))
      } else {
        let { data } = await signin({ username: values.username, password: values.password })
        /* @ts-ignore */
        localStorage.setItem('auth', JSON.stringify(data))
      }
      setOpen(false)
      setLoading(false)
    } catch (error) {
      openMessage('error', 'Không thể đăng ký')
      setOpen(false)
      setLoading(false)
    }
  }

  useEffect(() => {
    open === false && setToggle(false)
  }, [open])

  return (
    <>
      {contextHolder}
      <LoginModalBtn type="primary" onClick={() => setOpen(true)}>
        Login
      </LoginModalBtn>
      <Modal
        onCancel={() => setOpen(false)}
        centered
        open={open}
        width={1000}
        footer=''
      >
        {/* <Image className={toggle ? 'active' : ''}/> */}
        <Container>
          <FormContainer className={toggle ? 'active' : ''}>
            <div className={"form__header"}>
              <h1 className="form__header-name">
                ISOUND
              </h1>
              <h2 className="form__header-title">
                {toggle ? 'Sign Up' : 'Sign In'}
              </h2>
            </div>
            <Form form={form} onFinish={handleSign}>
              <div className="form-body">
                {toggle ?
                  <>
                    <div className="form-action">
                      <Form.Item required name="username" style={{ width: '100%' }}>
                        <InputAntd placeholder='Username' prefix={<UserOutlined />} />
                      </Form.Item>
                    </div>
                    <div className="form-action">
                      <Form.Item required name="password" style={{ width: '100%' }}>
                        <InputAntd placeholder='Password' prefix={<LockOutlined />} />
                      </Form.Item>
                    </div>
                    <div className="form-action">
                      <Form.Item required name="email" style={{ width: '100%' }}>
                        <InputAntd placeholder='Email' prefix={<MailOutlined />} />
                      </Form.Item>
                    </div>
                    <FormBtn type='primary' htmlType="submit">
                      Sign up
                    </FormBtn>
                  </>
                  :
                  <>
                    <div className="form-action">
                      <Form.Item required name="username" style={{ width: '100%' }}>
                        <InputAntd placeholder='Username' prefix={<UserOutlined />} />
                      </Form.Item>
                    </div>
                    <div className="form-action">
                      <Form.Item required name="password" style={{ width: '100%' }}>
                        <InputAntd placeholder='Password' prefix={<LockOutlined />} />
                      </Form.Item>
                    </div>
                    <FormBtn type='primary' htmlType="submit">
                      Login
                    </FormBtn>
                  </>
                }
              </div>
            </Form>
            <div className="form-footer">
              <p>{toggle ? 'Already have account?' : 'Not a member?'} <span onClick={() => setToggle(!toggle)}>
                {toggle ? 'Sign In' : 'Sign Up'}
              </span></p>
            </div>
          </FormContainer>
        </Container>
      </Modal>
    </>
  );
};

export default UserModal;