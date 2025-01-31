import { Link } from 'react-router';

export function Navbar() {
  return (
    <div className="flex justify-between items-center px-12 py-6 text-zinc-900 border-b border-zinc-100">
      <Link to="/">
        <h1>sst-react-router-spa-starter-kit</h1>
      </Link>
      <div className="flex gap-6">
        <Link to="/create">Create</Link>
      </div>
    </div>
  );
}
