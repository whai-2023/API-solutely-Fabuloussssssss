import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom'
  
  import LukeSkywalker from './components/LukeSkywalker'
  import DarthVader from './components/DarthVader'
  import ObiWan from './components/ObiWan'
  import Chewbacca from './components/Chewbacca'
  import Index from './components/Homepage'
  
  export const routes = createRoutesFromElements(
    <Route path='/'>
        
      <Route path="/" element={<Index />} />  
      <Route path="/luke_skywalker" element={<LukeSkywalker />} />
      <Route path="/darth_vader" element={<DarthVader />} />
      <Route path="/obi_wan" element={<ObiWan />} />
      <Route path="/chewbacca" element={<Chewbacca />} />
  
    </Route>
  )
  
  export const router = createBrowserRouter(routes)