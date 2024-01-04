import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "@/components/AppLayout/AppLayout";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";

import { antdTheme } from "@/configs/antdTheme";

import "@/configs/global.scss";
import GioiThieuPage from "./pages/GioiThieuPage/GioiThieuPage";
import HomePage from "./pages/Homepage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
      {
        path: "/gioi-thieu",
        element: <GioiThieuPage />,
      },
      // {
      //   path: "/linh-vuc-hoat-dong",
      //   element: <ActivePage />,
      // },
      // {
      //   path: "/linh-vuc-hoat-dong/thiet-ke",
      //   element: <ThietKeNew />,
      // },
      // {
      //   path: "/linh-vuc-hoat-dong/san-xuat",
      //   element: <SanXuatNew />,
      // },
      // {
      //   path: "/linh-vuc-hoat-dong/van-chuyen",
      //   element: <VanChuyenNew />,
      // },
      // {
      //   path: "/linh-vuc-hoat-dong/lap-dung",
      //   element: <LapDungNew />,
      // },
      // {
      //   path: "/du-an",
      //   element: <DuAnPage />,
      // },
      // {
      //   path: "/du-an/:value",
      //   element: <DuAnDetail />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={antdTheme}>
      <StyleProvider hashPriority="low">
        <RouterProvider router={router} />
      </StyleProvider>
    </ConfigProvider>
  </React.StrictMode>
);
