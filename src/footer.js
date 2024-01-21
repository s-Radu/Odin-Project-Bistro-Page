export function footer() {
  let footer = document.createElement("footer");
  footer.className =
    "container relative bottom-0 mx-auto bg-white rounded-2xl shadow-xl m-4 dark:bg-gray-800 h-32 md:h-16 flex items-center";
  footer.innerHTML = `
    <div class="w-full h-full p-4 flex flex-col justify-between items-center md:flex-row">
                <span class="text-sm font-josefin text-gray-400 dark:text-gray-400">© 2023 <a
                        href="https://bistro-page-five.vercel.app/"
                        class="hover:pb-2 hover:border-b-2 border-black dark:border-white dark:hover:text-white hover:text-black">Lebăda
                        neagră™</a>. All
                    Rights Reserved.
                </span>
                <div
                    class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 dark:text-gray-400 sm:mt-0">
                    <a href="#"
                        class="hover:border-b-2 border-black dark:border-white transform transition-all duration-150  hover:pb-2 dark:hover:text-white hover:text-black me-4 md:me-6">About</a>
                    <a href="#"
                        class="hover:border-b-2 border-black dark:border-white transform transition-all duration-150  hover:pb-2 dark:hover:text-white hover:text-black me-4 md:me-6">Privacy
                        Policy</a>
                    <a href="#"
                        class="hover:border-b-2 border-black dark:border-white transform transition-all duration-150  hover:pb-2 dark:hover:text-white hover:text-black me-4 md:me-6">Licensing</a>
                    <a href="#"
                        class="hover:border-b-2 border-black dark:border-white transform transition-all duration-150  hover:pb-2 dark:hover:text-white hover:text-black">Contact</a>
                </div>
            </div>
    `;
  return footer;
}
