import React from "react";
import { Tabs, Icon } from "antd";
import Todo from "../../../Todo";
import TableList from "../TableList";
import CardName from '../CardName'

const TabPane = Tabs.TabPane;

class TabContent extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <Icon type="apple" />
              Chứng chỉ
            </span>
          }
          key="1"
        >
          <Todo />
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="android" />
              Khóa học
            </span>
          }
          key="2"
        >
          <TableList />
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type="android" />
              Card Name
            </span>
          }
          key="3"
        >
          <CardName />
        </TabPane>
      </Tabs>
    );
  }
}
export default TabContent;
