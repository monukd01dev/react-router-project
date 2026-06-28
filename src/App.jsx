import Nav from './components/Nav';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { Routes, Route } from 'react-router';

function App() {

  return (
    <>
      <div className="app-wrapper overflow-x-hidden h-screen min-w-dvw bg-[#030712] text-white">
        <div className="app-container max-w-300 mx-auto w-full min-h-full">
          {/* ye hamesa uper he rahega */}
          <Nav />
          {/* yaha mai apne routes ke configuration likhunga */}
          <main className='min-h-[calc(100vh-64px)] px-2'>

            <Routes>
              <Route index element={<Home />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
