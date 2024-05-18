import { MetaProvider, Title, Link, Meta } from "@solidjs/meta";
import { A, useNavigate } from "@solidjs/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { createStore } from "solid-js/store";
import { createResource } from "solid-js";
import Loading from "../../components/Loading";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function Profile() {
  const navigate = useNavigate();

  const [ladyData, setLadyData] = createStore([]);

  const fetchLady = async () => {
    if (localStorage.getItem("LekkiRunsUser")) {
      const response = await fetch(
        VITE_API_URL +
          "/api/user/" +
          JSON.parse(localStorage.getItem("LekkiRunsUser")).custom_id,
        {
          mode: "cors",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("LekkiRunsUser")).token
            }`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          method: "GET",
        }
      );
      const result = await response.json();
      if (result.response === "Expired token") {
        localStorage.removeItem("LekkiRunsUser");
        navigate("/a/login", { replace: true });
      } else if (result.response.status === "awaiting validation") {
        navigate("/a/validation", { replace: true });
      } else if (result.response.status === "complete profile") {
        navigate("/a/post", { replace: true });
      } else {
        setLadyData(result.response);
      }
      return {
        ladyData,
      };
    } else {
      navigate("/a/login", { replace: true });
    }
  };

  const [data] = createResource(fetchLady);
  return (
    <MetaProvider>
      <Title>Edit Profile - LekkiRuns.ng</Title>
      <Link rel="canonical" href="https://LekkiRuns.ng/" />
      <Meta name="description" content="View Edit Profile." />
      <div class="w-full p-3 lg:w-8/12 lg:mx-auto">
        <Header />
        <section class="pt-8">
          <h2 class="text-center roboto-bold">Edit Profile</h2>
          <div class="my-2 w-80 mx-auto p-4 bg-gray-50 drop-shadow-lg text-sm rounded-lg border">
            <Show
              when={data.loading}
              fallback={
                <div class="space-y-2 text-slate-600">
                  <div class="border-b pb-2">
                    <div class="flex justify-between">
                      <b>Nickname:</b>
                      <span class="text-xs pt-1">
                        [
                        <span class="cursor-pointer text-red-600 hover:opacity-60">
                          Change Nickname
                        </span>
                        ]
                      </span>
                    </div>
                    <div class="text-gray-600">{data().ladyData.nickname}</div>
                  </div>
                  <div class="border-b pb-2">
                    <div class="flex justify-between">
                      <b>WhatsApp:</b>
                      <span class="text-xs pt-1">
                        [
                        <span class="cursor-pointer text-red-600 hover:opacity-60">
                          Change Number
                        </span>
                        ]
                      </span>
                    </div>
                    <div class="text-gray-600">{data().ladyData.username}</div>
                  </div>
                  <div class="border-b pb-2">
                    <div class="flex justify-between">
                      <b>Body Build:</b>
                      <span class="text-xs pt-1">
                        [
                        <span class="cursor-pointer text-red-600 hover:opacity-60">
                          Change Body Build
                        </span>
                        ]
                      </span>
                    </div>
                    <div class="text-gray-600">{data().ladyData.build}</div>
                  </div>
                  <div class="border-b pb-2">
                    <div class="flex justify-between">
                      <b>Sexual Orientation:</b>
                      <span class="text-xs pt-1">
                        [
                        <span class="cursor-pointer text-red-600 hover:opacity-60">
                          Change Orientation
                        </span>
                        ]
                      </span>
                    </div>
                    <div class="text-gray-600">
                      {data().ladyData.orientation}
                    </div>
                  </div>
                  <div class="border-b pb-2">
                    <div class="flex justify-between">
                      <b>Bio:</b>
                      <span class="text-xs pt-1">
                        [
                        <span class="cursor-pointer text-red-600 hover:opacity-60">
                          Edit Bio
                        </span>
                        ]
                      </span>
                    </div>
                    <div class="text-gray-600">
                      <span innerHTML={data().ladyData.bio}></span>
                    </div>
                  </div>
                  <div class="pb-2">
                    <div class="flex justify-between">
                      <b>Password:</b>
                      <span class="text-xs pt-1">
                        [
                        <span class="cursor-pointer text-red-600 hover:opacity-60">
                          Change Password
                        </span>
                        ]
                      </span>
                    </div>
                    <div class="text-gray-600">*********</div>
                  </div>
                  <div class="border-t pt-4">
                    <span
                      class="bg-red-100 cursor-pointer hover:opacity-60 rounded-lg
                     text-orange-600 text-center block p-3 text-xs"
                    >
                      Delete My Profile
                    </span>
                  </div>
                </div>
              }
            >
              <Loading />
            </Show>
          </div>
        </section>
      </div>
      <Footer />
    </MetaProvider>
  );
}

export default Profile;
