import { A } from "@solidjs/router";
import CardPlaces from "../components/CardPlaces";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-6 mb-6">
          <h2
            class="roboto-bold w-full md:w-9/12 lg:w-8/12 mx-auto text-center drop-shadow-lg 
          leading-tight text-2xl sm:text-4xl lg:text-4xl"
          >
            A Simple List of Ladies in Lagos{" "}
            <span class="border-b-2 border-fuchsia-600">
              Available for Hookup
            </span>
            .
          </h2>
        </section>
        <CardPlaces />
      </div>
      <Footer />
    </>
  );
}

export default Home;
