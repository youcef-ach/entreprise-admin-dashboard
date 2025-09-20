import {
  Badge,
  Calendar,
  Flex,
  Button,
  Typography,
  Modal,
  Popover,
  Form,
  Input,
  Select,
} from "antd";
import { useLoaderData } from "react-router-dom";
import "./calendar.css";
import { useEffect, useRef, useState } from "react";
import { DownOutlined, CloseOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";

export default function calendar() {
  const [data, setData] = useState(useLoaderData());
  const [mode, setMode] = useState("month");
  const [open, setOpen] = useState(false);
  const [form] = useForm();

  const selectedDate = useRef(null);

  const [events, setEvents] = useState(() => {
    let today = new Date();
    today = today.toISOString().split("T")[0];
    return data.filter((item) => item.date === today);
  });

  useEffect(() => {
    document
      .getElementsByClassName("ant-radio-button")[0]
      .addEventListener("click", () => setMode("month"));
    document
      .getElementsByClassName("ant-radio-button")[1]
      .addEventListener("click", () => setMode("year"));
  }, []);

  const cellRender = (date) => {
    let events;
    if (mode == "month")
      events = data.filter((item) => item.date === date.format("YYYY-MM-DD"));
    else
      events = data.filter(
        (item) =>
          item.date.slice(5, 7) === date.format("YYYY-MM-DD").slice(5, 7)
      );
    if (events.length)
      return (
        <div className="cellCont fullH">
          <Popover
            content={
              <div className="popOver">
                <Button
                  onClick={() => {
                    selectedDate.current = date;
                    setOpen(true);
                  }}
                >
                  Add
                </Button>
              </div>
            }
            className="addEvent"
            placement="bottom"
          >
            <DownOutlined />
          </Popover>
          <Flex
            className="fullW"
            vertical
            justify="center"
            align="stretch"
            gap={2}
          >
            {events.map((item, i) => (
              <Badge
                key={i}
                className="fullW calBadge"
                status={item.type}
                text={item.title}
              />
            ))}
          </Flex>
        </div>
      );
    else
      return (
        <Popover
          mouseEnterDelay={0}
          content={
            <div className="popOver">
              <Button
                onClick={() => {
                  selectedDate.current = date;
                  setOpen(true);
                }}
              >
                Add
              </Button>
            </div>
          }
          placement="bottom"
          className="addEvent"
        >
          <DownOutlined />
        </Popover>
      );
  };

  const typeOptions = [
    { label: "important", value: "error" },
    { label: "normal", value: "success" },
  ];

  return (
    <>
      <Modal
        title="Add event"
        open={open}
        onOk={() => {
          form
            .validateFields()
            .then(() => {
              form.submit();
              setOpen(false);
            })
            .catch(() => null);
        }}
        onCancel={() => {
          setOpen(false);
          form.resetFields();
        }}
      >
        <Form
          className="modalForm"
          form={form}
          onFinish={(values) => {
            const mydate =
              selectedDate.current.year() +
              "-" +
              (selectedDate.current.month() + 1).toString().padStart(2, "0") +
              "-" +
              selectedDate.current.date().toString().padStart(2, "0");
            const newEvent = {
              date: mydate,
              title: values.title,
              type: values.type,
            };
            setData([...data, newEvent]);
            const date =
              selectedDate.current.year() +
              "-" +
              (selectedDate.current.month() + 1).toString().padStart(2, "0") +
              "-" +
              selectedDate.current.date().toString().padStart(2, "0");
            setEvents(
              [...data, newEvent].filter((item) => {
                return item.date == date;
              })
            );
          }}
        >
          <Form.Item
            name="title"
            rules={[{ required: true, message: "required" }]}
          >
            <Input placeholder="event title"></Input>
          </Form.Item>
          <Form.Item
            name="type"
            rules={[{ required: true, message: "required" }]}
          >
            <Select placeholder="type" options={typeOptions}></Select>
          </Form.Item>
        </Form>
      </Modal>
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
      </Flex>
      <Flex justify="center" align="stretch" gap={12} className="calFlex">
        <Flex
          className="eventsList"
          vertical
          justify="start"
          align="stretch"
          gap={12}
        >
          <Flex
            className="fullW listHeader"
            justify="space-between"
            align="center"
          >
            <Typography.Title level={4} style={{ margin: 0 }}>
              Events
            </Typography.Title>
            <Button type="primary" onClick={() => setEvents(data)}>
              show all
            </Button>
          </Flex>
          {events.map((item, i) => (
            <Flex
              key={i}
              className="fullW event"
              justify="space-between"
              align="center"
            >
              <Flex vertical justify="center" align="start">
                <Typography.Text>{item.title}</Typography.Text>
                <Typography.Text>{item.date}</Typography.Text>
              </Flex>
              <CloseOutlined
                className="closeList"
                onClick={() => {
                  setData(data.filter((inner) => inner.title != item.title));
                  setEvents(
                    events.filter((inner) => inner.title != item.title)
                  );
                }}
              />
            </Flex>
          ))}
        </Flex>
        <Calendar
          className="cal"
          cellRender={cellRender}
          onChange={(item) => {
            if (mode == "month") {
              const date =
                item.year() +
                "-" +
                (item.month() + 1).toString().padStart(2, "0") +
                "-" +
                item.date().toString().padStart(2, "0");
              setEvents(
                data.filter((dataItem) => {
                  return dataItem.date == date;
                })
              );
            } else {
              const month = (item.month() + 1).toString().padStart(2, "0");
              const year = item.year();
              setEvents(
                data.filter((dataItem) => {
                  return (
                    dataItem.date.slice(5, 7) == month &&
                    dataItem.date.slice(0, 4) == year
                  );
                })
              );
            }
          }}
          mode={mode}
        />
      </Flex>
    </>
  );
}
