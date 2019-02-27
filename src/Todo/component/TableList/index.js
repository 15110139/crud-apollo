import React from "react";
import { Table, Button, Spin } from "antd";
import { graphql } from "react-apollo";
import { getListUser } from "../../../apollo/query";
class TableList extends React.Component {
  render() {
    const fetchData = [];
    const { data } = this.props;
    if (data.loading) return <Spin size="large" />;
    if (data.error) return <div>Canh bao loi</div>;
    if (data.users) {
      data.users.map((el, index) => {
        fetchData.push(el);
        fetchData[index].key = index + 1;
      });
    }
    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "No",
        key: "no",
        render: record => <div> {record.key}</div>
      },

      {
        title: "Action",
        key: "action",
        render: () => (
          <div>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </div>
        )
      }
    ];

    return (
      <React.Fragment>
        <Table columns={columns} dataSource={fetchData} />;
      </React.Fragment>
    );
  }
}
export default graphql(getListUser)(TableList);
