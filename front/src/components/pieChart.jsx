import { Children, useEffect, useRef } from "react";
import { Chart } from "@antv/g2";
import { Badge, List, Typography } from "antd";

const { Text, Title } = Typography;

const tips = [
  "hover on the bars to see extra informations",
  "click on legend items to hide/show it",
];

function pieChart({ data, showTips }) {
  const container = useRef(null);
  const chart = useRef(null);

  useEffect(() => {
    const myChart = new Chart({
      container: container.current,
      autoFit: true,
    });
    chart.current = myChart;

    myChart.options({
      type: "view",
      title: showTips
        ? {
            title: "CHART TITLE",
            subtitle: "subtitle",
            align: "center",
            titleFill: "#fff",
            subtitleFill: "#fff",
          }
        : {
            title: "Revenue Generated",
            subtitle: "$59,342,.32",
            align: "start",
            titleFill: "#fff",
            subtitleFill: "#4cceac",
            titleFontSize: 16,
            subtitleFontSize: 20,
            subtitleFontWeight: "bold",
          },
      data: {
        type: "inline",
        value: data,
      },
      encode: { y: "value", color: "label" },
      children: [
        {
          coordinate: { type: "theta", outerRadius: 0.95, innerRadius: 0.5 },
          transform: [{ type: "stackY" }],
          animate: {
            enter: {
              type: "waveIn",
              duration: 500,
              easing: "easeOutCubic",
              delay: (d, i) => i * 100, // delay each item for wave effect
            },
          },
          type: "interval",
          labels: [
            {
              position: "inside",
              text: (data) => `${data.label}: ${data.value}`,
              fill: "#fff",
              connectorStroke: "#fff",
            },
            {
              position: "outside",
              text: (data) => `${data.label}: ${data.value}`,
              fill: "#fff",
              connectorStroke: "#fff",
            },
          ],
          style: {
            inset: 1,
            radius: 5,
          },
          scale: {
            color: {
              range: [
                "#6870fa", // Primary blue - vivid but not neon
                "#4cceac", // Success green - fresh and bright
                "#f6a72a", // Warm amber/orange for contrast
                "#e05263", // Muted but punchy coral red
                "#8a7bf9", // Softer purple, complement to primary
                "#33bb7a", // Slightly darker green for depth
              ],
            },
          },
          legend: {
            color: {
              itemLabelFill: "#fff",
              layout: {
                justifyContent: "center",
              },
              length: 300,
            },
          },
          axis: false,
        },
        {
          type: "text",
          style: {
            text: "Pie Chart",
            x: "50%",
            y: "50%",
            dy: 0,
            fontSize: showTips ? 34 : 24,
            fill: "#8c8c8c",
            textAlign: "center",
          },
        },
      ],
    });

    myChart.render();
  }, []);

  return (
    <div className="fullH" ref={container}>
      {showTips ? (
        <div className="tips">
          <List
            header={<Title style={{ margin: 0 }}>Tips</Title>}
            dataSource={tips}
            renderItem={(item) => (
              <List.Item>
                <Badge status="success" text={<Text>{item}</Text>} />
              </List.Item>
            )}
          />
        </div>
      ) : null}
    </div>
  );
}

export default pieChart;
