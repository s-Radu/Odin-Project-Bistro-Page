import dessertBackground from "./assets/images/dessert.jpg";

export function dessertPage() {
  let dessertPage = document.createElement("div");
  dessertPage.className =
    "relative bg-cover bg-no-repeat bg-center rounded-2xl m-4 container mx-auto grid grid-cols-1 place-content-center min-h-[92rem] text-white";
  dessertPage.id = "dessertPage";
  dessertPage.style.backgroundImage = `url(${dessertBackground})`;
  dessertPage.innerHTML = `
            <div class="absolute inset-0 bg-black opacity-60 dark:opacity-70 rounded-2xl"></div>

            <h1 class="relative font-josefin text-5xl text-center my-4 ">Desserts</h1>

            <div
                class="relative transform transition-all duration-150 flex flex-col mx-4 items-center m-2 opacity-70 col-span-3 md:mx-10  hover:opacity-100">

                <div class="flex flex-col justify-between items-center min-h-[91rem] w-full">

                    <div class="flex justify-between items-center w-full">
                        <div class="font-montserat">
                            <div class="text-xl md:text-4xl flex items-center">Sticky Toffee Pudding
                                <div
                                    class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                    <span class="text-xs">V</span>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                With vanilla ice cream.
                            </p>
                        </div>
                        <span class="text-xl md:text-2xl m-4">RON 45</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <div class="font-montserat">
                            <div class="text-xl md:text-4xl flex items-center">Pot au chocolat
                                <div
                                    class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                    <span class="text-xs">V</span>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Rich chocolate mousse with raspberry coulis layer, fresh raspberries and a sable
                                biscuit.
                            </p>
                        </div>
                        <span class="text-xl md:text-2xl m-4">RON 40</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <div class="font-montserat">
                            <div class="text-xl md:text-4xl flex items-center">Creme brulee
                                <div
                                    class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                    <span class="text-xs">V</span>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                French classic. Vanilla creme brulee freshly made by our chefs every day.
                            </p>
                        </div>
                        <span class="text-xl md:text-2xl m-4">RON 50</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <div class="font-montserat">
                            <div class="text-xl md:text-4xl flex items-center">Champagne sorbet
                                <div
                                    class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                    <span class="text-xs">V</span>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Champagne sorbet with fresh raspberries and a shot of Champagne
                            </p>
                        </div>
                        <span class="text-xl md:text-2xl m-4">RON 55</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <div class="font-montserat">
                            <div class="text-xl md:text-4xl flex items-center">Praline & Chocolate bombe
                                <div
                                    class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                    <span class="text-xs">V</span>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                iced praline cream with amaretti biscuit in a chocolate shell, with warm chocolate
                                sauce.
                            </p>
                        </div>
                        <span class="text-xl md:text-2xl m-4">RON 55</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <div class="font-montserat">
                            <div class="text-xl md:text-4xl flex items-center">Tarte au citron
                                <div
                                    class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                    <span class="text-xs">V</span>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                With raspberry coulis and creme Chantilly.
                            </p>
                        </div>
                        <span class="text-xl md:text-2xl m-4">RON 50</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <div class="font-montserat">
                            <div class="text-xl md:text-4xl flex items-center">Organic ice cream & sorbet
                                <div
                                    class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                    <span class="text-xs">V</span>
                                </div>
                                <div
                                    class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                    <span class="text-xs">GF</span>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Please ask for flavours
                            </p>
                        </div>
                        <span class="text-xl md:text-2xl m-4">RON 35</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <div class="font-montserat">
                            <div class="text-xl md:text-4xl flex items-center">Chocolate brownie
                                <div
                                    class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                    <span class="text-xs">V</span>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                With warm chocolate sauce and salted caramel ice cream.
                            </p>
                        </div>
                        <span class="text-xl md:text-2xl m-4">RON 50</span>
                    </div>

                </div>
            </div>
  `;

  return dessertPage;
}
