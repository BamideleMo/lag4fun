import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { A } from "@solidjs/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextInput from "../components/TextInput";
import { Select } from "../components/Select";
import TextArea from "../components/TextArea";
import { createSignal } from "solid-js";

import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import { useNavigate } from "@solidjs/router";

const schema = z.object({
  phone: z.string().length(11, "*Invalid"),
  username: z.string().length(11, "*Invalid"),
  reason: z.string().min(1, "*Invalid"),
  details: z.string().min(1, "*Invalid").max(600, "*Invalid"),
});

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Report() {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;
  const now = new Date();

  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = createSignal(false);
  const [message, setMessage] = createSignal("");
  const [data, setData] = createSignal("");

  const submit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    try {
      //Call API here:
      const response = await fetch(VITE_API_URL + "/auth/login", {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          username: formData().username,
          reason: formData().reason,
          details: formData().details,
          phone: formData().details,
        }),
      });
      const result = await response.json();
      if (!result.success) {
        setMessage(result.response);
        setIsProcessing(false);
      } else {
        var store = {
          role: result.response.role,
          nickname: result.response.nickname,
          username: result.response.username,
          token: result.response.token,
          expiry: now.getTime() + 10800000,
        };
        setData(store);
        localStorage.setItem("LekkiRunsUser", JSON.stringify(data()));

        navigate("/a/profile");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <MetaProvider>
      <Title>Report Account - LekkiRuns.ng</Title>
      <Link rel="canonical" href="https://LekkiRuns.ng/" />
      <Meta name="description" content="Report Account." />
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-8">
          <h2 class="text-center roboto-bold">Report Account</h2>
          <form
            autocomplete="off"
            // onSubmit={submit}
            class="my-2 w-80 mx-auto p-4 bg-gray-50 space-y-4 drop-shadow-lg text-sm rounded-lg border"
          >
            <div class="bg-yellow-100 border border-yellow-200 p-3 rounded-lg leading-tight space-y-2">
              <p>
                When an account is reported, the account may be delisted and
                banned. Please enter the WhatsApp number of the account you wish
                to report & other details below.
              </p>
            </div>
            <div>
              <TextInput
                label="Your WhatsApp Number:"
                name="phone"
                required={true}
                type="text"
                placeholder="e.g.: 09065431244"
                formHandler={formHandler}
              />
            </div>
            <div>
              <TextInput
                label="Account's WhatsApp Number:"
                name="username"
                required={true}
                type="text"
                placeholder="e.g.: 09065431244"
                formHandler={formHandler}
              />
            </div>
            <div>
              <Select
                label="Reason:"
                name="reason"
                required={true}
                options={[
                  { value: "", label: "Select" },
                  {
                    value: "Collected TFare & Refused to show up",
                    label: "Collected TFare & Refused to show up",
                  },
                  { value: "Owner not a Woman", label: "Owner not a Woman" },
                  { value: "Profile is false", label: "Profile is false" },
                  { value: "Others", label: "Others" },
                ]}
                formHandler={formHandler}
              />
            </div>
            <div>
              <TextArea
                label="More Details:"
                name="details"
                required={true}
                type="text"
                max="600"
                placeholder="Provide more info..."
                formHandler={formHandler}
              />
            </div>

            <Show when={message() !== ""}>
              <div class="bg-purple-200 text-purple-900 p-3 text-center animate-pulse border-l-2 border-black">
                {message()}
              </div>
            </Show>

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
                          Report Account
                        </button>
                      }
                    >
                      <button
                        disabled
                        class="animate-pulse opacity-60 bg-slate-900 text-white w-full p-3 rounded-lg"
                      >
                        Processing.. .
                      </button>
                    </Show>
                  </>
                }
              >
                <button
                  disabled
                  class="cursor-not-allowed opacity-60 bg-slate-900 text-white w-full p-3 rounded-lg"
                >
                  Report Account
                </button>
              </Show>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default Report;
