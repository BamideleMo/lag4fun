import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { A, useNavigate } from "@solidjs/router";
import { createSignal, createEffect } from "solid-js";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Created() {
  const navigate = useNavigate();

  createEffect(() => {
    if (localStorage.getItem("LekkiRunsUser")) {
      navigate("/a/dashboard", { replace: true });
    }
  });
  return (
    <MetaProvider>
      <Title>Created - LekkiRuns.ng</Title>
      <Link rel="canonical" href="https://LekkiRuns.ng/" />
      <Meta name="description" content="Account created successfully." />
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-8">
          <h2 class="text-center roboto-bold">Account Created</h2>
          <div class="my-2 w-80 mx-auto p-4 bg-gray-50 space-y-4 drop-shadow-lg text-sm rounded-lg border">
            <p>Your account was successfully created. </p>
            <p>
              <A
                href="/a/login"
                class="text-red-600 hover:underline font-semibold"
              >
                Click HERE to log in
              </A>{" "}
              now to see/complete your profile.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default Created;
