import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { A } from "@solidjs/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextInput from "../../components/TextInput";
import PasswordInput from "../../components/PasswordInput";
import { createSignal } from "solid-js";

import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import { useNavigate } from "@solidjs/router";

const schema = z.object({
  username: z.string().length(11, "*Invalid"),
  password: z.string().min(1, "*Invalid"),
});

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Login() {
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
          password: formData().password,
        }),
      });
      const result = await response.json();
      if (!result.success) {
        setMessage(result.response);
        setIsProcessing(false);
      } else {
        var store = {
          custom_id: result.response.custom_id,
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
      <Title>Log in - LekkiRuns.ng</Title>
      <Link rel="canonical" href="https://LekkiRuns.ng/" />
      <Meta name="description" content="Log in to access your account." />
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-8">
          <h2 class="text-center roboto-bold">Log in</h2>
          <form
            autocomplete="off"
            onSubmit={submit}
            class="my-2 w-80 mx-auto p-4 bg-gray-50 space-y-4 drop-shadow-lg text-sm rounded-lg border"
          >
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
                label="Password:"
                name="password"
                required={true}
                passId="pass1"
                formHandler={formHandler}
              />
              <div class="text-right pt-2">
                Forgot Password?{" "}
                <a
                  href="https://wa.me/2347036935026?text=Hello.%20I%20forgot%20my%20LekkiRuns%20Code.%20Help%20me%20get%20it."
                  target="_blank"
                  class="text-red-600 font-semibold hover:opacity-60"
                >
                  Click here
                </a>
                .
              </div>
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
                          Log in
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
                  Log in
                </button>
              </Show>
            </div>
            <div class="text-center">
              Don't have an account yet? <br />
              <A
                href="/a/register"
                class="text-red-600 font-semibold hover:opacity-60"
              >
                Click here
              </A>{" "}
              to create it.
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default Login;
