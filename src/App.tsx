// import {useState} from 'react'
import "./App.scss";
import "@mantine/core/styles.css";
import {MantineProvider} from "@mantine/core";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
// import Layout from "./components/layout/layout.tsx";
import CorpLayout from "./components/corp-layout/corp-layout.tsx";
// import UiTest from "./components/ui-test/ui-test.tsx";
import CorpMain from "./components/corp-main/corp-main.tsx";
import ItemList from "./components/item-list/item-list.tsx";

const router = createBrowserRouter([
    // {
    //   path: "/",
    //   Component: Layout,
    //   children: [
    //     {
    //       path: "/",
    //       Component: UiTest,
    //     },
    //   ],
    // },
    {
      path: "/",
      Component: CorpLayout,
      children: [
        {
          path: "/",
          Component: CorpMain,
          children: [
            {
              path: "/:id",
              Component: ItemList,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: "/test-ui",
  },
);

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
