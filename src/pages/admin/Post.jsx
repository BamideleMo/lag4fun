import { A, useNavigate } from "@solidjs/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextInput from "../../components/TextInput";

import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import TextArea from "../../components/TextArea";
import { Select } from "../../components/Select";
import { createSignal } from "solid-js";

const schema = z.object({
  username: z.string().length(11, "*Invalid"),
  nickname: z.string().min(2, "*Invalid"),
  location: z.string().min(1, "*Invalid"),
  build: z.string().min(1, "*Invalid"),
  orientation: z.string().min(1, "*Invalid"),
  bio: z.string().min(1, "*Invalid").max(600, "*Invalid"),
});

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Post() {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const [isProcessing, setIsProcessing] = createSignal(false);
  const [message, setMessage] = createSignal("");

  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    var formatted_bio = formData().bio;
    formatted_bio = formatted_bio.replace(/(\r\n|\n|\r)/gm, "<br />");
    try {
      //Call API here:
      const response = await fetch(VITE_API_URL + "/auth/register", {
        mode: "cors",
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("lagRunsUser")).token
          }`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          password: "password",
          user_role: "lady",
          status: "completed",
          username: formData().username,
          nickname: formData().nickname,
          location: formData().location,
          build: formData().build,
          orientation: formData().orientation,
          bio: formatted_bio,
        }),
      });
      const result = await response.json();
      if (result.success) {
        navigate("/a/success", { replace: true });
      } else {
        setMessage(result.response);
        setIsProcessing(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-8">
          <h2 class="text-center roboto-bold">Post By Admin</h2>
          <form
            autocomplete="off"
            onSubmit={submit}
            class="my-4 w-80 mx-auto p-2 bg-gray-50 space-y-4 drop-shadow-lg text-sm rounded-lg border"
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
            <div class="grid grid-cols-2 gap-2">
              <div>
                <TextInput
                  label="Nickname:"
                  name="nickname"
                  required={true}
                  type="text"
                  placeholder="e.g.: SexyKitty"
                  formHandler={formHandler}
                />
              </div>
              <div>
                <Select
                  label="Location:"
                  name="location"
                  required={true}
                  options={[
                    { value: " ", label: "Select" },
                    { value: "Lekki-Ajah", label: "Lekki-Ajah" },
                    { value: "Alimosho", label: "Alimosho" },
                    { value: "Apapa", label: "Apapa" },
                    { value: "Badagry", label: "Badagry" },
                    { value: "Epe", label: "Epe" },
                    { value: "Etiosa", label: "Etiosa" },
                    { value: "Festac", label: "Festac" },
                    { value: "Gbagada", label: "Gbagada" },
                    { value: "Ibeju", label: "Ibeju" },
                    { value: "Iganmu", label: "Iganmu" },
                    { value: "Ikeja", label: "Ikeja" },
                    { value: "Ikorodu", label: "Ikorodu" },
                    { value: "Ikoyi", label: "Ikoyi" },
                    { value: "Island", label: "Island" },
                    { value: "Lekki", label: "Lekki" },
                    { value: "Magodo", label: "Magodo" },
                    { value: "Mainland", label: "Mainland" },
                    { value: "Ogudu", label: "Ogudu" },
                    { value: "Ojo", label: "Ojo" },
                    { value: "Oshodi-Isolo", label: "Oshodi-Isolo" },
                    { value: "Sangotedo", label: "Sangotedo" },
                    { value: "Surulere", label: "Surulere" },
                    { value: "VI", label: "VI" },
                    { value: "Yaba", label: "Yaba" },
                  ]}
                  formHandler={formHandler}
                />
              </div>
            </div>

            <div class="grid grid-cols-2 gap-2">
              <div>
                <Select
                  label="Body Build:"
                  name="build"
                  required={true}
                  options={[
                    { value: "", label: "Select" },
                    { value: "Chubby", label: "Chubby" },
                    { value: "Athletic", label: "Athletic" },
                    { value: "Curvy", label: "Curvy" },
                    { value: "Muscular", label: "Muscular" },
                    { value: "Elegant", label: "Elegant" },
                    { value: "Slim", label: "Slim" },
                    { value: "Petite", label: "Petite" },
                  ]}
                  formHandler={formHandler}
                />
              </div>
              <div>
                <Select
                  label="Orientation:"
                  name="orientation"
                  required={true}
                  options={[
                    { value: "", label: "Select" },
                    { value: "Straight", label: "Straight" },
                    { value: "Bisexual", label: "Bisexual" },
                    { value: "Lesbian", label: "Lesbian" },
                  ]}
                  formHandler={formHandler}
                />
              </div>
            </div>
            <div>
              <TextArea
                label="Sexy Bio:"
                name="bio"
                required={true}
                type="text"
                max="600"
                placeholder="Write something catchy..."
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
                          class="bg-slate-900 text-white w-full p-3 rounded-lg hover:bg-black"
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
          </form>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Post;
