import { A } from "@solidjs/router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TextInput from "../components/TextInput";

import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";

const schema = z.object({
  username: z.string().length(11, "*Invalid"),
  code: z.string().length(4, "*Invalid"),
});

function Faqs() {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const submit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    const now = new Date();
  };
  return (
    <>
      <div class="w-full p-3 lg:w-11/12 lg:mx-auto">
        <Header />
        <section class="pt-8 lg:w-6/12 mx-auto">
          <h2 class="text-center roboto-bold">FAQs</h2>
          <div class=" mt-1 space-y-6">
            <div class="bg-gray-50 p-4 rounded-lg">x</div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Faqs;
