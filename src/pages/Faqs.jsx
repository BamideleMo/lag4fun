import { A } from "@solidjs/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextInput from "../components/TextInput";

import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import { createSignal } from "solid-js";

const schema = z.object({
  username: z.string().length(11, "*Invalid"),
  code: z.string().length(4, "*Invalid"),
});

function Faqs() {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const [faq1, setFaq1] = createSignal(false);
  const [faq2, setFaq2] = createSignal(false);
  const [faq3, setFaq3] = createSignal(false);
  const [faq4, setFaq4] = createSignal(false);
  const [faq5, setFaq5] = createSignal(false);

  const submit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    const now = new Date();
  };
  return (
    <>
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-8 sm:w-7/12 lg:w-6/12 mx-auto">
          <h2 class="text-center roboto-bold">FAQs</h2>
          <div class="mt-1 space-y-6">
            <div class="bg-gray-100 border border-gray-200 p-4 rounded-lg">
              <div
                onClick={() => {
                  setFaq1(!faq1());
                }}
                class="cursor-pointer hover:opacity-60 flex justify-between text-blue-900 roboto-bold"
              >
                <div class="">What is LekkiRuns?</div>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              <Show when={faq1()}>
                <div class="border-t border-blue-900 py-2 mt-2">y</div>
              </Show>
            </div>
            <div class="bg-gray-100 border border-gray-200 p-4 rounded-lg">
              <div
                onClick={() => {
                  setFaq2(!faq2());
                }}
                class="cursor-pointer hover:opacity-60 flex justify-between text-blue-900 roboto-bold"
              >
                <div class="">How does LekkiRuns work?</div>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              <Show when={faq2()}>
                <div class="border-t border-blue-900 py-2 mt-2">x</div>
              </Show>
            </div>
            <div class="bg-gray-100 border border-gray-200 p-4 rounded-lg">
              <div
                onClick={() => {
                  setFaq3(!faq3());
                }}
                class="cursor-pointer hover:opacity-60 flex justify-between text-blue-900 roboto-bold"
              >
                <div class="">Who are the ladies listed on LekkiRuns?</div>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              <Show when={faq3()}>
                <div class="border-t border-blue-900 py-2 mt-2">x</div>
              </Show>
            </div>
            <div class="bg-gray-100 border border-gray-200 p-4 rounded-lg">
              <div
                onClick={() => {
                  setFaq4(!faq4());
                }}
                class="cursor-pointer hover:opacity-60 flex justify-between text-blue-900 roboto-bold"
              >
                <div class="">Why no pictures of listed Ladies?</div>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              <Show when={faq4()}>
                <div class="border-t border-blue-900 py-2 mt-2">x</div>
              </Show>
            </div>
            <div class="bg-gray-100 border border-gray-200 p-4 rounded-lg">
              <div
                onClick={() => {
                  setFaq5(!faq5());
                }}
                class="cursor-pointer hover:opacity-60 flex justify-between text-blue-900 roboto-bold"
              >
                <div class="">Is LekkiRuns safe?</div>
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              <Show when={faq5()}>
                <div class="border-t border-blue-900 py-2 mt-2">x</div>
              </Show>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Faqs;
