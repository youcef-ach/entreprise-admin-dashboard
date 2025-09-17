import { Table, Tag, Flex, Typography, Button } from "antd";
import { useLoaderData } from "react-router-dom";
import "./invoices.css";

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
    },
    {
      key: "email",
      title: "email",
      dataIndex: "email",
    },
    {
      key: "cost",
      dataIndex: "cost",
      title: "cost",
    },
    {
      key: "phone",
      title: "phone",
      dataIndex: "phone",
    },
    {
      key: "date",
      title: "date",
      dataIndex: "date",
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
