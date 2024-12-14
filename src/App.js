import Prenav from "./components/Prenav";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "./components/User";
import Page from "./components/Page";
import Image from "./components/Image";
import SectionWrapper from "./components/common/SectionWrapper";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    { path: "/", element: <Page /> },
    {
      path: "/",
      element: <Image />,
    },
  ]);
  return (
    <>
    <SectionWrapper>
      <Prenav />
    </SectionWrapper>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
