import Footer from "../components/Footer";
import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import Header from "../components/Header";
import TheFaqs from "../components/TheFaqs";

function NotFound() {
  return (
    <MetaProvider>
      <div class="text-sm">
        <Title>Page Not Found - LekkiRuns</Title>
        <Link rel="canonical" href="https://agentsinjos.com/" />
        <Meta name="description" content="Read our terms and conditons." />
        <div>
          <div class="bg-gray-50 border-b">
            <Header />
            <div class="custom_width mx-auto py-10">
              <h2 class="text-center text-lg lg:text-xl">Page Not Found</h2>
              <div class="space-y-4 py-4 w-80 lg:w-96 mx-auto">
                <p>Oops!</p>
                <p>
                  It appears the page you are looking for has been moved,
                  removed or does not exist. Sorry about that!
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </MetaProvider>
  );
}

export default NotFound;
