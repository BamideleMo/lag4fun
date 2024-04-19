import { A } from "@solidjs/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { MetaProvider, Title, Meta } from "@solidjs/meta";

import { useFormHandler } from "solid-form-handler";
import { zodSchema } from "solid-form-handler/zod";
import { z } from "zod";

const schema = z.object({
  username: z.string().length(11, "*Invalid"),
  code: z.string().length(4, "*Invalid"),
});

function HowTo() {
  const formHandler = useFormHandler(zodSchema(schema));
  const { formData } = formHandler;

  const submit = async (event) => {
    event.preventDefault();
    setIsProcessing(true);
    const now = new Date();
  };
  return (
    <MetaProvider>
      <Title>How to Use LagRuns - For ladies available for hookup</Title>
      <Meta
        name="description"
        content="How ladies in Lagos available for hookup can use LagRuns."
      />
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-8 sm:w-7/12 lg:w-6/12 mx-auto">
          <h2 class="text-center roboto-bold">How to Use LagRuns</h2>
          <div class="space-y-4 py-4 text-sm">
            <p>
              LagRuns is the simplest list of Ladies in Lagos available for
              hookup. Men love to use LagRuns because it is very simple to use
              and connect with available ladies.
            </p>
            <p>
              <b>
                How to use LagRuns to attract men who like what you like and are
                looking for someone like you:
              </b>
            </p>
            <p>
              #.1
              <br />
              <u>Get your LagRuns Code</u>: Because no
              picture upload on LagRuns profile, words (text) are your only
              weapon.
            </p>
            <p>
              #.2
              <br />
              <u>Use catchy & attractive words in your profile</u>: Becuase no
              picture upload on LagRuns profile, words (text) are your only
              weapon.
            </p>
            <p>
              #.2
              <br />
              <u>Use a dedicated WhatsApp Business Account</u>: Becuase no
              picture upload on LagRuns profile, words (text) are your only
              weapon.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default HowTo;
