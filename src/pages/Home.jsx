import CardPlaces from "../components/CardPlaces";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { createSignal } from "solid-js";
import { Select } from "../components/Select";
import { createStore } from "solid-js/store";
import { createResource } from "solid-js";

import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import Loading from "../components/Loading";
import { A, useNavigate, useParams, useSearchParams } from "@solidjs/router";

const schema = z.object({
  orientation: z.string().min(1, "*Invalid"),
  built: z.string().min(1, "*Invalid"),
});

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = createSignal(false);
  const [isProcessing, setIsProcessing] = createSignal(false);
  const [countLadies, setCountLadies] = createSignal();
  const [orientation, setOrientation] = createSignal("all");
  const [build, setBuild] = createSignal("any");
  const [isSorting, setIsSorting] = createSignal(false);

  const [ladiesData, setLadiesData] = createStore([]);

  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const showFilter = () => {
    setFilter(true);
  };

  const submit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    setIsSorting(true);

    setOrientation(formData().orientation);
    setBuild(formData().built);

    fetchLadies();
    setIsProcessing(false);
    setFilter(false);

    setTimeout(myGreeting, 2000);
  };

  function myGreeting() {
    setIsSorting(false);
  }

  const VITE_API_URL = import.meta.env["VITE_API_URL"];

  const fetchLadies = async () => {
    const response = await fetch(
      VITE_API_URL +
        "/list/view-ladies?orientation=" +
        orientation() +
        "&build=" +
        build(),
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    );
    const result = await response.json();
    setCountLadies(result.response.length);
    setLadiesData(result.response);

    return {
      ladiesData,
    };
  };

  const [data] = createResource(fetchLadies);
  return (
    <>
      <Show when={filter()}>
        <div class="z-50 fixed bg-slate-900 bg-opacity-90 top-0 bottom-0 left-0 right-0 w-screen h-screen flex items-center">
          <div class="bg-white border shadow-lg w-64 mx-auto rounded-lg text-sm">
            <h2 class="flex justify-between py-2 px-4 border-b text-gray-400">
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
                className="w-6 h-6 text-red-600 hover:opacity-60 cursor-pointer -mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </h2>
            <div class="p-4 space-y-5 flex flex-col">
              <form
                autocomplete="off"
                onSubmit={submit}
                class="space-y-4 drop-shadow-lg text-sm"
              >
                <div>
                  <Select
                    label="Sexual Orientation:"
                    name="orientation"
                    required={true}
                    options={[
                      { value: " ", label: "Select" },
                      { value: "all", label: "All" },
                      {
                        value: "straight",
                        label: "Straight",
                      },
                      {
                        value: "bisexual",
                        label: "Bisexual",
                      },
                      { value: "lesbian", label: "Lesbian" },
                    ]}
                    formHandler={formHandler}
                  />
                </div>
                <div>
                  <Select
                    label="Body Type:"
                    name="built"
                    required={true}
                    options={[
                      { value: " ", label: "Select" },
                      { value: "any", label: "Any" },
                      { value: "chubby", label: "Chubby Body" },
                      { value: "curvy", label: "Curvy Body" },
                      { value: "muscular", label: "Muscular Body" },
                      { value: "elegant", label: "Elegant Body" },
                      { value: "slim", label: "Slim Body" },
                      { value: "petite", label: "Petite Body" },
                    ]}
                    formHandler={formHandler}
                  />
                </div>
                <div>
                  <Show
                    when={formHandler.isFormInvalid()}
                    fallback={
                      <>
                        <Show
                          when={isProcessing()}
                          fallback={
                            <button
                              type="submit"
                              class="bg-slate-900 text-white w-full p-3 rounded-lg hover:opacity-60"
                            >
                              Go
                            </button>
                          }
                        >
                          <button
                            disabled
                            class="animate-pulse opacity-60 bg-slate-900 text-white w-full p-3 rounded-lg"
                          >
                            Wait.. .
                          </button>
                        </Show>
                      </>
                    }
                  >
                    <button
                      disabled
                      class="cursor-not-allowed opacity-60 bg-slate-900 text-white w-full p-3 rounded-lg"
                    >
                      Go
                    </button>
                  </Show>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Show>
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-6 mb-6">
          <h2
            class="roboto-bold w-full md:w-9/12 lg:w-8/12 mx-auto text-center drop-shadow-lg 
          leading-tight text-2xl sm:text-4xl lg:text-4xl"
          >
            A Simple List of Ladies in{" "}
            <span class="border-b-2 border-blue-600">Lekki</span>{" "}
            <span class="border-b-2 border-fuchsia-600">
              Available to Mingle
            </span>
            .
          </h2>
        </section>
        <div class="pt-8 text-sm lg:text-base drop-shadow-lg mx-auto space-y-4">
          <Show
            fallback={
              <>
                <div class="flex space-x-2">
                  <div
                    onClick={() => {
                      showFilter();
                    }}
                    class="cursor-pointer hover:opacity-60 bg-fuchsia-100 border border-fuchsia-600 
              rounded-lg py-1 px-4 flex items-center font-bold"
                  >
                    <div class="h-fit w-fit mx-auto">
                      <span class="block text-xs text-center">Filter</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mx-auto"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="text-gray-600 leading-tight md:pt-2 text-sm">
                    <span class="text-gray-400">Showing:</span>
                    <br />
                    <b class="capitalize">
                      {countLadies()}{" "}
                      {orientation() === "all" ? "" : orientation()}
                    </b>{" "}
                    <b class="capitalize">
                      {build() === "any" ? "" : "& " + build()}
                    </b>{" "}
                    {orientation() !== "all" && countLadies() === 1
                      ? "Lady"
                      : "Ladies"}{" "}
                    in <b class="capitalize">Lekki</b>. Just tap on profile for
                    direct WhatsApp chat.
                  </div>
                </div>
                <Show
                  when={countLadies() === 0}
                  fallback={
                    <div class="space-y-4 drop-shadow-lg">
                      <For each={data().ladiesData}>
                        {(lady, i) => (
                          <a
                            href={
                              "https://wa.me/" +
                              lady.username +
                              "?text=Hi%20" +
                              lady.nickname +
                              ".%20Found%20your%20contact%20on%20LekkiRuns.com"
                            }
                            class="lady cursor-pointer block p-2 border border-slate-600 
                          rounded-md bg-white hover:bg-blue-50"
                          >
                            <div class="flex justify-between border-b pb-1 mb-2">
                              <div class="roboto-bold text-blue-600">
                                {lady.nickname}
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-5 h-5 text-red-600"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div
                              class="text-slate-600 leading-tight"
                              innerHTML={lady.bio}
                            ></div>
                          </a>
                        )}
                      </For>
                    </div>
                  }
                >
                  <div class="block p-2 border border-black rounded-lg bg-yellow-50">
                    <b>Oops!</b>
                    <br />
                    No result found. Try other filter options.
                  </div>
                </Show>
              </>
            }
            when={data.loading || isSorting()}
          >
            <Loading />
          </Show>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
