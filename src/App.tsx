import {useState} from 'react'
import './App.scss'
import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Layout from "./components/layout/layout.tsx";
import UiTest from "./components/ui-test/ui-test.tsx";

const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children: [
        {
          path: "/",
          Component: UiTest,
        }
      ],
      // children: [
      //   {
      //     path: "/",
      //     Component: FilmList,
      //     children: [
      //       {
      //         path: "/:id",
      //         Component: FilmList,
      //       },
      //     ],
      //   },
      //   {
      //     path: "film/:id/:genre_id",
      //     Component: FilmInfo,
      //   },
      // ],
    },
  ],
  {
    basename: "/test-ui",
  },
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MantineProvider>
        <RouterProvider router={router}/>
      </MantineProvider>
    </>
  )
}

export default App
