import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom'
  
  import LukeSkywalker from './components/LukeSkywalker'
  import Index from './components/Homepage'
  
  export const routes = createRoutesFromElements(
    <Route path='/'>
        
      <Route path="/" element={<Index />} />  
      <Route path="/luke_skywalker" element={<LukeSkywalker />} />
      {/* <Route path="/luke_skywalker/mail" element={<LukeSkywalker />} /> */}
  
    </Route>
  )
  
  export const router = createBrowserRouter(routes)