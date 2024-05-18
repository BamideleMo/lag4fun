import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { A } from "@solidjs/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "@solidjs/router";
import { createSignal, createEffect } from "solid-js";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Validation() {
  const navigate = useNavigate();
  createEffect(() => {
    if (!localStorage.getItem("LekkiRunsUser")) {
      navigate("/a/login", { replace: true });
    }
  });
  return (
    <MetaProvider>
      <Title>Validation - LekkiRuns.ng</Title>
      <Link rel="canonical" href="https://LekkiRuns.ng/" />
      <Meta
        name="description"
        content="Validate your WhatsApp number to complete account creation."
      />

      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-8">
          <h2 class="text-center roboto-bold">WhatsApp Number Validation</h2>
          <div class="my-2 w-80 mx-auto p-4 bg-gray-50 space-y-4 drop-shadow-lg text-sm rounded-lg border">
            <p>
              You'll receive a <b>validation link</b> in your WhatsApp:{" "}
              <b>
                {JSON.parse(localStorage.getItem("LekkiRunsUser")).username}
              </b>
              .
            </p>
            <p>
              If you've gotten the link please go and click on it for
              validation.
            </p>
            <p>
              If it's over 24 hours since you created your profile and you
              haven't gotten the link please{" "}
              <a
                href="#"
                class="text-red-600 hover:opacity-60 lowercase font-semibold"
              >
                Click here
              </a>
              .
            </p>
            <p>
              <b>Note:</b>
              <br />
              We require users to validate their WhatsApp numbers to avoid
              scammers & cheats.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default Validation;
