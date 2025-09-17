import { Input, Flex } from "antd";
import {
  BellOutlined,
  SettingOutlined,
  UserOutlined,
  SunOutlined,
} from "@ant-design/icons";
import "./global.css";

function header() {
  return (
    <Flex
      justify="space-between"
      align="center"
      className="fullW"
    >
      <Flex align="center" className="search">
        <Input.Search placeholder="search"></Input.Search>
      </Flex>
      <Flex justify="center" align="center" gap={14}>
        <SunOutlined className="headerIcon" />
        <BellOutlined className="headerIcon" />
        <SettingOutlined className="headerIcon" />
        <UserOutlined className="headerIcon" />
      </Flex>
    </Flex>
  );
}

export default header;