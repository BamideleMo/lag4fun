import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { A } from "@solidjs/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Safety() {
  return (
    <MetaProvider>
      <Title>Safety - LekkiRuns.ng</Title>
      <Link rel="canonical" href="https://LekkiRuns.ng/" />
      <Meta name="description" content="Safety while using LekkiRuns." />
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-8 sm:w-7/12 lg:w-6/12 mx-auto">
          <h2 class="text-center roboto-bold">Safety</h2>
          <div class="mt-1 space-y-6 bg-gray-50 border border-gray-100 rounded-lg p-4">
            <p>.</p>
          </div>
        </section>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default Safety;
