import { MetaProvider, Title, Meta } from "@solidjs/meta";
import { A } from "@solidjs/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextInput from "../../components/TextInput";

import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";

const schema = z.object({
  username: z.string().length(11, "*Invalid"),
  code: z.string().length(4, "*Invalid"),
});

function Remove() {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const submit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    const now = new Date();
  };
  return (
    <MetaProvider>
      <Title>Remove My Profile - LagRuns</Title>
      <Meta
        name="description"
        content="Sad to see you go. Enter your WhatsApp number (the one on this platform) & your LagRuns code to be removed."
      />
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-4">
          <h2 class="text-center roboto-bold">Remove My Profile</h2>
          <form class="my-4 w-80 mx-auto p-2 bg-gray-50 space-y-4 drop-shadow-lg text-sm rounded-lg border">
            <div class="bg-yellow-100 border border-yellow-200 p-3 rounded-lg leading-tight space-y-2">
              <p>
                Sad to see you go. Enter your WhatsApp number (the one on this
                platform) & your LagRuns code to be removed.
              </p>
              <p class="border-t border-yellow-600 pt-2">
                <b>Note:</b>
                <br />
                Can't remember your <b>LagRuns code</b>?{" "}
                <a
                  href="https://wa.me/2347036935026?text=Hello.%20I%20forgot%20my%20LagRuns%20Code.%20Help%20me%20get%20it."
                  class="underline hover:opacity-60"
                >
                  Click here to get it
                </a>
                .
              </p>
            </div>
            <div>
              <TextInput
                label="WhatsApp Number:"
                name="username"
                required={true}
                type="text"
                placeholder="e.g.: 09065431244"
                formHandler={formHandler}
              />
            </div>
            <div>
              <TextInput
                label="LagRuns Code:"
                name="code"
                required={true}
                type="text"
                formHandler={formHandler}
              />
            </div>
            <div>
              <button class="bg-slate-900 text-white w-full p-3 rounded-lg hover:opacity-60">
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default Remove;
