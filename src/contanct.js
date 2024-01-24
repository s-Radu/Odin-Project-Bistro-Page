import contactBackground from "./assets/images/contact.jpg";

// API KEY  AIzaSyDJ37T_VXSj-P-fG-pQsTlmZwYQ9QaRYuQ

let map;
// initMap is now async
export async function initMap() {
  // Request libraries when needed, not in the script tag.
  const { Map } = await google.maps.importLibrary("maps");
  // Short namespaces can be used.
  map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
