export default {
  appname: "ogf-overpass-turbo",
  defaultServer: "//overpass.ogf.rent-a-planet.com/api/",
  suggestedServers: [
    "//overpass.ogf.rent-a-planet.com/api/",
    "//ogfoverpass.rent-a-planet.com/api/"
  ],
  defaultTiles: "//tiles04.rent-a-planet.com/ogf-carto/{z}/{x}/{y}.png",
  tileServerAttribution:
    "Tiles and data courtesy OpenGeofiction and contributors.",
  suggestedTiles: [
    "//tiles04.rent-a-planet.com/ogf-carto/{z}/{x}/{y}.png",
    "https://tiles04.rent-a-planet.com/ogf-topo/{z}/{x}/{y}.png"
  ],
  defaultMapView: {
    lat: 20.727,
    lon: 86.715,
    zoom: 16
  },
  maxMapZoom: 19,
  short_url_service: "",
  html2canvas_use_proxy: false,
  // api key for osmnames geocoder, go to http://osmnames.org/api/ to get one if you run your own overpass instance
  osmnamesApiKey: "gtXyh2mBSaN5zWqqqQRh",
  // osmAuth configuration object (used for syncing saved queries). expects an osm-auth config object (min. the oauth_consumer_key and oauth_secret must be given), see https://github.com/osmlab/osm-auth#getting-keys
  osmAuth: null
};
