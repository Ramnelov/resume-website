import { Component, createSignal } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import { FiMenu } from "solid-icons/fi";

export const Nav: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false);
  const location = useLocation();

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(!isOpen());
        }}
      >
        <FiMenu class="size-14 px-1 py-1 transition-colors duration-100 text-gray-400 hover:text-white" />
      </button>
      <nav
        class={`mt-16 text-3xl font-titillium backdrop-blur fixed border border-l-0 border-gray-300 border-opacity-20 flex flex-col items-start p-4 transition-transform duration-200 ${
          isOpen() ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transform: `translateX(${isOpen() ? "0%" : "-100%"})` }}
      >
        <A
          href="/"
          class={`transition-colors duration-100 my-2 font-semibold ${
            location.pathname === "/"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Home
        </A>
        <A
          href="/education"
          class={`transition-colors duration-100 my-2 font-semibold ${
            location.pathname === "/education"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Education
        </A>
        <A
          href="/experiences"
          class={`transition-colors duration-100 my-2 font-semibold ${
            location.pathname === "/experiences"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Experiences
        </A>
        <A
          href="/projects"
          class={`transition-colors duration-100 my-2 font-semibold ${
            location.pathname === "/projects"
              ? "text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Projects
        </A>
      </nav>
    </>
  );
};
