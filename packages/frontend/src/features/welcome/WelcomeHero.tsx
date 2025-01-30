import { useLocation } from 'react-router';

export function WelcomeHero() {
  const { pathname } = useLocation();

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <h1 className="text-2xl font-bold text-center">{pathname}</h1>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">What&apos;s next?</p>
            <ul>
              {resources.map(({ href, text }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}

const resources = [
  {
    href: 'https://reactrouter.com/docs',
    text: 'React Router Docs'
  },
  {
    href: 'https://sst.dev/',
    text: 'SST Docs'
  },
  {
    href: 'https://tailwindcss.com/docs/installation/using-vite',
    text: 'TailwindCSS Docs'
  }
];
