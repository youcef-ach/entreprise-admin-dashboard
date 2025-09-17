import {
  ContactsOutlined,
  HomeOutlined,
  UsergroupAddOutlined,
  DollarOutlined,
  CalendarOutlined,
  QuestionCircleOutlined,
  BarChartOutlined,
  PieChartOutlined,
  LineChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Flex,Typography } from "antd";
import profile from "../../assets/profile.webp";

const {Text} = Typography

const menuItems = [
  {
    label: <a href="#">Dashboard</a>,
    icon: <HomeOutlined />,
    key: "1",
  },
  {
    label: "Data",
    type: "group",
    key: "10",
    children: [
      {
        label: <a href="#">Manage Team</a>,
        icon: <UsergroupAddOutlined />,
        key: "11",
      },
      {
        label: <a href="#">Contacts Informtion</a>,
        icon: <ContactsOutlined />,
        key: "12",
      },
      {
        label: <a href="#">Invoices Balances</a>,
        icon: <DollarOutlined />,
        key: "13",
      },
    ],
  },
  {
    label: "Pages",
    type: "group",
    key: "20",
    children: [
      {
        label: <a href="#">Profile Form</a>,
        icon: <UserOutlined />,
        key: "21",
      },
      {
        label: <a href="#">Calendar</a>,
        icon: <CalendarOutlined />,
        key: "22",
      },
      {
        label: <a href="#">FAQ page</a>,
        icon: <QuestionCircleOutlined />,
        key: "23",
      },
    ],
  },
  {
    label: "Charts",
    type: "group",
    key: "30",
    children: [
      {
        label: <a href="#">Bar Chart</a>,
        icon: <BarChartOutlined />,
        key: "31",
      },
      {
        label: <a href="#">Pie Chart</a>,
        icon: <PieChartOutlined />,
        key: "32",
      },
      {
        label: <a href="#">Line Chart</a>,
        icon: <LineChartOutlined />,
        key: "33",
      },
      {
        label: <a href="#">Geography Chart</a>,
        key: "34",
      },
    ],
  },
];

function sidbar() {
  return (
    <Flex
      vertical
      justify="center"
      align="center"
      className="fullHW sidBarFlex"
      style={{ border: "2px solid green" }}
    >
      <img src={profile} className="profile-pic"/>
      <Text>Name</Text>
      <Text>Position</Text>
      <Menu mode="inline" items={menuItems} />
    </Flex>
  );
}

export default sidbar;