import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { A } from "@solidjs/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate, useSearchParams } from "@solidjs/router";
import { createSignal, createEffect } from "solid-js";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function ValidationLink() {
  const [params, setParams] = useSearchParams();

  const navigate = useNavigate();
  createEffect(() => {
    if (!localStorage.getItem("LekkiRunsUser")) {
      navigate("/a/login", { replace: true });
    } else {
      patchProfile();
    }
  });

  const patchProfile = async () => {
    try {
      //Call API here:
      const response = await fetch(
        VITE_API_URL +
          "/api/edit-user/" +
          JSON.parse(localStorage.getItem("LekkiRunsUser")).custom_id,
        {
          mode: "cors",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("LekkiRunsUser")).token
            }`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          method: "PATCH",
          body: JSON.stringify({
            status: "complete profile",
          }),
        }
      );
      const result = await response.json();
      if (result.success) {
        navigate("/a/profile", { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <MetaProvider>
      <Title>Validation Link - LekkiRuns.ng</Title>
      <Link rel="canonical" href="https://LekkiRuns.ng/" />
      <Meta name="description" content="Followed validation link." />
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-8">
          <h2 class="text-center roboto-bold">Validating</h2>
          <div class="my-2 w-80 mx-auto p-4 bg-gray-50 space-y-4 drop-shadow-lg text-sm rounded-lg border">
            <p class="animate-pulse">
              Please wait while your account is being validated.. .
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default ValidationLink;
