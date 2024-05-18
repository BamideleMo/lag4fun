import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { A } from "@solidjs/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "@solidjs/router";
import { createSignal, createEffect } from "solid-js";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function LoginToValidate() {
  const navigate = useNavigate();

  return (
    <MetaProvider>
      <Title>Login to Validate - LekkiRuns.ng</Title>
      <Link rel="canonical" href="https://LekkiRuns.ng/" />
      <Meta
        name="description"
        content="Login to validate your WhatsApp number to complete account creation."
      />

      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-8">
          <h2 class="text-center roboto-bold">Login to Validate</h2>
          <div class="my-2 w-80 mx-auto p-4 bg-gray-50 space-y-4 drop-shadow-lg text-sm rounded-lg border">
            <p>
              First of all log in then go & click on the WhatsApp link for
              validation.
            </p>
            <p>
              <A
                href="/a/login"
                class="text-red-600 hover:opacity-60 font-semibold"
              >
                Click here to login
              </A>
              .
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default LoginToValidate;
