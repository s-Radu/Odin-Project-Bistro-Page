import contactBackground from "./assets/images/contact.jpg";

export function contactPage() {
  let contactPage = document.createElement("div");
  contactPage.className =
    "relative bg-cover bg-no-repeat bg-center rounded-2xl m-4 container mx-auto grid grid-cols-1 lg:grid-cols-2 place-content-center text-white";
  contactPage.id = "contactPage";
  contactPage.style.backgroundImage = `url(${contactBackground})`;
  contactPage.innerHTML = `
  <div class="absolute inset-0 bg-black opacity-60 dark:opacity-70 rounded-2xl"></div>

            <h1 class="relative font-josefin text-5xl text-center m-10 md:col-span-2">Contact us</h1>

            <div class="relative flex flex-col mx-4 items-center m-4 opacity-70 md:mx-10 hover:opacity-100">

                <section class="bg-gray-900 rounded-2xl w-full font-josefin">
                    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <p class="mb-8 lg:mb-16 font-light text-center text-white dark:text-gray-400 text-3xl">
                            Reservation</p>
                        <form class="space-y-8">
                            <div>
                                <label for="email" class="block mb-2 text-xl text-gray-900 dark:text-gray-300">Your
                                    email</label>
                                <input type="email" id="email"
                                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="name@flowbite.com" required>
                            </div>
                            <div>
                                <label for="subject" class="block mb-2 text-xl text-gray-900 dark:text-gray-300">How
                                    many
                                    people</label>
                                <input type="number" id="subject"
                                    class="block p-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                    placeholder="e.g: 4" required>
                            </div>
                            <div class="sm:col-span-2">
                                <label for="message" class="block mb-2 text-xl text-gray-900 dark:text-gray-400">Your
                                    message</label>
                                <textarea id="message" rows="6"
                                    class="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Any additional requests?"></textarea>
                            </div>
                            <button 
                                class="py-3 px-5 text-xl text-center text-white rounded-lg bg-primary-700 sm:w-fit bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" id="submit">Send
                                message</button>
                        </form>
                    </div>
                </section>
            </div>

            <div class="relative flex flex-col mx-4 items-center m-4 opacity-70 md:mx-10 hover:opacity-100 rounded-2xl"
                id="map">
            </div>
  `;
  return contactPage;
}

let map;
// initMap is now async
export async function initMap() {
  // Request libraries when needed, not in the script tag.
  const { Map } = await google.maps.importLibrary("maps");
  // Short namespaces can be used.
  map = new Map(document.getElementById("map"), {
    center: { lat: 45.75755731887524, lng: 21.228189873342135 },
    zoom: 13,
  });
  new google.maps.Marker({
    position: { lat: 45.75755731887524, lng: 21.228189873342135 },
    map,
    label: "L",
    title: "Lebăda neagră!",
    animation: google.maps.Animation.DROP,
  });
}
