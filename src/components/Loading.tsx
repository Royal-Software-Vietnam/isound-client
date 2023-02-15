import React from "react";
import {LoadingOutlined} from '@ant-design/icons';
import {Spin} from 'antd';
import styled from "styled-components";

const antIcon = <LoadingOutlined style={{fontSize: 32}} spin/>;

const Container = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  flex: 1;
  width: 100%;
  height: 100%;
`;

const ContainerSpin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  background-color: #fff;
  border-radius: 4px;
`;

export default function Loading(props: any) {
    return (
        <Container>
            <ContainerSpin>
                <Spin size={'small'} indicator={antIcon}/>
            </ContainerSpin>
        </Container>
    )
}