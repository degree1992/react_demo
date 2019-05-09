import React from 'react'
import { Alert, Button, Row, Col, Steps } from 'antd';
// introduce
const Step = Steps.Step;
export default class myIntroduce extends React.Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="" id="container">
                <Steps current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
                所属测试menu的实现
                <Button type="primary">按钮</Button>
                <div className="gutter-example">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="gutter-box">col-6</div>
                        </Col>
                    </Row>
                </div>
                <div className="" style={{marginTop:'50px'}}>

                </div>
            </div>

        )
    }
}
