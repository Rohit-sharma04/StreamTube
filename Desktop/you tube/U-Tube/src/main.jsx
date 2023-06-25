import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { route } from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import HomeShimmer from './Shimmers/HomeShimmer.jsx'
import SearchShimmer from './Shimmers/SearchShimmer.jsx'
import PlaylistShimmer from './Shimmers/PlaylistShimmer.jsx'
import ChannelShimmer from './Shimmers/ChannelShimmer.jsx'
// import { RouterProvider } from 'react-router-dom'
// import { route } from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={route}/>)

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  {/* <SearchShimmer/> */}
  {/* // <React.StrictMode> */}
  {/* <PlaylistShimmer/> */}
  {/* <ChannelShimmer/> */}
    <RouterProvider router={route}/>
      {/* <App />
    </RouterProvider> */}
  {/* // </React.StrictMode>, */}
  </>
)
