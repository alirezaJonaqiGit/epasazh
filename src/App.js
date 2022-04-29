// styles
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.css';

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import Product from './pages/product';

// Create rtl cache
const RTL = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});


function App() {

  return ( 
    <>
      <CacheProvider value={RTL}>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </BrowserRouter>
      </CacheProvider>
    </>
  );
}

export default App;

