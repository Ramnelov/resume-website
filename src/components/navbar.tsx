import { Component } from "solid-js";

export const Navbar: Component = () => {
  return (
    <nav class="bg-blue-500 p-2 mt-0 w-full">
      <div class="container mx-auto flex flex-wrap items-center">
        <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <a
            href="/"
            class="text-white no-underline hover:text-white hover:no-underline"
          >
            Logo
          </a>
        </div>
        <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
          <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li>
              <a
                href="/test"
                class="inline-block py-2 px-4 text-white no-underline"
              >
                Test
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
