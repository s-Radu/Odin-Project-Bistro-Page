import breakfastBackground from "./assets/images/breakfast-menu.jpg";

export function foodPage() {
  let foodMenu = document.createElement("div");
  foodMenu.style.backgroundImage = `url(${breakfastBackground})`;
  foodMenu.className =
    "relative bg-cover bg-no-repeat bg-center rounded-2xl container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[92rem] dark:text-white";
  foodMenu.innerHTML = `
    <div class="absolute inset-0 bg-black opacity-60 dark:opacity-70 rounded-2xl"></div>

            <h1 class="relative font-josefin text-5xl text-center my-4 md:col-span-2">Breakfast Menu</h1>


            <div class="relative flex flex-col items-center m-2 opacity-70 hover:opacity-100">
                <h1 class="font-josefin text-3xl text-center my-4 col-span-2">Full Breakfast</h1>

                <div class="flex flex-col justify-between items-center min-h-[91rem] w-full">

                    <div class="flex justify-between items-center w-full">
                        <details class="font-montserat">
                            <summary class="text-lg cursor-pointer">Full Breakfast</summary>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">1 Local pork
                                sausage, 2
                                rashers
                                of smoked bacon,
                                fried
                                egg,
                                mushrooms,
                                grilled
                                tomato, baked
                                beans and hash brown. With a choice of white toast, wholemeal toast or fried slice.</p>
                        </details>
                        <span class="text-lg m-4">RON 55</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <details class="font-montserat">
                            <summary class="text-lg cursor-pointer">Full Steam Ahead</summary>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                2 Local pork sausages, 2 rashers of smoked bacon, 2 fried eggs, mushrooms, grilled
                                tomato, baked beans, hash brown and black pudding. With a choice of white toast,
                                wholemeal toast or fried slice.
                            </p>
                        </details>
                        <span class="text-lg m-4">RON 70</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <details class="font-montserat">
                            <summary class="text-lg cursor-pointer">Vegetarian Breakfast</summary>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                2 Veggie sausages, fried egg, mushrooms with spinach, grilled tomato, hash brown, baked
                                beans. With a choice of white toast, wholemeal toast or fried slice.
                            </p>
                        </details>
                        <span class="text-lg m-4">RON 50</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <details class="font-montserat">
                            <summary class="text-lg cursor-pointer">The Junior</summary>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                1 pork sausage, 1 smoked bacon, fried egg and baked beans. With a choice of white toast
                                or wholemeal toast.
                            </p>
                        </details>
                        <span class="text-lg m-4">RON 40</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <details class="font-montserat">
                            <summary class="text-lg cursor-pointer">American Style Pancakes
                            </summary>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Served with syrup and fresh fruit.
                            </p>
                        </details>
                        <span class="text-lg m-4">RON 50</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <details class="font-montserat">
                            <summary class="text-lg cursor-pointer">Toasted Waffles
                            </summary>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Served with syrup and fresh fruit.
                            </p>
                        </details>
                        <span class="text-lg m-4">RON 50</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <details class="font-montserat">
                            <summary class="text-lg cursor-pointer w-5/6">Breakfast Burger
                            </summary>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Floured bap filled with sausage, smoked bacon, fried egg and hash brown.
                            </p>
                        </details>
                        <span class="text-lg m-4">RON 65</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <details class="font-montserat">
                            <summary class="text-lg cursor-pointer w-5/6">Veggie Breakfast Burger
                            </summary>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Floured bap with veggie sausage, mushroom and spinach, fried egg and hash brown.
                            </p>
                        </details>
                        <span class="text-lg m-4">RON 55</span>
                    </div>

                </div>
            </div>

            <div class="relative flex flex-col items-center m-2  opacity-70 hover:opacity-100">
                <h1 class="font-josefin text-3xl text-center my-4 col-span-2">Light Breakfast</h1>

                <div class="flex flex-col justify-between items-center min-h-[91rem] w-full">

                    <div class="flex justify-between items-center w-full">
                        <details class="font-montserat">
                            <summary class="text-lg cursor-pointer">Scrambled eggs on toast</summary>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Add Crispy Bacon -- RON 10
                                Add Smoaked Salmon -- RON 15
                            </p>
                        </details>
                        <span class="text-lg m-4">RON 35</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <details class="font-montserat">
                            <summary class="text-lg cursor-pointer">Sqashed Avocado</summary>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Served on either white or granary toast with poached eggs and grilled tomatoes.
                            </p>
                        </details>
                        <span class="text-lg m-4">RON 50</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <details class="font-montserat">
                            <summary class="text-lg cursor-pointer">Smokey Bacon Sandwich</summary>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                3 rashes of bacon on white or granary bread.
                            </p>
                        </details>
                        <span class="text-lg m-4">RON 45</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <details class="font-montserat">
                            <summary class="text-lg cursor-pointer">Sausage Sandwich</summary>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                2 pork sausages on white or granary bread.
                            </p>
                        </details>
                        <span class="text-lg m-4">RON 40</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <details class="font-montserat">
                            <summary class="text-lg cursor-pointer">Eggs Benedict
                            </summary>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Toasted floured breakfast muffin topped with organic ham, poached eggs and hallandaise
                                sauce.
                            </p>
                        </details>
                        <span class="text-lg m-4">RON 55</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <details class="font-montserat">
                            <summary class="text-lg cursor-pointer">Eggs Royal
                            </summary>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Toasted floured breakfast muffin topped with smoked salmon, poached eggs and hallandaise
                                sauce.
                            </p>
                        </details>
                        <span class="text-lg m-4">RON 60</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <details class="font-montserat">
                            <summary class="text-lg cursor-pointer w-5/6">Eggs Florentine
                            </summary>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Toasted floured breakfast muffin topped with spinach, poached eggs and hallandaise
                                sauce.
                            </p>
                        </details>
                        <span class="text-lg m-4">RON 55</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <details class="font-montserat">
                            <summary class="text-lg cursor-pointer w-5/6">Beans on Toast
                            </summary>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Served with white or granary toast.
                            </p>
                        </details>
                        <span class="text-lg m-4">RON 35</span>
                    </div>

                    <div class="flex justify-between items-center w-full">
                        <details class="font-montserat">
                            <summary class="text-lg cursor-pointer w-5/6">Mushrooms and spinach on toast
                            </summary>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Sauted seasoned mushrooms with spinach on a choice of white or granary toast
                            </p>
                        </details>
                        <span class="text-lg m-4">RON 45</span>
                    </div>

                </div>
            </div>
    `;

  return foodMenu;
}
