import styled from "styled-components"

const HomeLayout = styled.div`
    height: 80%;
`

const Container = styled.div`
    background: #ffffff;
    color: #000000;
    border: 1px solid #000000;
    width: 100%;
    height: 100%;
`

const Row = styled.div`
    display: flex;
    height: 50%;
`
export default function Home () {
    return <HomeLayout>
        <Row>
            <Container>Box 1</Container>
        </Row>
        <Row>
            <Container>Box 2</Container>
            <Container>Box 3</Container>
        </Row>
    </HomeLayout>
}