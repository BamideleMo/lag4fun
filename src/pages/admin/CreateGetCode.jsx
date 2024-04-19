import { A } from "@solidjs/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TextInput from "../../components/TextInput";

import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";
import TextArea from "../../components/TextArea";
import { Select } from "../../components/Select";

const schema = z.object({
  number: z.string().length(11, "*Invalid"),
  username: z.string().email("*Invalid"),
});

function CreateGetCode() {
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
          <h2 class="text-center roboto-bold">Get/Create Code</h2>
          <form class="my-4 w-80 mx-auto p-2 bg-gray-50 space-y-4 drop-shadow-lg text-sm rounded-lg border">
            <div>
              <TextInput
                label="WhatsApp Number:"
                name="number"
                required={true}
                type="text"
                placeholder="e.g.: 09065431244"
                formHandler={formHandler}
              />
            </div>
            <div>
              <TextInput
                label="Admin Email:"
                name="username"
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
    </>
  );
}

export default CreateGetCode;
