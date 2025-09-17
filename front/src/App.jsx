import { ConfigProvider, Layout, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import dashboard from "./pages/dashboard/dashboard";
import global from "./pages/global/global";
import Head from "./pages/global/nav";
import Sidbar from "./pages/global/sidbar";
import "./app.css";
import dashboardLoader from "./Loaders/dashboardLoader";

const { Header, Footer, Content } = Layout;

const myRouter = createBrowserRouter([
  {
    path: "",
    Component: global,
    children: [
      {
        index: true,
        Component: dashboard,
        loader: dashboardLoader
      },
    ],
  },
]);

function App() {
  const [dark, setDark] = useState(true);

  return (
    <ConfigProvider
      theme={{
        algorithm: dark ? [theme.darkAlgorithm] : [theme.defaultAlgorithm],
        token: {
          colorBgBase: dark ? "#101624" : "#fff",
          colorTextBase: dark ? "#fff" : "#000",
          // colorPrimary: "#00f"
        },
        components: {
          Layout: {
            headerBg: "transparent",
            siderBg: "#152448",
          },
        },
      }}
    >
      <Layout className="fullH">
        <Sider style={{ border: "1px solid red" }}>
          <Sidbar />
        </Sider>
        <Layout className="innerLayout">
          <Header className="noMP" style={{ border: "1px solid red" }}>
            <Head setDark={setDark} dark={dark} />
          </Header>
          <Content>
            <RouterProvider router={myRouter} />
          </Content>
          <Footer></Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
