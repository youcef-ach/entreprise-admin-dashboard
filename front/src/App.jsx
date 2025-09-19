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
import Team from "./pages/team/Team";
import teamLoader from "./Loaders/teamLoader";
import contactsLoader from "./Loaders/contactsLoader";
import invoicesLoader from "./Loaders/invoicesLoader";
import contacts from "./pages/contacts/contacts";
import invoices from "./pages/invoices/invoices";
import form from "./pages/nUserForm/form";
import calendar from "./pages/calendar/calendar";
import calendarLoader from "./Loaders/calendarLoader";

const { Header, Footer, Content } = Layout;

const myRouter = createBrowserRouter([
  {
    path: "",
    Component: global,
    children: [
      {
        index: true,
        Component: dashboard,
        loader: dashboardLoader,
      },
      {
        path: "team",
        Component: Team,
        loader: teamLoader,
      },
      {
        path: "contacts",
        Component: contacts,
        loader: contactsLoader,
      },
      {
        path: "invoices",
        Component: invoices,
        loader: invoicesLoader,
      },
      {
        path: "create_user",
        Component: form,
      },
      {
        path: "calendar",
        Component: calendar,
        loader: calendarLoader,
      },
    ],
  },
]);

function App() {
  const [dark, setDark] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider
      theme={{
        algorithm: [theme.darkAlgorithm],
        token: {
          colorTextBase: "#fff",
          colorPrimary: "#6870fa",
          colorSuccess: "#4cceac",
        },
        components: {
          Layout: {
            headerBg: "transparent",
            siderBg: "transparent",
          },
          Table: {
            headerBg: "#6870fa",
            footerBg: "#6870fa",
            headerSplitColor: "transparent",
            headerSortHoverBg: "#2d3059",
            headerSortActiveBg: "#2d3059",
          },
        },
      }}
    >
      <Layout>
        <Sider
          onCollapse={() => setCollapsed(!collapsed)}
          width={220}
          className="sider"
          collapsible={true}
        >
          <Sidbar collapsed={collapsed} />
        </Sider>
        <Layout className="innerLayout">
          <Header className="noMP">
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
