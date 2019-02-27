import React, { Component } from "react";
import {Row, Col} from 'antd'
import TabConten from "./Todo/component/TabConten";
import MenuNav from './Todo/component/MenuNav'
class App extends Component {
  render() {
    // console.log('prop',this.props);

    return (
      <div>
        <Row>
          <Col span={5}>
            <MenuNav />
          </Col>
          <Col span={19}>
            <TabConten />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
