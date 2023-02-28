import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import UserModal from './components/UserModal'
import AppProvider from './context'
import { Player } from './components/Theme'

const User = React.lazy(() => import('./pages/User/User'))
const Home = React.lazy(() => import('./pages/Home/Home'))
const Layout = React.lazy(() => import('./components/Layout'))
const Search = React.lazy(() => import('./pages/Search'))

console.log(`BUILD :: 02-24-2023`)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback={null}>
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="user" element={<User />} />
            <Route path="search" element={<Search />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <Player />
    </AppProvider>
  </Suspense>
)