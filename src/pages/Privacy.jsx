import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { A } from "@solidjs/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Privacy() {
  return (
    <MetaProvider>
      <Title>Privacy Policy - LekkiRuns.ng</Title>
      <Link rel="canonical" href="https://LekkiRuns.ng/" />
      <Meta name="description" content="Privacy Policy." />
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-8 sm:w-7/12 lg:w-6/12 mx-auto">
          <h2 class="text-center roboto-bold">Privacy Policy</h2>
          <div class="mt-1 space-y-6 bg-gray-50 border border-gray-100 rounded-lg p-4">
            <p>
              <b>Acceptance Of The Terms</b>
            </p>
            <ul class="list-disc mx-2 space-y-4">
              <li>
                By accessing, using or visiting www.lekkiruns.com (“we”, “us”,
                “our”, or this “Website”), any of its Content, functionalities
                and services, you signify your agreement to these Terms of
                Service including policies and related guidelines (for instance,
                Child Sexual Abuse Material Policy, and Non-Consensual Content
                Policy) (collectively the “Terms” or “Terms of Service”), and
                our Privacy Notice and incorporated herein by reference.
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default Privacy;
