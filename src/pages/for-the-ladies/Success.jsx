import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { A, useNavigate } from "@solidjs/router";
import { createSignal, createEffect } from "solid-js";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SuccessIcon from "../../components/icons/Success";

function Success() {
  const navigate = useNavigate();

  createEffect(() => {
    if (!localStorage.getItem("LekkiRunsUser")) {
      navigate("/a/login", { replace: true });
    }
  });
  return (
    <MetaProvider>
      <Title>Success - LekkiRuns.ng</Title>
      <Link rel="canonical" href="https://LekkiRuns.ng/" />
      <Meta name="description" content="Account created successfully." />
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-8">
          <h2 class="text-center roboto-bold">Success</h2>
          <div class="my-2 w-80 mx-auto text-center p-4 bg-gray-50 space-y-4 drop-shadow-lg text-sm rounded-lg border">
            <p>
              <SuccessIcon />
            </p>
            <p>Action was successful.</p>
            <Show
              when={
                JSON.parse(localStorage.getItem("LekkiRunsUser")).role ===
                "lady"
              }
            >
              <div class="text-left border-t pt-2 space-y-2">
                <p>Congrats!</p>
                <p>
                  Your LekkiRuns profile is fully setup. You will start getting
                  WhatsApp chats from clients soon.
                </p>
                <p>Meanwhile...</p>
                <p>
                  <A
                    href="/a/tips"
                    class="text-red-600 hover:opacity-60 font-semibold"
                  >
                    Click here
                  </A>{" "}
                  for free tips on how to make more money, stay safe and stand
                  out.
                </p>
              </div>
            </Show>
          </div>
        </section>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default Success;
