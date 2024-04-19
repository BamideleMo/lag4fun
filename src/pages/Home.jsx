import { A } from "@solidjs/router";
import CardPlaces from "../components/CardPlaces";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-12 mb-6">
          <h2
            class="roboto-bold w-full md:w-9/12 lg:w-8/12 mx-auto text-center drop-shadow-lg 
          leading-tight text-xl sm:text-4xl lg:text-4xl"
          >
            A Curated List of Ladies Available{" "}
            <span class="border-b-2 border-fuchsia-600">Just for Hookup</span>{" "}
            in Lagos.
          </h2>
        </section>
        <CardPlaces />
      </div>
      <Footer />
    </>
  );
}

export default Home;
