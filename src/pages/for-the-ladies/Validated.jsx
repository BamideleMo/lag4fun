import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { A, useNavigate } from "@solidjs/router";
import { createSignal, createEffect } from "solid-js";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SuccessIcon from "../../components/icons/Success";

function Validated() {
  const navigate = useNavigate();

  createEffect(() => {
    if (!localStorage.getItem("LekkiRunsUser")) {
      navigate("/a/login", { replace: true });
    }
  });
  return (
    <MetaProvider>
      <Title>Validated - LekkiRuns.ng</Title>
      <Link rel="canonical" href="https://LekkiRuns.ng/" />
      <Meta name="description" content="Account created successfully." />
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-8">
          <h2 class="text-center roboto-bold">Validated</h2>
          <div class="my-2 w-80 mx-auto text-center p-4 bg-gray-50 space-y-4 drop-shadow-lg text-sm rounded-lg border">
            <p>
              <SuccessIcon />
            </p>
            <p>Validation was successful.</p>
            <div class="text-left border-t pt-2 space-y-2">
              <p>Thanks for validating your WhatsApp Number.</p>
              <p>Next...</p>
              <p>
                <A
                  href="/a/profile"
                  class="text-red-600 hover:opacity-60 font-semibold"
                >
                  Click here to post a sexy & catchy bio to attract the kind of
                  men you want
                </A>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default Validated;
