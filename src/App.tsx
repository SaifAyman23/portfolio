import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import MainLayout from './MainLayout'

import { SeoUpdater } from '@/components/SeoUpdater'
import { ROUTES } from '@/lib/constants'

const Home = lazy(() => import('@/pages/Home'))

function App() {
  return (
    <Router basename="/portfolio">
      <SeoUpdater />
      <Suspense fallback={null}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path={ROUTES.HOME} element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
