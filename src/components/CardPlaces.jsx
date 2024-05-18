import { A } from "@solidjs/router";
import { createStore } from "solid-js/store";
import { createResource, createSignal } from "solid-js";
import Loading from "./Loading";

const VITE_API_URL = import.meta.env["VITE_API_URL"];

function CardPlaces() {
  const [ajah, setAjah] = createSignal();
  const [alimosho, setAlimosho] = createSignal();
  const [apapa, setApapa] = createSignal();
  const [badagry, setBadagry] = createSignal();
  const [epe, setEpe] = createSignal();
  const [etiosa, setEtiosa] = createSignal();
  const [festac, setFestac] = createSignal();
  const [gbagada, setGbagada] = createSignal();
  const [ibeju, setIbeju] = createSignal();
  const [iganmu, setIganmu] = createSignal();
  const [ikeja, setIkeja] = createSignal();
  const [ikorodu, setIkorodu] = createSignal();
  const [ikoyi, setIkoyi] = createSignal();
  const [island, setIsland] = createSignal();
  const [lekki, setLekki] = createSignal();
  const [magodo, setMagodo] = createSignal();
  const [mainland, setMainland] = createSignal();
  const [ogudu, setOgudu] = createSignal();
  const [ojo, setOjo] = createSignal();
  const [oshodi, setOshodi] = createSignal();
  const [sangotedo, setSangotedo] = createSignal();
  const [surulere, setSurulere] = createSignal();
  const [vi, setVi] = createSignal();
  const [yaba, setYaba] = createSignal();

  const fetchLadies = async () => {
    const requestAjah = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Lekki-Ajah&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestAlimosho = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Alimosho&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestApapa = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Apapa&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestBadagry = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Badagry&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestEpe = fetch(
      VITE_API_URL + "/list/view-ladies?location=Epe&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestEtiosa = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Etiosa&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestFestac = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Festac&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestGbagada = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Gbagada&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestIbeju = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Ibeju&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestIganmu = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Iganmu&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestIkeja = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Ikeja&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestIkorodu = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Ikorodu&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestIkoyi = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Ikoyi&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestIsland = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Island&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestLekki = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Lekki&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestMagodo = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Magodo&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestMainland = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Mainland&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestOgudu = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Ogudu&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestOjo = fetch(
      VITE_API_URL + "/list/view-ladies?location=Ojo&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestOshodi = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Oshodi&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestSangotedo = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Sangotedo&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestSurulere = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Surulere&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestVi = fetch(
      VITE_API_URL + "/list/view-ladies?location=VI&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    const requestYaba = fetch(
      VITE_API_URL +
        "/list/view-ladies?location=Yaba&orientation=all&build=any",
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "GET",
      }
    ).then((response) => response.json());

    Promise.all([
      requestAjah,
      requestAlimosho,
      requestApapa,
      requestBadagry,
      requestEpe,
      requestEtiosa,
      requestFestac,
      requestGbagada,
      requestIbeju,
      requestIganmu,
      requestIkeja,
      requestIkorodu,
      requestIkoyi,
      requestIsland,
      requestLekki,
      requestMagodo,
      requestMainland,
      requestOgudu,
      requestOjo,
      requestOshodi,
      requestSangotedo,
      requestSurulere,
      requestVi,
      requestYaba,
    ]).then(
      ([
        dataAjah,
        dataAlimosho,
        dataApapa,
        dataBadagry,
        dataEpe,
        dataEtiosa,
        dataFestac,
        dataGbagada,
        dataIbeju,
        dataIganmu,
        dataIkeja,
        dataIkorodu,
        dataIkoyi,
        dataIsland,
        dataLekki,
        dataMagodo,
        dataMainland,
        dataOgudu,
        dataOjo,
        dataOshodi,
        dataSangotedo,
        dataSurulere,
        dataVi,
        dataYaba,
      ]) => {
        setAjah(dataAjah.response.length);
        setAlimosho(dataAlimosho.response.length);
        setApapa(dataApapa.response.length);
        setBadagry(dataBadagry.response.length);
        setEpe(dataEpe.response.length);
        setEtiosa(dataEtiosa.response.length);
        setFestac(dataFestac.response.length);
        setGbagada(dataGbagada.response.length);
        setIbeju(dataIbeju.response.length);
        setIganmu(dataIganmu.response.length);
        setIkeja(dataIkeja.response.length);
        setIkorodu(dataIkorodu.response.length);
        setIkoyi(dataIkoyi.response.length);
        setIsland(dataIsland.response.length);
        setLekki(dataLekki.response.length);
        setMagodo(dataMagodo.response.length);
        setMainland(dataMainland.response.length);
        setOgudu(dataOgudu.response.length);
        setOjo(dataOjo.response.length);
        setOshodi(dataOshodi.response.length);
        setSangotedo(dataSangotedo.response.length);
        setSurulere(dataSurulere.response.length);
        setVi(dataVi.response.length);
        setYaba(dataYaba.response.length);
      }
    );
  };

  const [data] = createResource(fetchLadies);
  return (
    <section class="text-sm">
      <Show
        when={data.loading}
        fallback={
          <div class="grid grid-rows-12 md:grid-rows-8 lg:grid-rows-8 grid-flow-col gap-2 lg:gap-4 drop-shadow-lg">
            <A
              href="/l?w=Lekki-Ajah&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Lekki-Ajah</div>
              <div>
                {!ajah() ? <img src="/loading.gif" class="w-4" /> : ajah()}
              </div>
            </A>
            <A
              href="/l?w=Alimosho&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Alimosho</div>
              <div>
                {!alimosho() ? (
                  <img src="/loading.gif" class="w-4" />
                ) : (
                  alimosho()
                )}
              </div>
            </A>
            <A
              href="/l?w=Apapa&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Apapa</div>
              <div>
                {!apapa() ? <img src="/loading.gif" class="w-4" /> : apapa()}
              </div>
            </A>
            <A
              href="/l?w=Badagry&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Badagry</div>
              <div>
                {!badagry() ? (
                  <img src="/loading.gif" class="w-4" />
                ) : (
                  badagry()
                )}
              </div>
            </A>
            <A
              href="/l?w=Epe&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Epe</div>
              <div>
                {!epe() ? <img src="/loading.gif" class="w-4" /> : epe()}
              </div>
            </A>
            <A
              href="/l?w=Etiosa&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Etiosa</div>
              <div>
                {!etiosa() ? <img src="/loading.gif" class="w-4" /> : etiosa()}
              </div>
            </A>
            <A
              href="/l?w=Festac&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Festac</div>
              <div>
                {!festac() ? <img src="/loading.gif" class="w-4" /> : festac()}
              </div>
            </A>
            <A
              href="/l?w=Gbagada&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Gbagada</div>
              <div>
                {!gbagada() ? (
                  <img src="/loading.gif" class="w-4" />
                ) : (
                  gbagada()
                )}
              </div>
            </A>
            <A
              href="/l?w=Ibeju&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Ibeju</div>
              <div>
                {!ibeju() ? <img src="/loading.gif" class="w-4" /> : ibeju()}
              </div>
            </A>
            <A
              href="/l?w=Iganmu&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Iganmu</div>
              <div>
                {!iganmu() ? <img src="/loading.gif" class="w-4" /> : iganmu()}
              </div>
            </A>
            <A
              href="/l?w=Ikeja&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Ikeja</div>
              <div>
                {!ikeja() ? <img src="/loading.gif" class="w-4" /> : ikeja()}
              </div>
            </A>
            <A
              href="/l?w=Ikorodu&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Ikorodu</div>
              <div>
                {!ikorodu() ? (
                  <img src="/loading.gif" class="w-4" />
                ) : (
                  ikorodu()
                )}
              </div>
            </A>
            <A
              href="/l?w=Ikoyi&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Ikoyi</div>
              <div>
                {!ikoyi() ? <img src="/loading.gif" class="w-4" /> : ikoyi()}
              </div>
            </A>
            <A
              href="/l?w=Island&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Island</div>
              <div>
                {!island() ? <img src="/loading.gif" class="w-4" /> : island()}
              </div>
            </A>
            <A
              href="/l?w=Lekki&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Lekki</div>
              <div>
                {!lekki() ? <img src="/loading.gif" class="w-4" /> : lekki()}
              </div>
            </A>
            <A
              href="/l?w=Magodo&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Magodo</div>
              <div>
                {!magodo() ? <img src="/loading.gif" class="w-4" /> : magodo()}
              </div>
            </A>
            <A
              href="/l?w=Mainland&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Mainland</div>
              <div>
                {!mainland() ? (
                  <img src="/loading.gif" class="w-4" />
                ) : (
                  mainland()
                )}
              </div>
            </A>
            <A
              href="/l?w=Ogudu&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Ogudu</div>
              <div>
                {!ogudu() ? <img src="/loading.gif" class="w-4" /> : ogudu()}
              </div>
            </A>
            <A
              href="/l?w=Ojo&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Ojo</div>
              <div>
                {!ojo() ? <img src="/loading.gif" class="w-4" /> : ojo()}
              </div>
            </A>
            <A
              href="/l?w=Oshodi-Isolo&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Oshodi-Isolo</div>
              <div>
                {!oshodi() ? <img src="/loading.gif" class="w-4" /> : oshodi()}
              </div>
            </A>
            <A
              href="/l?w=Sangotedo&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Sangotedo</div>
              <div>
                {!sangotedo() ? (
                  <img src="/loading.gif" class="w-4" />
                ) : (
                  sangotedo()
                )}
              </div>
            </A>
            <A
              href="/l?w=Surulere&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Surulere</div>
              <div>
                {!surulere() ? (
                  <img src="/loading.gif" class="w-4" />
                ) : (
                  surulere()
                )}
              </div>
            </A>
            <A
              href="/l?w=VI&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>VI</div>
              <div>{!vi() ? <img src="/loading.gif" class="w-4" /> : vi()}</div>
            </A>
            <A
              href="/l?w=xx&s=all&b=any&f=all"
              class="flex justify-between roboto-bold border border-fuchsia-300 p-4 rounded-lg hover:opacity-60"
            >
              <div>Yaba</div>
              <div>
                {!yaba() ? <img src="/loading.gif" class="w-4" /> : yaba()}
              </div>
            </A>
          </div>
        }
      >
        <Loading />
      </Show>
    </section>
  );
}

export default CardPlaces;
