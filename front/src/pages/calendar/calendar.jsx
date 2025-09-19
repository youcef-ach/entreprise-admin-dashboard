import { Badge, Calendar, Flex, Button, Typography, Empty } from "antd";
import { useLoaderData } from "react-router-dom";
import "./calendar.css";
import { useEffect, useRef, useState } from "react";

export default function calendar() {
  const data = useLoaderData();
  const [mode, setMode] = useState("month");

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
                status="success"
                text={item.title}
              />
            ))}
          </Flex>
        </div>
      );
  };

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
      </Flex>
      <Flex justify="center" align="stretch" gap={12} className="calFlex">
        <Flex
          className="eventsList"
          vertical
          justify="start"
          align="stretch"
          gap={12}
        >
          <Flex className="fullW" justify="space-between" align="center">
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
              vertical
              justify="center"
              align="start"
              className="event"
            >
              <Typography.Text>{item.title}</Typography.Text>
              <Typography.Text>{item.date}</Typography.Text>
            </Flex>
          )) || <Empty />}
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
