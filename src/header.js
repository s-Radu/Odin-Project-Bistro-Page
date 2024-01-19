import logo from "./assets/images/logo3.png";

export function header() {
  let header = document.createElement("header");
  header.className = "text-gray-400 font-josefin body-font";
  header.innerHTML = `
  <div class="container mx-auto flex flex-wrap p-5  justify-between items-center">
            <img src="${logo}" alt="page logo" class="w-20 cursor-pointer home">
            <nav
                class="hidden md:flex md:mr-auto md:ml-4 md:py-1 md:h-20 md:pl-4 md:border-l md:border-gray-400  flex-wrap items-center text-base justify-center">
                <a class="mr-5 transform transition-all duration-150 hover:pb-2 hover:text-white hover:cursor-pointer hover:border-b-2 home">Home</a>
                <a class="mr-5 transform transition-all duration-150 hover:pb-2 hover:text-white hover:cursor-pointer hover:border-b-2 foods">Foods</a>
                <a class="mr-5 transform transition-all duration-150 hover:pb-2 hover:text-white hover:cursor-pointer hover:border-b-2 drinks">Drinks</a>
                <a class="mr-5 transform transition-all duration-150 hover:pb-2 hover:text-white hover:cursor-pointer hover:border-b-2 contact">Contact
                    Us</a>
            </nav>
            <div>
      <button class="relative group">
        <div class="relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div class="transform transition-all duration-150 overflow-hidden -translate-y-5 group-focus:translate-y-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6h-6 w-6 animate-bounce text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden -translate-y-3">
            <div class="bg-white mb-1.5 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>
            <div class="bg-white mb-1.5 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
            <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
          </div>
        </div>
      </button>
    </div>
        </div>
  `;
  return header;
}