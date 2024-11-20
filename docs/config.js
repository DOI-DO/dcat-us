var respecConfig = {
  specStatus: "base",
  group: "",
  latestVersion: "https://doi-do.github.io/dcat-us/",
  logos: [],
  maxTocLevel: 2,
  overrideCopyright: true,
  lint: {
    "no-w3c-group": false, // Disable linting for W3C group association
  },
  editors: [
    {
      name: "Thomas Dabolt",
      company: "US Department of Interior",
      companyURL: "https://www.doi.gov",
      note: "",
    },
    {
      name: "Michael Ratcliffe",
      company: "US Census Bureau",
      companyURL: "https://www.census.gov",
      note: "",
    },
    {
      name: "Open Government Data",
      company: "Data.gov",
      companyURL: "https://www.data.gov",
    },
    {
      name: "Stephane Fellah",
      company: "Image Matters LLC",
      companyURL: "https://www.imagemattersllc.com",
      note: "",
    },
    {
      name: "Sofiane Fellah",
      company: "Image Matters LLC",
      companyURL: "https://www.imagemattersllc.com",
      note: "",
    },
    {
      name: "John Davidson",
      company: "Image Matters LLC",
      companyURL: "https://www.imagemattersllc.com",
      note: "",
    },
  ],
  github: {
    branch: "main",
    repoURL: "https://github.com/DOI-DO/dcat-us/",
  },
  edDraftURI: "https://doi-do.github.io/dcat-us/",
  
  localBiblio: {
    CC: {
      href: "http://creativecommons.org/licenses/",
      title: "About The Licenses",
      publisher: "Creative Commons",
    },
    CC0: {
      href: "http://creativecommons.org/publicdomain/zero/1.0/",
      title: "CC0 1.0 Universal (CC0 1.0) Public Domain Dedication",
      publisher: "Creative Commons",
    },
    "CC-BY": {
      href: "https://creativecommons.org/licenses/by/4.0/",
      title: "CC-BY 4.0 Attribution 4.0 International",
      publisher: "Creative Commons",
    },
    "CLD-FREQ": {
      href: "http://dublincore.org/groups/collections/frequency/",
      title: "Dublin Core Collection Description Frequency Vocabulary",
      publisher: "Dublin Core Collection Description Task Group",
      date: "2013-06-26",
    },
    "DCMI-TYPES": {
      href: "https://www.dublincore.org/specifications/dublin-core/dcmi-terms/",
      title: "DCMI Metadata Terms",
      publisher: "DCMI Usage Board",
      date: "2020-01-20",
    },
    PDDL: {
      href: "http://opendatacommons.org/licenses/pddl/",
      title: "Public Domain Dedication and License (PDDL)",
      publisher: "Open Data Commons",
    },

    "DCAT-US": {
      href: "https://github.com/DOI-DO/dcat-us/",
      title: "DCAT-US Version 3.0",
      publisher: "https://github.com/DOI-DO",
    },
    "DCAT-US-1.1": {
      href: "https://resources.data.gov/resources/dcat-us/",
      title: "DCAT-US Schema v1.1",
      publisher: "https://resources.data.gov/",
    },
    "DCAT-US-GITHUB-ISSUES": {
      href: "https://github.com/DOI-DO/dcat-us/issues",
      title: "GitHub issues for DCAT-US Version 3.0",
      publisher: "https://github.com/DOI-DO",
    },
    FAIR: {
      title:
        "The FAIR Guiding Principles for scientific data management and stewardship",
      authors: ["Mark D. Wilkinson"],
      etAl: true,
      status: "Scientific Data, vol. 3, Article nr. 160018",
      publisher: "Nature",
      href: "https://doi.org/10.1038/sdata.2016.18",
    },
    GCMD: {
      href: "https://data.nasa.gov/d/gt6i-nuv6",
      title: "Global Change Master Directory (GCMD)",
      publisher: "https://www.earthdata.nasa.gov/",
    },
    GEONAMES: {
      href: "http://sws.geonames.org/",
      title: "GeoNames",
      publisher: "Geonames",
    },
    GeoSPARQL11: {
      href: "https://opengeospatial.github.io/ogc-geosparql/geosparql11/spec.html",
      title: "OGC GeoSPARQL 1.1",
      publisher: "OGC",
      status: "Draft",
      date: "16 December 2020",
    },
    HYDRA: {
      href: "https://www.hydra-cg.com/spec/latest/core/",
      title:
        "Hydra Core Vocabulary - A Vocabulary for Hypermedia-Driven Web APIs",
      publisher: "https://www.hydra-cg.com",
    },

    "ISO 639-1": {
      href: "https://id.loc.gov/vocabulary/iso639-1",
      title:
        "ISO 639-1: Codes for the Representation of Names of Languages - Part 1: Two-letter codes for languages",
      publisher: "Library of Congress",
    },
    "NGDA-THEMES": {
      href: "https://www.fgdc.gov/what-we-do/manage-federal-geospatial-resources/a-16-portfolio-management/ngda-themes-and-datasets",
      title: "NGDA Data Themes",
      publisher: "https://www.fgdc.gov/",
    },
    ODRS: {
      href: "http://schema.theodi.org/odrs/",
      title: "Open Data Rights Statement Vocabulary (ODRS)",
      publisher: "https://theodi.org/",
    },
    "OGC-EPSG": {
      href: "http://www.opengis.net/def/crs/EPSG/",
      title: "OGC EPSG register of coordinate reference systems",
      publisher: "https://www.ogc.org/",
    },
    PAV: {
      href: "http://purl.org/pav/",
      title: "PAV - Provenance, Authoring and Versioning",
      publisher: "http://www.mindinformatics.org/",
    },
    PROV: {
      href: "http://www.w3.org/ns/prov/",
      title: "The PROV Namespace",
      publisher: "Provenance Working Group",
    },
    "QUDT-UNITS": {
      href: "http://www.qudt.org/vocab/unit",
      title: "QUDT Units Vocabulary ",
      publisher: "http://www.qudt.org",
    },
    "SDMX-ATTRIBUTE": {
      href:"http://purl.org/linked-data/sdmx/2009/attribute",
      title:"SDMX Attribute Concept Vocabulary",
      publisher:"SDMX",
    },
    SPDX: {
      href: "https://spdx.org/rdf/terms/",
      title: "SPDX 2.2.1",
      publisher: "The Linux Foundation",
    },
    RESPEC: {
      href: "https://respec.org/docs/",
      title: "Respec.org",
      publisher: "W3C",
    },
    "VOCAB-ADMS-SKOS": {
      href: "http://purl.org/adms",
      title:
        "Controlled vocabularies for the Asset Description Metadata Schema",
      publisher: "http://ec.europa.eu/",
    },

    "DATA-GOV-LICENSE": {
      href: "https://TBD/vocabulary/licenses",
      title:
        "Data.Gov List of licenses for US opendata to enter in dct:license " ,
      publisher: "United States Government",
    },
    "DATA-GOV": {
      href: "https://data.gov/",
      title: "data.gov - The official portal for US Data",
      publisher: "United States Government",
    },
    "DATA-GOV-AR": {
      href: "http://TBD/access-right",
      title: "Data.gov Access Rights Named Authority List (TBD)",
      publisher: "United States Government",
    },
    "DATA-GOV-AVAILABILITY": {
      href: "http://TBD/planned-availability",
      title: "Data.gov Distribution availability vocabulary (TBD)",
      publisher: "United States Government",
    },
    "DATA-GOV-CB": {
      href: "http://TBD/corporate-bodies",
      title:
        "Data.gov Vocabularies Corporate bodies Named Authority List  (TBD)",
      publisher: "United States Government",
    },
    "DATA-GOV-CONT": {
      href: "http://TBD/continent",
      title: "Data.gov Vocabularies Continents Named Authority List (TBD)",
      publisher: "United States Government",
    },
    "DATA-GOV-COUNTRY": {
      href: "http://id.loc.gov/vocabulary/countries",
      title: "MARC List for Countries (TBD)",
      publisher: "Library of Congress",
    },
    "DATA-GOV-FT": {
      href: "http://TBD/file-type",
      title: "Data.gov Vocabularies File Type Named Authority List (TBD)",
      publisher: "United States Government",
    },

    "DATA-GOV-LPA": {
      href: "http://TBD/LimitationsOnPublicAccess",
      title: "Data.Gov Limitations on Public Access (TBD)",
      publisher: "United States Government",
    },
    "DATA-GOV-PLACE": {
      href: "http://TBD/place",
      title: "Data.gov Vocabularies Places Named Authority List (TBD)",
      publisher: "United States Government",
    },
    "DATA-GOV-PV": {
      href: "http://TBD/continent",
      title: "Data.gov Vocabularies Continents Named Authority List (TBD)",
      publisher: "United States Government",
    },
    "DATA-GOV-REG": {
      href: "https://TBD/registry",
      title: "Data.Gov registry (TBD)",
      publisher: "United States Government",
    },
    "DATA-GOV-RPR": {
      href: "http://resources.data.gov/vocab/ResponsiblePartyRole",
      title: "Data.Gov Responsible Party Roles  (TBD)",
      publisher: "United States Government",
    },
    "DATA-GOV-SDST": {
      href: "http://resources.data.gov/vocab/SpatialDataServiceTypes",
      title: "Data.Gov Spatial Data Service Types (TBD)",
      publisher: "United States Government",
    },
    "DATA-GOV-SRT": {
      href: "http://resources.data.gov/vocab/SpatialRepresentationType",
      title: "Data.Gov Spatial Data Representation (TBD)",
      publisher: "United States Government",
    },
    "DATA-GOV-THEME": {
      href: "http://TBD/data-theme",
      title: "Data.gov Dataset Theme Vocabulary (TBD)",
      publisher: "TBD",
    },
  },
};


