import { MetaProvider, Title, Meta } from "@solidjs/meta";
import { A } from "@solidjs/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { createSignal } from "solid-js";

function Tips() {
  const [tip1, setTip1] = createSignal(false);
  const [tip2, setTip2] = createSignal(false);
  const [tip3, setTip3] = createSignal(false);
  const [faq4, setFaq4] = createSignal(false);
  return (
    <MetaProvider>
      <Title>Tips - LekkiRuns</Title>
      <Meta
        name="description"
        content="Tips to help ladies becomoe more classy, professional and likeable!"
      />
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-8 sm:w-7/12 lg:w-6/12 mx-auto">
          <h2 class="text-center roboto-bold">Quick Tips</h2>
          <div class="mt-1 space-y-4">
            <div class="bg-gray-100 border border-gray-200 p-4 rounded-lg">
              <div
                onClick={() => {
                  setTip1(!tip1());
                }}
                class="cursor-pointer hover:opacity-60 flex justify-between text-blue-900 roboto-bold"
              >
                <div class="">How to write the best LekkiRuns Bio</div>
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
              <Show when={tip1()}>
                <div class="border-t border-blue-900 py-2 mt-2">y</div>
              </Show>
            </div>
            <div class="bg-gray-100 border border-gray-200 p-4 rounded-lg">
              <div
                onClick={() => {
                  setTip2(!tip2());
                }}
                class="cursor-pointer hover:opacity-60 flex justify-between text-blue-900 roboto-bold"
              >
                <div class="">Safety Tips for the Classy Babe</div>
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
              <Show when={tip2()}>
                <div class="border-t border-blue-900 py-2 mt-2">f</div>
              </Show>
            </div>
            <div class="bg-gray-100 border border-gray-200 p-4 rounded-lg">
              <div
                onClick={() => {
                  setTip3(!tip3());
                }}
                class="cursor-pointer hover:opacity-60 flex justify-between text-blue-900 roboto-bold"
              >
                <div class="">How LekkiRuns + WhatsApp = The Best</div>
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
              <Show when={tip3()}>
                <div class="border-t border-blue-900 py-2 mt-2">f</div>
              </Show>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default Tips;
