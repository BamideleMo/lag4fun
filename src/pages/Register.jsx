import { A } from "@solidjs/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextInput from "../components/TextInput";

import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import PasswordInput from "../components/PasswordInput";

const schema = z.object({
  username: z.string().length(11, "*Invalid"),
  code: z.string().length(4, "*Invalid"),
});

function Register() {
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
          <h2 class="text-center roboto-bold">Create Account</h2>
          <form class="my-2 w-80 mx-auto p-4 bg-gray-50 space-y-4 drop-shadow-lg text-sm rounded-lg border">
            <div class="text-gray-400">
              Start attracting men who like what you like and are looking for
              someone like you!
            </div>
            <div>
              <TextInput
                label="Nickname:"
                name="name"
                required={true}
                type="text"
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

export default Register;
