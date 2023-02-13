import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import styled from 'styled-components';
import '../assets/GlobalStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import LoginBackground from "./../assets/login-bc.jpg"

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
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0px 6px 8px rgba(3, 7, 6, 0.8),0px 3px 4px rgba(110, 27, 27, 0.5), 0px 1px 16px rgba(11, 12, 12, 0.5);
    border-radius: 8px;
    margin: 2rem;
    transform: translateX(125%);

    & .form__header {
        display: flex;
        flex-direction: column;

        margin: 48px 0;

        & .form__header-name {
            font-weight: 700;
            font-size: 2.8rem;
            color: #fff;
        }

        & .form__header-title {
            font-weight: 700;
            font-size: 2rem;
            color: #fff;
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
        margin: 4px 0;

        & svg.icon  {
          position: absolute;
          top: 50%;
          left: 16px;
          transform: translateY(-50%);

          color: #fff;
          font-size: 1.8rem;
        }

        & input {
          width: 100%;
          height: 100%;
          padding: 18px 12px 18px 42px;
          border-radius: 15px;
          border: none;
        } 

        
      }

      & button.btn.btn-form {
        width: 85%;
        padding: 10px 0;
        margin-top: 4px;
        border-radius: 10px;
        border: 0;
        outline: 0;
        background-color: #e9003f;
        opacity: 1;
        font-size: 1.6rem;
        font-weight: 600;
        cursor: pointer;

        &:hover {
          opacity: 0.75;
        }
      }
    }

    & .form-footer {
        margin-top: 12px;
        color: #fff;  
        font-size: 1.6rem;

        & p span {
          font-weight: 700;
          cursor: pointer;
        }
      }

    &.active {
      transform: translateX(0);
    }
`

const LoginButton = styled(Button)`
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

const UserModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    console.log(toggle)
  }, [toggle])

  return (
    <>
      <LoginButton type="primary" onClick={() => setOpen(true)}>
        Login
      </LoginButton>
      <Modal
        onCancel={() => setOpen(false)}
        centered
        open={open}
        width={1000}
        footer=''
      >
        {/* <Image className={toggle ? 'active' : ''}/> */}
        <Container>
            <FormContainer  className={toggle ? 'active' : ''}>
              <div className={"form__header"}>
                  <h1 className="form__header-name">
                      ISOUND
                  </h1>
                  <h2 className="form__header-title">
                      {toggle ? 'Sign In' : 'Sign Up'}
                  </h2>
              </div>
              <div className="form-body">
                {toggle ? 
                  <>
                    <div className="form-action">
                      <FontAwesomeIcon className='icon' icon={faUser}/>
                      <input type="text" placeholder='Username' />
                    </div>
                    <div className="form-action">
                      <FontAwesomeIcon className='icon' icon={faLock}/>
                      <input type="text" placeholder='Password' />
                    </div>
                    <button className="btn btn-form">
                      Login
                    </button>
                  </>
                : 
                  <>
                    <div className="form-action">
                      <FontAwesomeIcon className='icon' icon={faUser}/>
                      <input type="text" placeholder='Username' />
                    </div>
                    <div className="form-action">
                      <FontAwesomeIcon className='icon' icon={faLock}/>
                      <input type="text" placeholder='Password' />
                    </div>
                    <div className="form-action">
                      <FontAwesomeIcon className='icon' icon={faEnvelope}/>
                      <input type="text" placeholder='Email' />
                    </div>
                    <button className="btn btn-form">
                      Sign Up
                    </button>
                  </>
                }
                
              </div>
              <div className="form-footer">
                <p>{toggle ? 'Not a member?' : 'Already have account?'} <span onClick={() => setToggle(!toggle)}>
                  {toggle ? 'Sign Up' : 'Sign In'}
                  </span></p>
              </div>
          </FormContainer>
        </Container>
      </Modal>
    </>
  );
};

export default UserModal;