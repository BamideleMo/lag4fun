import { A, useNavigate } from "@solidjs/router";

function Footer() {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("LekkiRunsUser");
    navigate("/a/login", { replace: true });
  };
  return (
    <footer class="mt-10 text-sm text-center border-t border-fuchsia-400 py-6 space-y-6">
      <Show when={localStorage.getItem("LekkiRunsUser")}>
        <div class="text-center text-sm">
          You're logged in as{" "}
          <b class="text-blue-600">
            {JSON.parse(localStorage.getItem("LekkiRunsUser")).nickname}
          </b>
        </div>
      </Show>
      <div class="space-y-3">
        <div class="space-x-2">
          <Show when={localStorage.getItem("LekkiRunsUser")}>
            <span
              onClick={() => {
                logOut();
              }}
              class="cursor-pointer text-gray-600 hover:opacity-60"
            >
              Log out
            </span>
            <span>-</span>
            <Show
              when={
                JSON.parse(localStorage.getItem("LekkiRunsUser")).role ===
                "admin"
              }
            >
              <>
                <A href="/admin/post" class="text-gray-600 hover:opacity-60">
                  Post
                </A>
                <span>-</span>
              </>
            </Show>
          </Show>
          <A href="/terms" class="text-gray-600 hover:opacity-60">
            Terms & Conditions
          </A>{" "}
          <span>-</span>
          <A href="/safety" class="text-gray-600 hover:opacity-60">
            Safety
          </A>
          {/* {" "}
          <span>-</span>
          <A href="/privacy" class="text-gray-600 hover:opacity-60">
            Privacy Notice
          </A> */}
        </div>
        <div>&copy; 2024. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
