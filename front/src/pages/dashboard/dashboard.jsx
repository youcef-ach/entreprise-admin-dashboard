import { Flex, Typography, Button, Card, Progress, Tag } from "antd";
import {
  DownloadOutlined,
  MailOutlined,
  AlipayOutlined,
  UserAddOutlined,
  StrikethroughOutlined,
} from "@ant-design/icons";
import "./dashboard.css";
import LineChart from "../../components/lineChart";
import PieChart from "../../components/pieChart";
import BarChart from "../../components/barChart";
import { mockLineData, mockBarData, mockPieData } from "../../data/mockData";

const { Text, Title } = Typography;

function dashboard() {
  return (
    <Flex className="dashboardContainer" vertical justify="center" gap={16}>
      <Flex justify="space-between" align="center">
        <Flex vertical justify="center" align="center">
          <Title style={{ margin: 0 }}>Dashboard</Title>
          <Text type="secondary">Welcome to your Dashboard</Text>
        </Flex>
        <Button icon={<DownloadOutlined />} type="primary">
          Download Reports
        </Button>
      </Flex>
      <Flex justify="start" align="center" gap={16} wrap>
        <Card variant="borderless" className="statCard">
          <Flex justify="space-between" align="stretch">
            <Flex vertical justify="center" align="start" gap={2}>
              <Text style={{ marginLeft: 1 }}>
                <MailOutlined className="green" style={{ fontSize: 24 }} />
              </Text>
              <Text>12,361</Text>
              <Text className="green negM">Mails Sent</Text>
            </Flex>
            <Flex vertical justify="center" align="center" gap={8}>
              <Progress
                type="circle"
                size={45}
                showInfo={false}
                percent={14}
                strokeColor="#6870fa"
                strokeWidth={11}
                trailColor="#4cceac"
              />
              <Text className="green">+14%</Text>
            </Flex>
          </Flex>
        </Card>
        <Card variant="borderless" className="statCard">
          <Flex justify="space-between" align="stretch">
            <Flex vertical justify="center" align="start" gap={2}>
              <Text style={{ marginLeft: 1 }}>
                <AlipayOutlined className="green" style={{ fontSize: 24 }} />
              </Text>
              <Text>431,225</Text>
              <Text className="green negM">Sails Obtained</Text>
            </Flex>
            <Flex vertical justify="center" align="center" gap={8}>
              <Progress
                type="circle"
                size={45}
                showInfo={false}
                percent={21}
                strokeColor="#6870fa"
                strokeWidth={11}
                trailColor="#4cceac"
              />
              <Text className="green">+21%</Text>
            </Flex>
          </Flex>
        </Card>
        <Card variant="borderless" className="statCard">
          <Flex justify="space-between" align="stretch">
            <Flex vertical justify="center" align="start" gap={2}>
              <Text style={{ marginLeft: 1 }}>
                <UserAddOutlined className="green" style={{ fontSize: 24 }} />
              </Text>
              <Text>32,441</Text>
              <Text className="green negM">New Clients</Text>
            </Flex>
            <Flex vertical justify="center" align="center" gap={8}>
              <Progress
                type="circle"
                size={45}
                showInfo={false}
                percent={5}
                trailColor="#6870fa"
                strokeWidth={11}
                strokeColor="#4cceac"
              />
              <Text className="green">+5%</Text>
            </Flex>
          </Flex>
        </Card>
        <Card variant="borderless" className="statCard">
          <Flex justify="space-between" align="stretch">
            <Flex vertical justify="center" align="start" gap={2}>
              <Text style={{ marginLeft: 1 }}>
                <StrikethroughOutlined
                  className="green"
                  style={{ fontSize: 24 }}
                />
              </Text>
              <Text>1,325,134</Text>
              <Text className="green negM">Traffic Obtained</Text>
            </Flex>
            <Flex vertical justify="center" align="center" gap={8}>
              <Progress
                type="circle"
                size={45}
                showInfo={false}
                percent={43}
                strokeColor="#6870fa"
                strokeWidth={11}
                trailColor="#4cceac"
              />
              <Text className="green">+43%</Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
      <Flex justify="center" align="center" gap={16} className="lineChartFlex" wrap>
        <div className="dLineContainer fullH darkGrayBg">
          <LineChart showTips={false} data={mockLineData} />
        </div>
        <Flex
          className="statContainer fullH"
          vertical
          justify="start"
          align="center"
          gap={5}
        >
          <Title level={3} className="darkGrayBg fullW rTransactions">
            Recent Transactions
          </Title>
          <Flex
            justify="space-between"
            align="center"
            className="fullW darkGrayBg TItem"
          >
            <div className="left">
              <Text className="green" style={{ display: "block" }}>
                01e4dsa
              </Text>
              <Text style={{ display: "block" }}>John Doe</Text>
            </div>
            <Text>2025-01-09</Text>
            <Text className="price">$43.95</Text>
          </Flex>
          <Flex
            justify="space-between"
            align="center"
            className="fullW darkGrayBg TItem"
          >
            <div className="left">
              <Text className="green" style={{ display: "block" }}>
                01e4dsa
              </Text>
              <Text style={{ display: "block" }}>John Doe</Text>
            </div>
            <Text>2025-01-09</Text>
            <Text className="price">$43.95</Text>
          </Flex>
          <Flex
            justify="space-between"
            align="center"
            className="fullW darkGrayBg TItem"
          >
            <div className="left">
              <Text className="green" style={{ display: "block" }}>
                01e4dsa
              </Text>
              <Text style={{ display: "block" }}>John Doe</Text>
            </div>
            <Text>2025-01-09</Text>
            <Text className="price">$43.95</Text>
          </Flex>
          <Flex
            justify="space-between"
            align="center"
            className="fullW darkGrayBg TItem"
          >
            <div className="left">
              <Text className="green" style={{ display: "block" }}>
                01e4dsa
              </Text>
              <Text style={{ display: "block" }}>John Doe</Text>
            </div>
            <Text>2025-01-09</Text>
            <Text className="price">$43.95</Text>
          </Flex>
          <Flex
            justify="space-between"
            align="center"
            className="fullW darkGrayBg TItem"
          >
            <div className="left">
              <Text className="green" style={{ display: "block" }}>
                01e4dsa
              </Text>
              <Text style={{ display: "block" }}>John Doe</Text>
            </div>
            <Text>2025-01-09</Text>
            <Text className="price">$43.95</Text>
          </Flex>
          <Flex
            justify="space-between"
            align="center"
            className="fullW darkGrayBg TItem"
          >
            <div className="left">
              <Text className="green" style={{ display: "block" }}>
                01e4dsa
              </Text>
              <Text style={{ display: "block" }}>John Doe</Text>
            </div>
            <Text>2025-01-09</Text>
            <Text className="price">$43.95</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex justify="center" align="center" gap={16} wrap>
        <div className="dLastContainer fullH darkGrayBg">
          <PieChart showTips={false} data={mockPieData} />
        </div>
        <div className="dLastContainer fullH darkGrayBg">
          <BarChart showTips={false} data={mockBarData} />
        </div>
      </Flex>
    </Flex>
  );
}

export default dashboard;