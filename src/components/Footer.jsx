import { A, useNavigate } from "@solidjs/router";

function Footer() {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("lagRunsUser");
    navigate("/a/login", { replace: true });
  };
  return (
    <footer class="mt-10 text-xs text-center border-t border-fuchsia-400 py-6 space-y-6">
      <Show when={localStorage.getItem("lagRunsUser")}>
        <div class="text-center text-xs">
          You're logged in as{" "}
          <b class="text-blue-600">
            {JSON.parse(localStorage.getItem("lagRunsUser")).nickname}
          </b>
        </div>
      </Show>
      <div class="space-y-3">
        <div class="space-x-3">
          <Show when={localStorage.getItem("lagRunsUser")}>
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
                JSON.parse(localStorage.getItem("lagRunsUser")).role === "admin"
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
          <A href="#" class="text-gray-600 hover:opacity-60">
            Ts & Cs
          </A>
        </div>
        <div>&copy; 2024. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
