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

const schema = z
  .object({
    nickname: z.string().min(1, "*Invalid"),
    username: z.string().length(11, "*Invalid"),
    password: z.string().min(1, "*Invalid"),
    confirm_password: z.string().min(1, "*Invalid"),
  })
  .refine(
    (values) => {
      return values.password === values.confirm_password;
    },
    {
      message: "*Mismatch",
      path: ["confirm_password"],
    }
  );

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Register() {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = createSignal(false);
  const [message, setMessage] = createSignal("");

  const submit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    try {
      //Call API here:
      const response = await fetch(VITE_API_URL + "/auth/register", {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          nickname: formData().nickname,
          username: formData().username,
          password: formData().password,
          user_role: "lady",
          status: "awaiting validation",
        }),
      });
      const result = await response.json();
      if (!result.success) {
        setMessage(result.response);
        setIsProcessing(false);
      } else {
        navigate("/a/created", { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <MetaProvider>
      <Title>Register - LekkiRuns.ng</Title>
      <Link rel="canonical" href="https://LekkiRuns.ng/" />
      <Meta name="description" content="Create your LekkiRuns account." />
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-8">
          <h2 class="text-center roboto-bold">Create Account</h2>
          <form
            autocomplete="off"
            onSubmit={submit}
            class="my-2 w-80 mx-auto p-4 bg-gray-50 space-y-4 drop-shadow-lg text-sm rounded-lg border"
          >
            <div class="text-gray-400">
              Attract men who like what you like and are looking for someone
              like you!
            </div>
            <div>
              <TextInput
                label="Nickname:"
                name="nickname"
                required={true}
                type="text"
                placeholder="What should we call you?"
                formHandler={formHandler}
              />
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
              <PasswordInput
                label="Password:"
                name="password"
                required={true}
                passId="pass1"
                formHandler={formHandler}
              />
            </div>
            <div>
              <PasswordInput
                label="Confirm Password:"
                name="confirm_password"
                required={true}
                passId="pass2"
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
                          Submit
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
                  Submit
                </button>
              </Show>
            </div>
            <div class="text-center">
              Account already exist? <br />
              <A href="/a/login" class="text-fuchsia-600 hover:opacity-60">
                Click here
              </A>{" "}
              to log in.
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default Register;
