export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/";

export const LOGO_URL =
  "https://static.vecteezy.com/system/resources/thumbnails/011/468/885/small_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg";

const PROXY_URL = "https://corsproxy.org/?";

const RESTAURANT_API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?page_type=DESKTOP_WEB_LISTING&lat=19.1889541&lng=72.835543";

export const PROXY_API_URL = PROXY_URL + encodeURIComponent(RESTAURANT_API_URL);
