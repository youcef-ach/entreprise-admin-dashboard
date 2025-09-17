import { Flex, Typography, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

function dashboard() {
  return (
    <Flex
      className="dashboardContainer"
      vertical
      justify="center"
    >
      <Flex justify="space-between" align="center">
        <Flex vertical justify="center" align="center">
          <Title style={{ margin: 0 }}>Dashboard</Title>
          <Text type="secondary">Welcome to your Dashboard</Text>
        </Flex>
        <Button icon={<DownloadOutlined />} type="primary">
          Download Reports
        </Button>
      </Flex>
    </Flex>
  );
}

export default dashboard;