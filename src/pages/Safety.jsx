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
            <p>
              Unfortunately, this platform's admin won't be there at all the
              stages of your communication with users you meet on the platform,
              so it is your responsibility to protect yourself from unpleasant
              situations.
            </p>
            <p>
              Be smart, careful and avoid scams or frauds of all kinds. Never
              share your private details, PIN codes or passwords with anyone.
            </p>
            <p>
              Use common sense. Please, avoid anything that appears too good to
              be true such as unrealistic promises and others.
            </p>
            <p>
              Agree on the scope of commitment in advance. When meeting in
              person, meet at a safe public place.
            </p>
            <p>
              By using our reporting feature, users can easily alert our staff
              to potentially harmful content or users. Reporting content or
              other users is easy, confidential, and serves to alert our team to
              review the identified content or user.{" "}
              <A
                href="/report"
                class="text-red-600 hover:opacity-60 font-semibold"
              >
                Click here to report
              </A>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default Safety;
