import { useEffect, useRef } from "react";
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
      encode: { y: "y", x: "x", color: "id" },
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
      axis: {
        x: {
          line: true,
          title: "country",
          titleFill: "#fff",
          lineStroke: "#fff",
          lineArrowSize: 10,
          tickStroke: "#fff",
          label: true,
          labelFill: "#fff",
        },
        y: {
          line: true,
          title: "food",
          titleFill: "#fff",
          lineStroke: "#fff",
          lineArrowSize: 10,
          tickStroke: "#fff",
          label: true,
          labelFill: "#fff",
          arrow: true,
          arrowSize: 15,
          grid: true,
          gridStroke: "#fff",
          gridLineWidth: 2,
          gridLineDash: 0,
          gridLineStrokeOpacity: 1,
          gridOpacity: 1,
          gridAreaFill: ["#000", "rgba(45, 48, 89,0.2)"],
        },
      },
      data: {
        type: "inline",
        value: data,
        transform: [
          {
            type: "custom",
            callback: (data) =>
              data.flatMap((item) =>
                item.data.map((inner) => ({ ...inner, id: item.id }))
              ),
          },
        ],
      },
      legend: {
        color: {
          itemLabelFill: "#fff",
          layout: {
            justifyContent: showTips ? "center" : "left",
          },
          length: 300,
          symbol: "square",
          symbolSize: 30,
        },
      },
      children: [
        {
          animate: {
            enter: {
              type: "waveIn",
              duration: 500,
              easing: "easeOutCubic",
              delay: (d, i) => i * 100,
            },
          },
          type: "line",
        },
        {
          animate: {
            enter: {
              type: "waveIn",
              duration: 500,
              easing: "easeOutCubic",
              delay: (d, i) => i * 100,
            },
          },
          type: "point",
          tooltip: false,
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
