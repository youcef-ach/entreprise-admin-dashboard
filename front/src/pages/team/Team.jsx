import { Table, Tag, Flex, Typography, Button } from "antd";
import { useLoaderData } from "react-router-dom";
import "./Team.css";

const { Title, Text } = Typography;

function Team() {
  const data = useLoaderData();

  const columns = [
    {
      key: "id",
      title: "id",
      dataIndex: "id",
    },
    {
      key: "name",
      dataIndex: "name",
      title: "name",
      fixed: "left",
    },
    {
      key: "age",
      title: "age",
      dataIndex: "age",
    },
    {
      key: "phone number",
      dataIndex: "phone",
      title: "phone number",
    },
    {
      key: "email",
      title: "email",
      dataIndex: "email",
    },
    {
      key: "permissions",
      title: "role",
      dataIndex: "access",
      render: (data) => {
        if (data == "manager")
          return (
            <Tag className="tableTag" color="#2e7c67">
              {data}
            </Tag>
          );
        else if (data == "admin")
          return (
            <Tag color="#3da58a" className="tableTag">
              {data}
            </Tag>
          );
        else if (data == "user")
          return (
            <Tag color="#2e7c67" className="tableTag">
              {data}
            </Tag>
          );
      },
    },
  ];

  return (
    <>
      <Flex
        className="fullW subHeaderFlex"
        vertical
        justify="center"
        align="start"
      >
        <Title style={{ margin: 0 }}>Dashboard</Title>
        <Text type="secondary">Welcome to your Dashboard</Text>
      </Flex>
      <Table
        pagination={{
          total: 9,
          defaultPageSize: 9,
          showSizeChanger: true,
          pageSizeOptions: [3, 6, 9],
        }}
        className="teamTable"
        rowKey="name"
        dataSource={data}
        columns={columns}
      />
    </>
  );
}

export default Team;
