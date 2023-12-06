module.exports = {
  isDevel: true,
  inMante: false, // set to true and deploy if you want to set a maintenance message in all the services
  enabledLangs: ["es", "en"],
  mainDomain: "portalbiodiversidad.cl", // used for cookies (without http/https)
  mainUrl: "https://portalbiodiversidad.cl",
  baseFooterUrl: "https://branding.portalbiodiversidad.cl/brand-2023",
  services: {
    collectory: { url: "https://collections.portalbiodiversidad.cl", title: "Collections" },
    biocache: { url: "https://records.portalbiodiversidad.cl", title: "Occurrence records" },
    biocacheService: {
      url: "https://biocache.portalbiodiversidad.cl",
      title: "Occurrence records webservice",
    },
    bie: { url: "https://bie.portalbiodiversidad.cl", title: "Species" },
    // This bieService var is used by the search autocomplete. With your BIE
    // service running and well indexed, you can put here your url
    bieService: {
      url: "https://bie-ws.portalbiodiversidad.cl",
      title: "Species webservice",
    },
    regions: { url: "https://regions.portalbiodiversidad.cl", title: "Regions" },
    lists: { url: "https://lists.portalbiodiversidad.cl", title: "Species List" },
    spatial: { url: "https://spatial.portalbiodiversidad.cl", title: "Spatial Portal" },
    images: { url: "https://images.portalbiodiversidad.cl", title: "Images Service" },
    cas: { url: "https://auth.portalbiodiversidad.cl", title: "CAS" },
  },
  otherLinks: [
    { title: "Datasets", url: "https://collections.portalbiodiversidad.cl/datasets" },
    {
      title: "Explore your area",
      url: "https://records.portalbiodiversidad.cl/explore/your-area/",
    },
    { title: "Datasets", url: "https://collections.portalbiodiversidad.cl/datasets" },
    { title: "twitter", url: "", icon: "twitter" },
  ],
};
