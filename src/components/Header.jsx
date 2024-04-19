import { A } from "@solidjs/router";
import { Match, Switch, createSignal } from "solid-js";
import TextInput from "../components/TextInput";

import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import TextArea from "../components/TextArea";
import { Select } from "../components/Select";

import logo from "../assets/lagruns.webp";

const schema = z.object({
  username: z.string().length(11, "*Invalid"),
  nickname: z.string().min(2, "*Invalid"),
  bio: z.string().max(110, "*Invalid"),
});

function Header() {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;
  const [form, setForm] = createSignal(false);
  const [whichForm, setWhichForm] = createSignal("login");

  const showForm = () => {
    setForm(true);
  };
  return (
    <>
      <Show when={form()}>
        <div class="z-50 fixed bg-slate-900 bg-opacity-90 top-0 bottom-0 left-0 right-0 w-screen h-screen flex items-center">
          <div class="bg-white border shadow-lg w-64 mx-auto rounded-lg text-sm">
            <h2 class="flex justify-between p-4 border-b text-gray-400">
              <span class="">For the Ladies</span>
              <svg
                onClick={() => {
                  setForm(false);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 -mt-0.5 text-red-600 hover:opacity-60 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </h2>
            <div class="p-4 space-y-4 flex flex-col">
              <div class="space-y-2">
                <A
                  href="/a/get-code"
                  class="flex border border-gray-200 p-3 bg-gray-100 justify-between rounded-lg hover:opacity-60"
                >
                  <span>Get My LagRuns Code</span>
                  <span class="text-2xl leading-none -mt-0.5">🍷</span>
                </A>
              </div>
              <div class="space-y-2 border-y border-fuchsia-400 py-4">
                <A
                  href="/a/post"
                  class="flex border border-gray-200 p-3 bg-gray-100 justify-between rounded-lg hover:opacity-60"
                >
                  <span>Post My Profile</span>
                  <span class="text-2xl leading-none -mt-0.5">😍</span>
                </A>
                <A
                  href="/a/edit"
                  class="flex border border-gray-200 p-3 bg-gray-100 justify-between rounded-lg hover:opacity-60"
                >
                  <span>Edit My Profile</span>
                  <span class="text-2xl leading-none -mt-0.5">🥰</span>
                </A>
                <A
                  href="/a/remove"
                  class="flex border border-gray-200 p-3 bg-gray-100 justify-between rounded-lg hover:opacity-60"
                >
                  <span>Remove My Profile</span>
                  <span class="text-2xl leading-none -mt-0.5">😡</span>
                </A>
              </div>
              <div>
                <A
                  href="/a/boost"
                  class="flex border border-gray-200 p-3 bg-gray-100 justify-between rounded-lg hover:opacity-60"
                >
                  <span>Boost My Profile</span>
                  <span class="text-2xl leading-none -mt-0.5">🚀</span>
                </A>
              </div>
            </div>
          </div>
        </div>
      </Show>
      <header class="border-b flex justify-between pb-2">
        <A href="/" class="text-3xl w-10">
          <img src={logo} class="w-full inline -mt-2" />
        </A>
        <div class="space-x-8 text-sm pt-2">
          <A href="/faqs">FAQs</A>
          <span
            onClick={() => {
              showForm();
            }}
            class="cursor-pointer bg-fuchsia-600 text-white p-2 rounded-lg hover:opacity-60"
          >
            For the Ladies
          </span>
        </div>
      </header>
    </>
  );
}

export default Header;
