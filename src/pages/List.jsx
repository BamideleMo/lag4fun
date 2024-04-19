import { A, useNavigate, useParams, useSearchParams } from "@solidjs/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { Select } from "../components/Select";

import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";

const schema = z.object({
  available: z.string().min(1, "*Invalid"),
  sort: z.string().min(1, "*Invalid"),
});

function List(params) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = createSignal(false);

  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const showFilter = () => {
    setFilter(true);
  };
  return (
    <>
      <Show when={filter()}>
        <div class="z-50 fixed bg-slate-900 bg-opacity-90 top-0 bottom-0 left-0 right-0 w-screen h-screen flex items-center">
          <div class="bg-white border shadow-lg w-64 mx-auto rounded-lg text-sm">
            <h2 class="flex justify-between py-2 px-4 border-b">
              <span>Filter List</span>
              <svg
                onClick={() => {
                  setFilter(false);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-600 hover:opacity-60 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </h2>
            <div class="p-4 space-y-5 flex flex-col">
              <form class="space-y-4 drop-shadow-lg text-sm">
                <div>
                  <Select
                    label="Sort by:"
                    name="sort"
                    required={true}
                    options={[
                      { value: " ", label: "Select" },
                      { value: "last seen", label: "Last Seen" },
                      {
                        value: "recent profile",
                        label: "Most Recent Profile",
                      },
                      { value: "descending", label: "Alphabetically (A-Z)" },
                      { value: "descending", label: "Alphabetically (Z-A)" },
                      { value: "random", label: "Random Selection" },
                    ]}
                    formHandler={formHandler}
                  />
                </div>
                <div>
                  <button class="bg-slate-900 text-white w-full p-3 rounded-lg hover:opacity-60">
                    Go
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Show>
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="py-8  text-sm lg:text-lg">
          <div class="drop-shadow-lg lg:w-10/12 mx-auto space-y-4">
            <div class="flex justify-between space-x-4">
              <div class="text-gray-600 leading-tight lg:pt-1">
                Showing ladies in <b class="capitalize">{searchParams.w}</b>{" "}
                Sorted by <b>Most Recent Profile</b>. Just click/tap to start
                chatting on WhatsApp.
              </div>
              <div class="w-12">
                <svg
                  onClick={() => {
                    showFilter();
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="cursor-pointer w-12 h-12 text-red-600 hover:opacity-60 float-right -mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
            </div>
            <a
              href="#"
              class="block p-2 border border-black rounded-lg bg-white hover:bg-fuchsia-100"
            >
              <div class="flex justify-between">
                <div class="roboto-bold text-blue-600">Becky</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-orange-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                I offer full pressure, am curvy blessed with big breast and big
                ass. If you are looking for someone to satisfy you, look No more
                am here for you. Am also a squirting queen. And I love good sex
                a lot.
              </div>
            </a>
            <a
              href="#"
              class="block p-2 border border-black rounded-lg bg-white hover:bg-fuchsia-100"
            >
              <div class="flex justify-between">
                <div class="roboto-bold text-blue-600">SilverBabe</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-purple-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                Am naughty and spoilt,ready to spoil a NIGGA with my juicy wet
                pussy,DM me for your sex video calls and hookup.
              </div>
            </a>
            <a
              href="#"
              class="block p-2 border border-black rounded-lg bg-white hover:bg-fuchsia-100"
            >
              <div class="flex justify-between">
                <div class="roboto-bold text-blue-600">Fatima</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                I'm real, sexy and beautiful. I'm fun to be with. Just a trial.
                I'm here for serious hookup.
              </div>
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default List;
