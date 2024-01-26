import drinksBackground from "./assets/images/drinks.jpg";

export function drinksPage() {
  let drinksPage = document.createElement("div");
  drinksPage.className =
    "relative bg-cover bg-no-repeat bg-center rounded-2xl m-4 container mx-auto grid grid-cols-1 place-content-center min-h-[92rem] text-white";
  drinksPage.id = "drinksPage";
  drinksPage.style.backgroundImage = `url(${drinksBackground})`;
  drinksPage.innerHTML = `
  <div class="absolute inset-0 bg-black opacity-60 dark:opacity-70 rounded-2xl"></div>

  <h1 class="relative font-josefin text-6xl text-center my-4 col-span-2">Drinks</h1>

  <div class="relative flex flex-col mx-4 items-center m-4 col-span-3 md:mx-10">

      <div class="grid grid-cols-1 md:grid-cols-2 justify-between items-center min-h-[91rem] w-full">


          <div class="flex justify-between flex-col h-full">
              <div class="m-6">
                  <h1 class="relative font-josefin text-5xl text-center my-4 text-gray-400 ">Coffee</h1>
                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Espresso
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON 10</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Double Espresso
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON 13</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Cappuccino
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON 15</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Flat White
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON 15</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Americano
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON 14</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Mocha
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON 15</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Latte
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON 15</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Hot Chocolate
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON 10</span>
                  </div>
              </div>

              <div class="m-6">
                  <h1 class="relative font-josefin text-5xl text-center my-4 text-gray-400  ">Soft Drinks</h1>
                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Fresh Orange
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON 15</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Fresh Pineapple
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON 15</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Fresh Apple
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON 15</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Fresh Carrot
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON 15</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Cans of Soft Drinks
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp5</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Draft Soft Drink
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp7</span>
                  </div>
              </div>

              <div class="m-6">
                  <h1 class="relative font-josefin text-5xl text-center my-4 text-gray-400  ">Wine</h1>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">House White
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp 5</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">House Rose
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp5</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">House Red
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp 5</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">La Pintora Sauvigon
                              Blanc
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp 7</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Previata Pinot Grigio
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp 7</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Chardonnay
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp 7</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Pinot Grigio Rose
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp 6</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Wild River White
                              Zinfandel
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp 6</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">La Pintora Merlot
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp 6</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Scenic Ridge Shiraz
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp 6</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Los Picos Malbec
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp 6</span>
                  </div>
              </div>

              <div class="m-6">
                  <h1 class="relative font-josefin text-5xl text-center my-4 text-gray-400  ">Gin</h1>
                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Gordons Original, Lemon, Orange or
                              Pink
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp6</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Beefeater
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp 5</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Bombay Sapphire
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp 6</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Hendricks
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp 7</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Boe Violet Gin
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp 5</span>
                  </div>
              </div>

          </div>

          <div class="m-6 flex justify-between flex-col h-full">
              <h1 class="relative font-josefin text-5xl text-center my-4 text-gray-400  ">Cocktails</h1>
              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Cosmo
                      </p>
                      <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                          Vodka, Cointreau and Lemonade shaken over ice,
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON 17</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Sex on The Beach
                      </p>
                      <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                          Vodka,, Orange Juice Peach Schnapps, Cranberry Juice blended over
                          crushed ice with a touch of Grenadine
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON 17</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Tequila Sunrise
                      </p>
                      <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                          Tequila, orange juice, grenadine, orange slice
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON 17</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">French Martini
                      </p>
                      <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                          Smirnoff Vodka, Chambord, fresh pineapple juice, shaken over ice and
                          served with fresh raspberries.
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON 17</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Cosmo
                      </p>
                      <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                          Vodka, Cointreau and Lemonade shaken over ice,
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON 17</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Espresso Martini
                      </p>
                      <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                          Smirnoff vodka, kahlua , one shot espresso , topped with coffee beans
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON 18</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Classic Mojito
                      </p>
                      <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                          White rum, fresh mint, lime, topped with soda . Also available in
                          strawberry
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON 18</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Strawberry or Mango Daiquiri
                      </p>
                      <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                          Fresh Strawberries or Mango blended with Bacardi, Peach Schnapps,
                          lime juice topped with lemonade
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON 18</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Blue Lagoon
                      </p>
                      <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                          Blue curacao, vodka, lemonade, served with orange slice
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON 18</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Berry Bakewell
                      </p>
                      <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                          Smirnoff vodka, disaronno, strawberry puree, cranberry topped with
                          whipped cream and a strawberry
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON 18</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Pornstar Martini
                      </p>
                      <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                          Absolute vanilla vodka, passoa , pineapple juice , passionfruit puree ,
                          topped with fresh passionfruit , served with a shot of prosecco
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON 18</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Purple Rain
                      </p>
                      <p class="w-2/4 ml-4 mt-4 text-sm font-nunito mb-4 pb-2 border-b-2 indent-2">
                          Premium FRIS vodka, blue curacao orange and raspberry liqueurs, mixed with our
                          homemade
                          cloudy lemonade and a splash of grenadine
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON 20</span>
              </div>
          </div>

          <div class="m-6 flex justify-between flex-col h-full">
              <h1 class="relative font-josefin text-5xl text-center my-4 text-gray-400 ">Wiskey, Bourbon &
                  Malt
              </h1>
              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Famous Grouse
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp7</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Jack Daniel's
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp7</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Canadian Club
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp7</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Gentleman Jack
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp7</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Johnny Walker Black Label
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp7</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Jameson Irish Whiskey
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp7</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Glen Moray Spey Side Single Malt
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp7</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Highland Park 12 years old
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp7</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Glenmorangie Single malt
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp7</span>
              </div>

              <div class="grid grid-cols-3 w-full my-2">
                  <div class="font-montserat col-span-2">
                      <p class="text-xl lg:text-4xl m-2">Macallan 12-year-old
                      </p>
                  </div>
                  <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp7</span>
              </div>
          </div>

          <div>
              <div class="m-6">
                  <h1 class="relative font-josefin text-5xl text-center my-4 text-gray-400  ">Beers</h1>
                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">John Smiths
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp4</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Budweiser
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp4</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Corona
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp4</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Birra Moretti
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp4</span>
                  </div>
              </div>

              <div class="m-6">
                  <h1 class="relative font-josefin text-5xl text-center my-4 text-gray-400  ">Rum</h1>
                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Bacardi
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp7</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Malibu
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp7</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Havana
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp7</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Morgan's Spiced Rum
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp7</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Kraken
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp7</span>
                  </div>
              </div>

              <div class="m-6">
                  <h1 class="relative font-josefin text-5xl text-center my-4 text-gray-400  ">Vodka</h1>
                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Smirnoff Red label
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp7</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Ciroc
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp5</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Russian Standard
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp6</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Absolute citrus, raspberry or
                              vanilla
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp7</span>
                  </div>

                  <div class="grid grid-cols-3 w-full my-2">
                      <div class="font-montserat col-span-2">
                          <p class="text-xl lg:text-4xl m-2">Grey Goose
                          </p>
                      </div>
                      <span class="text-xl md:text-2xl place-self-center">RON &nbsp&nbsp5</span>
                  </div>
              </div>
          </div>

      </div>
  </div>
    `;

  return drinksPage;
}
