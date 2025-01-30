import { Outlet } from 'react-router';

import { Navbar } from '~/shared/layouts/Navbar';

export function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
