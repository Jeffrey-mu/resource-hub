import { cn } from "@nextui-org/react";

export default ({ rotate = false }: { rotate: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.5em"
    viewBox="0 0 24 24"
    className={cn(`${rotate ? "rotate-180" : ""}`)}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m7 10l5 5l5-5"
    />
  </svg>
);
