import { A } from "@solidjs/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextInput from "../../components/TextInput";

import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import PasswordInput from "../../components/PasswordInput";

const schema = z.object({
  username: z.string().length(11, "*Invalid"),
  code: z.string().length(4, "*Invalid"),
});

function Login() {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const submit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    const now = new Date();
  };
  return (
    <>
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-8">
          <h2 class="text-center roboto-bold">Login</h2>
          <form class="my-2 w-80 mx-auto p-4 bg-gray-50 space-y-4 drop-shadow-lg text-sm rounded-lg border">
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
              <PasswordInput
                label="LagRuns Code:"
                name="code"
                required={true}
                passId="pass1"
                formHandler={formHandler}
              />
              <div class="text-right pt-2">
                Forgot LagRuns Code?{" "}
                <a
                  href="https://wa.me/2347036935026?text=Hello.%20I%20forgot%20my%20LagRuns%20Code.%20Help%20me%20get%20it."
                  target="_blank"
                  class="text-red-600 hover:opacity-60"
                >
                  Click here
                </a>
                .
              </div>
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
    </>
  );
}

export default Login;
