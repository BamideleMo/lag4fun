import { A } from "@solidjs/router";
import { createSignal } from "solid-js";

function Footer() {
  const [menu, setMenu] = createSignal(false);

  const showMenu = () => {
    setMenu(true);
  };
  return (
    <footer class="mt-20 text-sm text-center border-t border-fuchsia-400 py-12 space-y-3">
      <div class="space-x-3">
        {/* <A href="#" class="text-gray-600 hover:opacity-60">
          Advertise
        </A>
        <span>-</span>
        <A href="#" class="text-gray-600 hover:opacity-60">
          Report a Profile
        </A>
        <span>-</span> */}
        <A href="#" class="text-gray-600 hover:opacity-60">
          Ts & Cs
        </A>
      </div>
      <div>&copy; 2024. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
