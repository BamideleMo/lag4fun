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

function GetCode() {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const submit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    const now = new Date();
  };
  return (
    <MetaProvider>
      <Title>Get My LagRuns Code - LagRuns</Title>
      <Meta
        name="description"
        content="You will get your LagRuns Code via WhatsApp."
      />
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-4">
          <h2 class="text-center roboto-bold">Get LagRuns Code</h2>
          <form class="my-4 w-80 mx-auto p-2 bg-gray-50 space-y-4 drop-shadow-lg text-sm rounded-lg border">
            <div class="bg-yellow-100 border border-yellow-200 p-3 rounded-lg leading-tight space-y-2">
              <p>
                For the sake of safety and secrecy, you need a{" "}
                <b>LagRuns Code</b> to do anything on this platform.
              </p>
              <p>To get yours, click on the button below.</p>
            </div>
            <div>
              <a
                href="https://wa.me/2347036935026?text=Hi,%20I%20want%20my%20LagRuns%20Code.%20Thanks."
                class="block text-center bg-slate-900 text-white w-full p-3 rounded-lg hover:opacity-60"
              >
                Get it now
              </a>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default GetCode;
