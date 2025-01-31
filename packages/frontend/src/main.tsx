import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import Home from '~/routes/home';
import Create from '~/routes/create';
import NotFound from '~/routes/not-found';
import { Layout } from '~/shared/layouts/Layout';
import '~/styles/app.css';

// @ts-expect-error - Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Container'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
