import Head from "./components/Head"
import Body from "./components/Body"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import ErrorPage from "./components/ErrorPage"
import Watch from "./components/Watch"
import Maincontent from "./components/Maincontent"
import { Provider } from "react-redux"
import store from "./utils/store"
import SearchResult from "./components/SearchResult"
import ChannelPage from "./components/ChannelPage"

import PlaylistPage from "./components/PlayListPage"
// import Sidebar from "./components/Sidebar"

function App() {

  return (
    <>
      <Provider store={store}>
        <Head />
        {/* <RouterProvider  router={route}/> */}
        {/* <Body/> */}
        <Outlet />
      </Provider>
    </>
  )
}

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <Maincontent />,
          },
          {
            path: "watch/v/:id",
            element: <Watch />,
          },
          {
            path:"result/:searchQuery",
            element:<SearchResult/>,
          },
          {
            path:"channel/:channelId",
            element:<ChannelPage/>,
          },
          {
            path:"playlist/:playlistId",
            element:<PlaylistPage/>,
          }
        ]
      }

    ]
  }
])

// function App() {

//   return (
//     <>
//     <Provider store={store}>
//      <Head/>
//      <RouterProvider  router={route}/>
//      {/* <Body/> */}
//      </Provider>
//     </>
//   )
// }


// export const route=createBrowserRouter([
//   {
//     path:"/",
//     element: <Body/>,
//     errorElement:<ErrorPage/>,

//     children:[
//       { path:"/",
//         element:<Maincontent/>,
//       },
//       { path:"watch/:id",
//       element:<Watch/>,
//       }
//     ]
//   }
// ])

console.log(route)


// export {route}


export default App
