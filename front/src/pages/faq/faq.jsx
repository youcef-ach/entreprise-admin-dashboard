import { Collapse, Typography, Flex } from "antd";
import { useLoaderData } from "react-router-dom";
import "./faq.css";

const { Title, Text } = Typography;

const style = {
  marginBottom: 24,
  borderRadius: 10,
};

function faq() {
  const data = useLoaderData();
  const modifiedData = data.map((item, i) => ({
    key: i,
    label: (
      <Title style={{ margin: 0, color: "#4cceac" }} level={4}>
        {item.question}
      </Title>
    ),
    children: <Text>{item.resp}</Text>,
    style,
  }));

  return (
    <>
      <Flex
        className="fullW subHeaderFlex"
        vertical
        justify="center"
        align="start"
      >
        <Typography.Title style={{ margin: 0 }}>Dashboard</Typography.Title>
        <Typography.Text type="secondary">
          Welcome to your Dashboard
        </Typography.Text>
      </Flex>{" "}
      <Collapse
        className="faq"
        expandIconPosition="end"
        items={modifiedData}
        bordered
      />
    </>
  );
}

export default faq;
