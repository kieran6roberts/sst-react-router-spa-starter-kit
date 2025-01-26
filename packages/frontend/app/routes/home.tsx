import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Title" },
    { name: "description", content: "Description" },
  ];
}

export default function Home() {
  return <Welcome />;
}
