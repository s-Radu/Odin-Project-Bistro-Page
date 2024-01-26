import breakfastBackground from "./assets/images/breakfast-menu.jpg";

export function foodPage() {
  let foodMenu = document.createElement("div");
  foodMenu.style.backgroundImage = `url(${breakfastBackground})`;
  foodMenu.className =
    "relative bg-cover bg-no-repeat bg-center rounded-2xl container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[92rem] text-white hidden";
  foodMenu.id = "food";
  foodMenu.innerHTML = `
  <div class="absolute inset-0 bg-black opacity-60 dark:opacity-70 rounded-2xl"></div>

            <h1 class="relative font-josefin text-6xl text-center my-6 md:col-span-2">Breakfast Menu</h1>


            <div class="relative flex flex-col mx-4 items-center m-2 ">
                <h1 class="font-josefin text-3xl text-center my-4 col-span-2 text-gray-400">Full Breakfast</h1>

                <div class="flex flex-col justify-between items-center min-h-[91rem] w-full">

                    <div class="grid grid-cols-3 w-full ">
                        <div class="font-montserat col-span-2">
                            <div class="text-lg lg:text-3xl">Full Breakfast
                                <div class="flex m-2">
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs"
                                            data-tooltip="Gluten Free Adaptable">GF</span>
                                    </div>
                                </div>
                            </div>
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
                        </div>
                        <span class="text-lg lg:text-2xl place-self-start mx-auto">RON 55</span>
                    </div>

                    <div class="grid grid-cols-3 w-full">
                        <div class="font-montserat col-span-2">
                            <div class="text-lg lg:text-3xl">Full Steam Ahead
                                <div class="flex m-2">
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs"
                                            data-tooltip="Gluten Free Adaptable">GF</span>
                                    </div>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                2 Local pork sausages, 2 rashers of smoked bacon, 2 fried eggs, mushrooms, grilled
                                tomato, baked beans, hash brown and black pudding. With a choice of white toast,
                                wholemeal toast or fried slice.
                            </p>
                        </div>
                        <span class="text-lg lg:text-2xl place-self-start mx-auto">RON 70</span>
                    </div>

                    <div class="grid grid-cols-3 w-full">
                        <div class="font-montserat col-span-2">
                            <div class="text-lg lg:text-3xl ">Vegetarian Breakfast
                                <div class="flex m-2">
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs"
                                            data-tooltip="Gluten Free Adaptable">GF</span>
                                    </div>
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs" data-tooltip="Vegetarian">V</span>
                                    </div>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                2 Veggie sausages, fried egg, mushrooms with spinach, grilled tomato, hash brown, baked
                                beans. With a choice of white toast, wholemeal toast or fried slice.
                            </p>
                        </div>
                        <span class="text-lg lg:text-2xl place-self-start mx-auto">RON 50</span>
                    </div>

                    <div class="grid grid-cols-3 w-full">
                        <div class="font-montserat col-span-2">
                            <div class="text-lg lg:text-3xl">The Junior
                                <div class="flex m-2">
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs"
                                            data-tooltip="Gluten Free Adaptable">GF</span>
                                    </div>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                1 pork sausage, 1 smoked bacon, fried egg and baked beans. With a choice of white toast
                                or wholemeal toast.
                            </p>
                        </div>
                        <span class="text-lg lg:text-2xl place-self-start mx-auto">RON 40</span>
                    </div>

                    <div class="grid grid-cols-3 w-full">
                        <div class="font-montserat col-span-2">
                            <div class="text-lg lg:text-3xl flex">American Style Pancakes
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Served with syrup and fresh fruit.
                            </p>
                        </div>
                        <span class="text-lg lg:text-2xl place-self-start mx-auto">RON 50</span>
                    </div>

                    <div class="grid grid-cols-3 w-full">
                        <div class="font-montserat col-span-2">
                            <div class="text-lg lg:text-3xl flex">Toasted Waffles
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Served with syrup and fresh fruit
                            </p>
                        </div>
                        <span class="text-lg lg:text-2xl place-self-start mx-auto">RON 50</span>
                    </div>

                    <div class="grid grid-cols-3 w-full">
                        <div class="font-montserat col-span-2">
                            <div class="text-lg lg:text-3xl">Breakfast Burger
                                <div class="flex m-2">
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs"
                                            data-tooltip="Gluten Free Adaptable">GF</span>
                                    </div>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Floured bap filled with sausage, smoked bacon, fried egg and hash brown.
                            </p>
                        </div>
                        <span class="text-lg lg:text-2xl place-self-start mx-auto">RON 65</span>
                    </div>

                    <div class="grid grid-cols-3 w-full">
                        <div class="font-montserat col-span-2">
                            <div class="text-lg lg:text-3xl">Veggie Breakfast Burger
                                <div class="flex m-2">
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs"
                                            data-tooltip="Gluten Free Adaptable">GF</span>
                                    </div>
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs" data-tooltip="Vegetarian">V</span>
                                    </div>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Floured bap with veggie sausage, mushroom and spinach, fried egg and hash brown.
                            </p>
                        </div>
                        <span class="text-lg lg:text-2xl place-self-start mx-auto">RON 55</span>
                    </div>

                </div>
            </div>

            <div class="relative transform transition-all duration-150 flex flex-col mx-4 items-center m-2  ">
                <h1 class="font-josefin text-3xl text-center my-4 col-span-2 text-gray-400">Light Breakfast</h1>

                <div class="flex flex-col justify-between items-center min-h-[91rem] w-full">

                    <div class="grid grid-cols-3 w-full mt-4">
                        <div class="font-montserat col-span-2">
                            <div class="text-lg lg:text-3xl ">Scrambled eggs on toast
                                <div class="flex m-2">
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs"
                                            data-tooltip="Gluten Free Adaptable">GF</span>
                                    </div>
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs" data-tooltip="Vegetarian">V</span>
                                    </div>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Add Crispy Bacon -- RON 10
                                Add Smoaked Salmon -- RON 15
                            </p>
                        </div>
                        <span class="text-lg lg:text-2xl place-self-start mx-auto">RON 35</span>
                    </div>

                    <div class="grid grid-cols-3 w-full">
                        <div class="font-montserat col-span-2">
                            <div class="text-lg lg:text-3xl">Sqashed Avocado
                                <div class="flex m-2">
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs"
                                            data-tooltip="Gluten Free Adaptable">GF</span>
                                    </div>
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs" data-tooltip="Vegetarian">V</span>
                                    </div>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Served on either white or granary toast with poached eggs and grilled tomatoes.
                            </p>
                        </div>
                        <span class="text-lg lg:text-2xl place-self-start mx-auto">RON 50</span>
                    </div>

                    <div class="grid grid-cols-3 w-full">
                        <div class="font-montserat col-span-2">
                            <div class="text-lg lg:text-3xl">Smokey Bacon Sandwich
                                <div class="flex m-2">
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs"
                                            data-tooltip="Gluten Free Adaptable">GF</span>
                                    </div>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                3 rashes of bacon on white or granary bread.
                            </p>
                        </div>
                        <span class="text-lg lg:text-2xl place-self-start mx-auto">RON 45</span>
                    </div>

                    <div class="grid grid-cols-3 w-full">
                        <div class="font-montserat col-span-2">
                            <div class="text-lg lg:text-3xl">Sausage Sandwich
                                <div class="flex m-2">
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs"
                                            data-tooltip="Gluten Free Adaptable">GF</span>
                                    </div>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                2 pork sausages on white or granary bread.
                            </p>
                        </div>
                        <span class="text-lg lg:text-2xl place-self-start mx-auto">RON 40</span>
                    </div>

                    <div class="grid grid-cols-3 w-full">
                        <div class="font-montserat col-span-2">
                            <div class="text-lg lg:text-3xl">Eggs Benedict
                                <div class="flex m-2">
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs"
                                            data-tooltip="Gluten Free Adaptable">GF</span>
                                    </div>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Toasted floured breakfast muffin topped with organic ham, poached eggs and
                                hallandaise
                                sauce.
                            </p>
                        </div>
                        <span class="text-lg lg:text-2xl place-self-start mx-auto">RON 55</span>
                    </div>

                    <div class="grid grid-cols-3 w-full">
                        <div class="font-montserat col-span-2">
                            <div class="text-lg lg:text-3xl">Eggs Royal
                                <div class="flex m-2">
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs"
                                            data-tooltip="Gluten Free Adaptable">GF</span>
                                    </div>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Toasted floured breakfast muffin topped with smoked salmon, poached eggs and
                                hallandaise
                                sauce.
                            </p>
                        </div>
                        <span class="text-lg lg:text-2xl place-self-start mx-auto">RON 60</span>
                    </div>

                    <div class="grid grid-cols-3 w-full">
                        <div class="font-montserat col-span-2">
                            <div class="text-lg lg:text-3xl">Eggs Florentine
                                <div class="flex m-2">
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs"
                                            data-tooltip="Gluten Free Adaptable">GF</span>
                                    </div>
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs" data-tooltip="Vegetarian">V</span>
                                    </div>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Toasted floured breakfast muffin topped with spinach, poached eggs and hallandaise
                                sauce.
                            </p>
                        </div>
                        <span class="text-lg lg:text-2xl place-self-start mx-auto">RON 55</span>
                    </div>

                    <div class="grid grid-cols-3 w-full">
                        <div class="font-montserat col-span-2">
                            <div class="text-lg lg:text-3xl">Beans on Toast
                                <div class="flex m-2">
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs"
                                            data-tooltip="Gluten Free Adaptable">GF</span>
                                    </div>
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs" data-tooltip="Vegetarian">V</span>
                                    </div>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Served with white or granary toast.
                            </p>
                        </div>
                        <span class="text-lg lg:text-2xl place-self-start mx-auto">RON 35</span>
                    </div>

                    <div class="grid grid-cols-3 w-full">
                        <div class="font-montserat col-span-2">
                            <div class="text-lg lg:text-3xl">Mushrooms and spinach on toast
                                <div class="flex m-2">
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs"
                                            data-tooltip="Gluten Free Adaptable">GF</span>
                                    </div>
                                    <div
                                        class="bg-black rounded-full shadow-white shadow-md mx-2 h-4 w-4 text-white flex justify-center items-center">
                                        <span class="relative cursor-pointer text-xs" data-tooltip="Vegetarian">V</span>
                                    </div>
                                </div>
                            </div>
                            <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                                Sauted seasoned mushrooms with spinach on a choice of white or granary toast
                            </p>
                        </div>
                        <span class="text-lg lg:text-2xl place-self-start mx-auto">RON 45</span>
                    </div>

                </div>
            </div>

            <div class="relative font-josefin mx-auto my-4 border-2 rounded-2xl md:col-span-2">
                <h1 class="text-2xl p-4">Allergies / Dietary Requirements</h1>
                <p class="font-nunito text-sm p-4">Please speak to server if you have any allergies and dietary
                    requirements. All dishes are prepated fresh so most can be adapted to meet your needs.</p>
            </div>
        </div>
    `;

  return foodMenu;
}
