
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Dashboard,Error,Landing,Register} from './pages'
import {AppProvider} from './context/appContext'


function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Dashboard/>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<Error/>} />
        
      </Routes>
    </BrowserRouter>
  )
}
///Test cái
export default App;
