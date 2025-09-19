import { Form, Flex, InputNumber,Input, Typography, Button } from "antd";
import "./form.css";

const { Title, Text } = Typography;

function form() {
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
      <Form size="large" variant="underlined">
        <Flex
          className="fullW"
          justify="center"
          align="center"
          style={{ columnGap: 12 }}
          wrap
        >
          <Form.Item
            className="fname"
            name="first_name"
            rules={[{ required: true, message: "required" }]}
          >
            <Input placeholder="first name"></Input>
          </Form.Item>
          <Form.Item
            className="fname"
            name="last_name"
            rules={[{ required: true, message: "required" }]}
          >
            <Input placeholder="last name"></Input>
          </Form.Item>
        </Flex>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "required" }]}
        >
          <Input placeholder="email" type="email"></Input>
        </Form.Item>
        <Form.Item
          name="phone_number"
          rules={[{ required: true, message: "required" }]}
        >
          <InputNumber placeholder="phone number" type="number" className="fullW"></InputNumber>
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "required" }]}
        >
          <Input.Password placeholder="password"></Input.Password>
        </Form.Item>
        <Form.Item
          name="password2"
          rules={[{ required: true, message: "required" }]}
        >
          <Input.Password placeholder="confirm password"></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="nUserSubmit">
            create user
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default form;