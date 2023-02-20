import { useState } from "react";
import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons"

export default function PlayedBox() {
    const [pause, setPause] = useState(true)
    
    return <span onClick={() => setPause(!pause)}>
        { pause ? <CaretRightOutlined /> : <PauseOutlined />}
    </span>
}