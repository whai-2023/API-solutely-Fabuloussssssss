import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom'
  
  import LukeSkywalker from './components/LukeSkywalker'
  import DarthVader from './components/DarthVader'
  import ObiWan from './components/ObiWan'
  import Yoda from './components/Yoda'
  import Index from './components/Homepage'
  
  export const routes = createRoutesFromElements(
    <Route path='/'>
        
      <Route path="/" element={<Index />} />  
      <Route path="/luke_skywalker" element={<LukeSkywalker />} />
      <Route path="/darth_vader" element={<DarthVader />} />
      <Route path="/obi_wan" element={<ObiWan />} />
      <Route path="/yoda" element={<Yoda />} />
  
    </Route>
  )
  
  export const router = createBrowserRouter(routes)