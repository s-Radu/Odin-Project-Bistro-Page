import homePageBackground from "./assets/images/home-page.jpg";

export function homePage() {
  let homePage = document.createElement("div");
  homePage.className =
    "relative container mx-auto my-4 bg-cover bg-no-repeat bg-center rounded-2xl h-[60rem] md:h-[45rem]";
  homePage.style.backgroundImage = `url(${homePageBackground})`;
  homePage.innerHTML = `
  <div class="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
            <div class="absolute inset-0 container mx-auto flex flex-col justify-evenly items-center rounded-2xl">
                <h1 class="relative text-white text-center font-josefin text-5xl p-2 pb-4 border-b-2 w-1/2">Bistro:
                    Lebăda
                    neagră
                </h1>
                <p class="relative font-josefin text-xl p-2 text-center text-white m-2 md:mx-10 lg:mx-20 xl:mx-36">
                    Welcome to our cozy and inviting bistro, where everyone is embraced with open arms. Whether you're a
                    student seeking a place to study with good music and delicious food, a bookworm in need of a
                    relaxing corner, or someone looking to savor a delightful meal with friends, our bistro is the
                    perfect haven for you. We take pride in offering separate areas that cater to both focused studying
                    and social gatherings, ensuring that everyone feels at home. Our menu features simple yet flavorful
                    dishes made with fresh, seasonal ingredients, and we are committed to providing a comfortable space
                    for you to enjoy good food and conversation. Come and experience the unique blend of casual comfort
                    and quality dining that our bistro has to offer
                </p>
            </div>
    `;

  return homePage;
}
