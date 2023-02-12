import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import styled from 'styled-components';
import TrollImgSrc from './../assets/troll.svg'

const Image = styled.div`
        width: 500px;
        height: 500px;
        
        background: center center / cover no-repeat url(${TrollImgSrc});

`

const UserModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Đăng nhập
      </Button>
      <Modal
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <h1>heheheheh</h1>
        <Image>
            
        </Image>
      </Modal>
    </>
  );
};

export default UserModal;