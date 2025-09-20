import { Flex, Typography } from "antd";
import { useLoaderData } from "react-router-dom";
import PieChart from "../../components/pieChart";
import "./pie.css";

const { Title, Text } = Typography;

function bar() {
  const data = useLoaderData();

  return (
    <>
      <Flex justify="space-between" align="center">
        <Flex vertical justify="center" align="center">
          <Title style={{ margin: 0 }}>Dashboard</Title>
          <Text type="secondary">Welcome to your Dashboard</Text>
        </Flex>
      </Flex>
      <div className="chartContainer">
        <PieChart data={data} />
      </div>
    </>
  );
}

export default bar;