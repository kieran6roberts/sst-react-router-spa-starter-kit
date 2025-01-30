import { Link } from 'react-router';

export function Navbar() {
  return (
    <div className="flex justify-between items-center px-4 py-6 bg-zinc-900 text-white">
      <h1>SST - Client RR</h1>
      <div className="flex gap-6">
        <Link to="/" viewTransition>
          Home
        </Link>
        <Link to="/create" viewTransition>
          Create
        </Link>
      </div>
    </div>
  );
}
