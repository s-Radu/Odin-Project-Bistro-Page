//>  AIzaSyDJ37T_VXSj-P-fG-pQsTlmZwYQ9QaRYuQ

import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyDJ37T_VXSj-P-fG-pQsTlmZwYQ9QaRYuQ",
  version: "weekly",
  libraries: ["places"],
});

const mapOptions = {
  center: {
    lat: 45.75755731887524,
    lng: 21.228189873342135,
  },
  zoom: 13,
  label: "L",
  title: "Lebăda neagră!",
};

export async function initMap() {
  loader
    .load()
    .then((google) => {
      const map = new google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );
      new google.maps.Marker({
        position: mapOptions.center,
        map,
        label: "L",
        title: "Lebăda neagră!",
        animation: google.maps.Animation.DROP,
      });
    })
    .catch((e) => {
      console.log(e);
    });
}
