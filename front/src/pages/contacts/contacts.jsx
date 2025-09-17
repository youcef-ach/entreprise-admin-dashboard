import { Button, Flex, Popover, Radio, Switch, Table, Typography } from "antd";
import { useLoaderData } from "react-router-dom";
import "./contacts.css";
import { useState } from "react";

const { Title, Text } = Typography;

const columns = [
  {
    key: "id",
    title: "id",
    dataIndex: "id",
  },
  {
    key: "registrar ID",
    title: "Registrar ID",
    dataIndex: "registrarId",
  },
  {
    key: "name",
    title: "name",
    dataIndex: "name",
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
    key: "address",
    title: "address",
    dataIndex: "address",
  },
  {
    key: "city",
    title: "city",
    dataIndex: "city",
  },
  {
    key: "zip code",
    title: "zip code",
    dataIndex: "zipCode",
  },
];

function contacts() {
  const data = useLoaderData();
  const [size, setSize] = useState("large");
  const [shownColumns, setShownColumns] = useState([
    "id",
    "registrar ID",
    "name",
    "phone number",
    "email",
    "role",
    "age",
    "address",
    "city",
    "zip code",
  ]);

  const popContent = (
    <div className="popOverCont">
      <div>
        <Typography.Text>id: </Typography.Text>
        <Switch
          onChange={(checked, e) => {
            e.preventDefault();
            if (!checked)
              setShownColumns((prev) => prev.filter((item) => item != "id"));
            else setShownColumns([...shownColumns, "id"]);
          }}
          defaultChecked
        ></Switch>
      </div>
      <div>
        <Typography.Text>registrar: </Typography.Text>
        <Switch
          onChange={(checked, e) => {
            e.preventDefault();
            if (!checked)
              setShownColumns((prev) =>
                prev.filter((item) => item != "registrar ID")
              );
            else setShownColumns([...shownColumns, "registrar ID"]);
          }}
          defaultChecked
        ></Switch>
      </div>
      <div>
        <Typography.Text>name: </Typography.Text>
        <Switch
          onChange={(checked, e) => {
            e.preventDefault();
            if (!checked)
              setShownColumns((prev) => prev.filter((item) => item != "name"));
            else setShownColumns([...shownColumns, "name"]);
          }}
          defaultChecked
        ></Switch>
      </div>
      <div>
        <Typography.Text>age: </Typography.Text>
        <Switch
          onChange={(checked, e) => {
            e.preventDefault();
            if (!checked)
              setShownColumns((prev) => prev.filter((item) => item != "age"));
            else setShownColumns([...shownColumns, "age"]);
          }}
          defaultChecked
        ></Switch>
      </div>
      <div>
        <Typography.Text>phone: </Typography.Text>
        <Switch
          onChange={(checked, e) => {
            e.preventDefault();
            if (!checked)
              setShownColumns((prev) =>
                prev.filter((item) => item != "phone number")
              );
            else setShownColumns([...shownColumns, "phone number"]);
          }}
          defaultChecked
        ></Switch>
      </div>
      <div>
        <Typography.Text>email: </Typography.Text>
        <Switch
          onChange={(checked, e) => {
            e.preventDefault();
            if (!checked)
              setShownColumns((prev) => prev.filter((item) => item != "email"));
            else setShownColumns([...shownColumns, "email"]);
          }}
          defaultChecked
        ></Switch>
      </div>
      <div>
        <Typography.Text>address: </Typography.Text>
        <Switch
          onChange={(checked, e) => {
            e.preventDefault();
            if (!checked)
              setShownColumns((prev) =>
                prev.filter((item) => item != "address")
              );
            else setShownColumns([...shownColumns, "address"]);
          }}
          defaultChecked
        ></Switch>
      </div>
      <div>
        <Typography.Text>city: </Typography.Text>
        <Switch
          onChange={(checked, e) => {
            e.preventDefault();
            if (!checked)
              setShownColumns((prev) => prev.filter((item) => item != "city"));
            else setShownColumns([...shownColumns, "city"]);
          }}
          defaultChecked
        ></Switch>
      </div>
      <div>
        <Typography.Text>zip code: </Typography.Text>
        <Switch
          onChange={(checked, e) => {
            e.preventDefault();
            if (!checked)
              setShownColumns((prev) =>
                prev.filter((item) => item != "zip code")
              );
            else setShownColumns([...shownColumns, "zip code"]);
          }}
          defaultChecked
        ></Switch>
      </div>
    </div>
  );

  const popSizeContent = (
    <div className="popSizeCont">
      <Radio.Group
        value={size}
        onChange={(e) => setSize(e.target.value)}
        options={[
          {
            label: "small",
            value: "small",
          },
          {
            label: "middle",
            value: "middle",
          },
          {
            label: "large",
            value: "large",
          },
        ]}
      ></Radio.Group>
    </div>
  );

  const newColumns = columns.map((item) => ({
    ...item,
    hidden: !shownColumns.includes(item.key),
  }));

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
      <Flex className="contactsOptions" justify="start" align="start" gap={8}>
        <Popover placement="bottom" content={popContent}>
          <Button type="primary">columns</Button>
        </Popover>
        <Popover placement="bottom" content={popSizeContent}>
          <Button type="primary">Density</Button>
        </Popover>
      </Flex>
      <Table
        size={size}
        rowKey="name"
        dataSource={data}
        columns={newColumns}
        pagination={{
          total: 11,
          defaultPageSize: 9,
          showSizeChanger: true,
          pageSizeOptions: [3, 6, 9],
        }}
      />
    </>
  );
}

export default contacts;
