import React from 'react'
import { Alert,Button, Steps, Row, Col, Tooltip } from 'antd';
// introducep
const Step = Steps.Step;

export default class myIntroduce extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="">
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
                <Steps current={1}>
                    <Step title="Finished" description="This is a description." />
                    <Step title="In Progress" description="This is a description." />
                    <Step title="Waiting" description="This is a description." />
                </Steps>
                Designed as Ant Design，提炼和服务企业级中后台产品的交互语言和视觉风格。
                <br/>
                <Tooltip title='按钮'>
                    <Button type="primary">按钮</Button>
                </Tooltip>
                <br/>
                <br/>
                <Tooltip title='默认按钮'>
                    <Button type="">默认按钮</Button>
                </Tooltip>
                <div className="gutter-example">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <Tooltip title='默认按钮'>
                                <Button type="">默认按钮</Button>
                            </Tooltip>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Tooltip title='默认按钮'>
                                <Button type="">默认按钮</Button>
                            </Tooltip>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Tooltip title='默认按钮'>
                                <Button type="">默认按钮</Button>
                            </Tooltip>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Tooltip title='默认按钮'>
                                <Button type="">默认按钮</Button>
                            </Tooltip>
                        </Col>
                    </Row>
                </div>
                <div className="gutter-example">
                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <Tooltip title='默认按钮'>
                                <Button type="">默认按钮</Button>
                            </Tooltip>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Tooltip title='默认按钮'>
                                <Button type="">默认按钮</Button>
                            </Tooltip>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Tooltip title='默认按钮'>
                                <Button type="">默认按钮</Button>
                            </Tooltip>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Tooltip title='默认按钮'>
                                <Button type="">默认按钮</Button>
                            </Tooltip>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
