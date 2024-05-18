import { A, useNavigate } from "@solidjs/router";
import { MetaProvider, Title, Meta } from "@solidjs/meta";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { createSignal } from "solid-js";

import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import TextArea from "../../components/TextArea";
import { Select } from "../../components/Select";

const schema = z.object({
  bio: z.string().min(1, "*Invalid").max(600, "*Invalid"),
  build: z.string().min(1, "*Invalid"),
  orientation: z.string().min(1, "*Invalid"),
});

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Post() {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const [isProcessing, setIsProcessing] = createSignal(false);

  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    var formatted_bio = formData().bio;
    formatted_bio = formatted_bio.replace(/(\r\n|\n|\r)/gm, "<br />");
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
            status: "completed",
            location: "Lekki",
            build: formData().build,
            orientation: formData().orientation,
            bio: formatted_bio,
          }),
        }
      );
      const result = await response.json();
      if (result.success) {
        navigate("/a/success", { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <MetaProvider>
      <Title>Post Profile - LekkiRuns</Title>
      <Meta
        name="description"
        content="Post your profile to LekkiRuns so men can easily contact you for hookup."
      />
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-4">
          <h2 class="text-center roboto-bold">Post Profile</h2>
          <form
            autocomplete="off"
            onSubmit={submit}
            class="my-4 w-80 sm:w-/5 mx-auto p-2 bg-gray-50 space-y-4 drop-shadow-lg text-sm rounded-lg border"
          >
            <div class="bg-yellow-100 border border-yellow-200 p-3 rounded-lg leading-tight space-y-2">
              <p>
                Make sure your Sexy Bio is catchy & sexy enough to attract your
                kind of men. You can include your charges & other info that's
                important. Use emojis to spice it up! 🌶️😋
              </p>
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
          </form>
        </section>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default Post;
