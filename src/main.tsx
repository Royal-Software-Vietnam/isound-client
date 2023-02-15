import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import UserModal from './components/UserModal'
import AppProvider from './context'

const User = React.lazy(() => import('./pages/User/User'))
const Home = React.lazy(() => import('./pages/Home/Home'))
const Layout = React.lazy(() => import('./components/Layout'))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback={null}>
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="test" element={<User />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppProvider>
  </Suspense>
)