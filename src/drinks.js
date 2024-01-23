import drinksBackground from "./assets/images/drinks.jpg";

export function drinksPage() {
  let drinksPage = document.createElement("div");
  drinksPage.className =
    "relative bg-cover bg-no-repeat bg-center rounded-2xl m-4 container mx-auto grid grid-cols-1 place-content-center min-h-[92rem] text-white";
  drinksPage.style.backgroundImage = `url(${drinksBackground})`;
  drinksPage.innerHTML = `
    <div class="absolute inset-0 bg-black opacity-60 dark:opacity-70 rounded-2xl"></div>

    <h1 class="relative font-josefin text-6xl text-center my-4 col-span-2">Drinks</h1>

    <div
        class="relative transform transition-all duration-150 flex flex-col mx-4 items-center m-4 opacity-70 col-span-3 md:mx-10  hover:opacity-100">

        <div class="grid grid-cols-1 md:grid-cols-2 justify-between items-center min-h-[91rem] w-full">

            <div class="m-6">
                <h1 class="relative font-josefin text-5xl text-center my-4 ">Coffee</h1>
                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Espresso
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 10</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Double Espresso
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 13</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Cappuccino
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 15</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Flat White
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 15</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Americano
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 14</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Mocha
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 15</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Latte
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 15</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Hot Chocolate
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 10</span>
                </div>
            </div>

            <div class="m-6">
                <h1 class="relative font-josefin text-5xl text-center my-4  ">Soft Drinks</h1>
                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Fresh Orange
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 15</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Fresh Pineapple
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 15</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Fresh Apple
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 15</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Fresh Carrot
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 15</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Cans of Soft Drinks
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 5</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Draft Soft Drink
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>
            </div>

            <div class="m-6">
                <h1 class="relative font-josefin text-5xl text-center my-4  ">Vodka</h1>
                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Smirnoff Red label
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Ciroc
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 5</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Russian Standard
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 6</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Absolute citrus, raspberry or vanilla
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Grey Goose
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 5</span>
                </div>
            </div>

            <div class="m-6">
                <h1 class="relative font-josefin text-5xl text-center my-4  ">Gin</h1>
                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Gordons Original, Lemon, Orange or Pink
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 6</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Beefeater
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 5</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Bombay Sapphire
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 6</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Hendricks
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Boe Violet Gin
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 5</span>
                </div>

            </div>

            <div class="m-6">
                <h1 class="relative font-josefin text-5xl text-center my-4  ">Rum</h1>
                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Bacardi
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Malibu
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Havana
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Morgan's Spiced Rum
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Kraken
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>
            </div>

            <div class="m-6">
                <h1 class="relative font-josefin text-5xl text-center my-4  ">Wiskey, Bourbon & Malt</h1>
                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Famous Grouse
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Jack Daniel's
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Canadian Club
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Gentleman Jack
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Johnny Walker Black Label
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Jameson Irish Whiskey
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Glen Moray Spey Side Single Malt
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Highland Park 12 years old
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Glenmorangie Single malt
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Macallan 12-year-old
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>
            </div>

            <div class="m-6">
                <h1 class="relative font-josefin text-5xl text-center my-4  ">Cocktails</h1>
                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Cosmo
                        </p>
                        <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                            Vodka, Cointreau and Lemonade shaken over ice,
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 17</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Sex on The Beach
                        </p>
                        <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                            Vodka,, Orange Juice Peach Schnapps, Cranberry Juice blended over
                            crushed ice with a touch of Grenadine
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 17</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Tequila Sunrise
                        </p>
                        <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                            Tequila, orange juice, grenadine, orange slice
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 17</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">French Martini
                        </p>
                        <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                            Smirnoff Vodka, Chambord, fresh pineapple juice, shaken over ice and
                            served with fresh raspberries.
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 17</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Cosmo
                        </p>
                        <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                            Vodka, Cointreau and Lemonade shaken over ice,
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 17</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Espresso Martini
                        </p>
                        <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                            Smirnoff vodka, kahlua , one shot espresso , topped with coffee beans
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 18</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Classic Mojito
                        </p>
                        <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                            White rum, fresh mint, lime, topped with soda . Also available in
                            strawberry
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 18</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Strawberry or Mango Daiquiri
                        </p>
                        <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                            Fresh Strawberries or Mango blended with Bacardi, Peach Schnapps,
                            lime juice topped with lemonade
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 18</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Blue Lagoon
                        </p>
                        <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                            Blue curacao, vodka, lemonade, served with orange slice
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 18</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Berry Bakewell
                        </p>
                        <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                            Smirnoff vodka, disaronno, strawberry puree, cranberry topped with
                            whipped cream and a strawberry
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 18</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Pornstar Martini
                        </p>
                        <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                            Absolute vanilla vodka, passoa , pineapple juice , passionfruit puree ,
                            topped with fresh passionfruit , served with a shot of prosecco
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 18</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Purple Rain
                        </p>
                        <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                            Premium FRIS vodka, blue curacao orange and raspberry liqueurs, mixed with our
                            homemade
                            cloudy lemonade and a splash of grenadine
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 20</span>
                </div>
            </div>

            <div class="m-6">
                <h1 class="relative font-josefin text-5xl text-center my-4  ">Wine</h1>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">House White
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 5</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">House Rose
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 5</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">House Red
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 5</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">La Pintora Sauvigon
                            Blanc
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Previata Pinot Grigio
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Chardonnay
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 7</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Pinot Grigio Rose
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 6</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Wild River White
                            Zinfandel
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 6</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">La Pintora Merlot
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 6</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Scenic Ridge Shiraz
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 6</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Los Picos Malbec
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 6</span>
                </div>
            </div>

            <div class="m-6">
                <h1 class="relative font-josefin text-5xl text-center my-4  ">Beers</h1>
                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">John Smiths
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 4</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Budweiser
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 4</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Corona
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 4</span>
                </div>

                <div class="flex justify-between items-center w-full">
                    <div class="font-montserat">
                        <p class="text-xl md:text-4xl flex items-center">Birra Moretti
                        </p>
                    </div>
                    <span class="text-xl md:text-2xl m-4">RON 4</span>
                </div>
            </div>

        </div>
    </div>
    `;

  return drinksPage;
}
