import logo from "./assets/images/logo3.png";

export function header() {
  let header = document.createElement("header");
  header.className = "text-gray-400 font-josefin body-font";
  header.innerHTML = `
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <img src="${logo}" alt="page logo" class="w-20 cursor-pointer home">
            <nav
                class="md:mr-auto md:ml-4 md:py-1 md:h-20 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                <a class="mr-5 hover:pb-2 hover:text-white hover:cursor-pointer hover:border-b-2 home">Home</a>
                <a class="mr-5 hover:pb-2 hover:text-white hover:cursor-pointer hover:border-b-2 foods">Foods</a>
                <a class="mr-5 hover:pb-2 hover:text-white hover:cursor-pointer hover:border-b-2 drinks">Drinks</a>
                <a class="mr-5 hover:pb-2 hover:text-white hover:cursor-pointer hover:border-b-2 contact">Contact
                    Us</a>
            </nav>
            <button
                class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                    stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button>
        </div>
  `;
  return header;
}
