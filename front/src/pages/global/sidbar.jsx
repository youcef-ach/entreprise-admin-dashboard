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
  AreaChartOutlined,
} from "@ant-design/icons";
import { Menu, Flex, Typography } from "antd";
import profile from "../../assets/profile.webp";

const { Text } = Typography;

function sidbar() {
  const menuItems = [
    {
      label: <a href="/">Dashboard</a>,
      icon: <HomeOutlined />,
      key: "1",
    },
    {
      label: "Data",
      type: "group",
      key: "10",
      children: [
        {
          label: <a href="/team">Manage Team</a>,
          icon: <UsergroupAddOutlined />,
          key: "11",
        },
        {
          label: <a href="/contacts">Contacts Informtion</a>,
          icon: <ContactsOutlined />,
          key: "12",
        },
        {
          label: <a href="/invoices">Invoices Balances</a>,
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
          label: <a href="/create_user">Profile Form</a>,
          icon: <UserOutlined />,
          key: "21",
        },
        {
          label: <a href="/calendar">Calendar</a>,
          icon: <CalendarOutlined />,
          key: "22",
        },
        {
          label: <a href="/faq">FAQ page</a>,
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
          label: <a href="/bar">Bar Chart</a>,
          icon: <BarChartOutlined />,
          key: "31",
        },
        {
          label: <a href="/pie">Pie Chart</a>,
          icon: <PieChartOutlined />,
          key: "32",
        },
        {
          label: <a href="/line">Line Chart</a>,
          icon: <LineChartOutlined />,
          key: "33",
        },
        {
          label: <a href="#">Geography Chart</a>,
          key: "34",
          icon: <AreaChartOutlined />,
        },
      ],
    },
  ];

  return <Menu items={menuItems} className="sideMenu" theme="dark" />;
}

export default sidbar;
