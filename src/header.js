import logo from "./assets/images/logo.png";

export function header() {
  let header = document.createElement("header");
  header.className = "text-gray-400 font-josefin body-font flex items-center";
  header.innerHTML = `
  <div class="container mx-auto flex flex-wrap p-5 justify-between items-center border-b-2 border-gray-400">
  <img src="${logo}" alt="Bistro: Lebăda neagră" class="w-32 md:w-24 cursor-pointer home">
  <nav
      class="hidden md:relative md:flex md:mr-auto md:ml-4 md:py-1 md:h-20 md:pl-4 md:border-l md:border-gray-400  flex-wrap items-center text-base justify-center">
      <p
          class="mr-5 transform transition-all duration-150 hover:pb-2 border-black dark:hover:text-white dark:border-white hover:text-black hover:cursor-pointer hover:border-b-2 home">
          Home</p>
      <p
          class="mr-5 transform transition-all duration-150 hover:pb-2 border-black dark:hover:text-white dark:border-white hover:text-black hover:cursor-pointer hover:border-b-2 foods">
          Foods</p>
      <p
          class="mr-5 transform transition-all duration-150 hover:pb-2 border-black dark:hover:text-white dark:border-white hover:text-black hover:cursor-pointer hover:border-b-2 desserts">
          Desserts</p>
      <p
          class="mr-5 transform transition-all duration-150 hover:pb-2 border-black dark:hover:text-white dark:border-white hover:text-black hover:cursor-pointer hover:border-b-2 drinks">
          Drinks</p>
      <p
          class="mr-5 transform transition-all duration-150 hover:pb-2 border-black dark:hover:text-white dark:border-white hover:text-black hover:cursor-pointer hover:border-b-2 contact">
          Contact
          Us</p>
  </nav>



  <button id="theme-toggle" class="p-2 rounded-full dark:bg-gray-800">
      <svg id="theme-icon" class="h-6 w-6 text-gray-800 dark:text-gray-200 hover:scale-110" fill="none"
          stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">


          <path id="sun-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              filter="drop-shadow( 0px 0px 2px #FFFF00 )" style="display: none;"></path>


          <path id="moon-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" fill="#000000"
              filter="drop-shadow( 0px 0px 2px #ffffff )">
          </path>
      </svg>
  </button>



  <div class="relative mr-4 md:hidden">
      <button class="relative group" id="hamburgherButton">
          <div
              class="relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-transparent ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div
                  class="transform transition-all duration-150 overflow-hidden -translate-y-5 group-focus:translate-y-3">
                  <svg xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6h-6 w-6 animate-bounce text-black dark:text-white" fill="none"
                      viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
              </div>

              <div
                  class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden -translate-y-3">
                  <div
                      class="bg-black dark:bg-white mb-1.5 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6">
                  </div>
                  <div
                      class="bg-black dark:bg-white mb-1.5 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75">
                  </div>
                  <div
                      class="bg-black dark:bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100">
                  </div>
              </div>
          </div>
      </button>

      <div class="hidden z-10 bg-gray-400 rounded-xl text-black absolute -bottom-44 w-32 -left-10 h-44 "
          id="hamburgherItems">
          <div class="flex flex-col items-center justify-between py-2 h-full">
              <p
                  class=" transform transition-all duration-150 text-lg hover:pb-2 hover:text-white hover:cursor-pointer hover:border-b-2 home">
                  Home</p>
              <p
                  class=" transform transition-all duration-150 text-lg hover:pb-2 hover:text-white hover:cursor-pointer hover:border-b-2 foods">
                  Foods</p>
              <p
                  class=" transform transition-all duration-150 text-lg hover:pb-2 hover:text-white hover:cursor-pointer hover:border-b-2 desserts">
                  Desserts</p>
              <p
                  class=" transform transition-all duration-150 text-lg hover:pb-2 hover:text-white hover:cursor-pointer hover:border-b-2 drinks">
                  Drinks</p>
              <p
                  class=" transform transition-all duration-150 text-lg hover:pb-2 hover:text-white hover:cursor-pointer hover:border-b-2 contact">
                  Contact
                  Us</p>
          </div>
      </div>
  </div>
</div>
  `;
  return header;
}
