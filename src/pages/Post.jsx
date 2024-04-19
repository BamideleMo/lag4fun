import { A } from "@solidjs/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextInput from "../components/TextInput";

import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import TextArea from "../components/TextArea";
import { Select } from "../components/Select";

const schema = z.object({
  username: z.string().length(11, "*Invalid"),
  nickname: z.string().min(2, "*Invalid"),
  location: z.string().min(1, "*Invalid"),
  bio: z.string().min(1, "*Invalid").max(220, "*Invalid"),
  code: z.string().length(4, "*Invalid"),
});

function Post() {
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
        <section class="pt-4">
          <h2 class="text-center roboto-bold">Post My Profile</h2>
          <form class="my-4 w-80 sm:w-/5 mx-auto p-2 bg-gray-50 space-y-4 drop-shadow-lg text-sm rounded-lg border">
            <div class="text-gray-400">
              Post your profile to LagRuns so you can be easily contacted for
              hookup.
            </div>
            <div>
              <TextInput
                label="WhatsApp Number:"
                name="username"
                required={true}
                type="text"
                placeholder="e.g.: 09065431290"
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
                    { value: "", label: "Select" },
                    { value: "Alimosho", label: "Alimosho" },
                    { value: "Apapa", label: "Apapa" },
                    { value: "Badagri", label: "Badagri" },
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
                    { value: "Lekki-Ajah", label: "Lekki-Ajah" },
                    { value: "Mainland", label: "Mainland" },
                    { value: "Ogudu", label: "Ogudu" },
                    { value: "Ojo", label: "Ojo" },
                    { value: "Oshodi-Isolo", label: "Oshodi-Isolo" },
                    { value: "Surulere", label: "Surulere" },
                    { value: "VI", label: "VI" },
                    { value: "Yaba", label: "Yaba" },
                    { value: "Others", label: "Others..." },
                  ]}
                  formHandler={formHandler}
                />
              </div>
            </div>
            <div>
              <TextArea
                label="Sexy Profile:"
                name="bio"
                required={true}
                type="text"
                max="200"
                placeholder="Write something catchy..."
                formHandler={formHandler}
              />
              <div class="text-sm leading-tight pt-1">
                <A href="#" class="text-black bg-yellow-300 hover:opacity-60">
                  To see some examples of sexy & catchy profiles{" "}
                  <u>click here</u>.
                </A>
              </div>
            </div>
            <div>
              <TextInput
                label="Your LagRuns Code:"
                name="code"
                required={true}
                type="text"
                formHandler={formHandler}
              />
              <div class="text-sm leading-tight pt-1 text-gray-500">
                <a href="#" class="text-black bg-yellow-300 hover:opacity-60">
                  No LagRuns code? <u>Click here</u> to send a WhatsApp chat to
                  us & we'll generate & reply you with your code.
                </a>
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

export default Post;
