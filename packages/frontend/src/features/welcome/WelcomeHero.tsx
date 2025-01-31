import { useLocation } from 'react-router';

import { RESOURCES } from '~/features/welcome/consts';

export function WelcomeHero() {
  const { pathname } = useLocation();

  return (
    <section className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <h1 className="text-2xl font-bold text-center">{pathname}</h1>
        <div className="max-w-[500px] w-full space-y-6 px-4">
          <article className="rounded-3xl border border-zinc-200 p-6 dark:border-zinc-700 space-y-4">
            <p className="leading-6 text-xl font-medium text-zinc-500 text-center">Stack Resources:</p>
            <ul className="grid grid-cols-2 gap-4">
              {RESOURCES.map(({ href, text }) => (
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
          </article>
        </div>
      </div>
    </section>
  );
}
