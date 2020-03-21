var simplemaps_usmap_mapdata={
  main_settings: {
    //General settings
		width: "700", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    popups: "detect",

		//State defaults
		state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "https://simplemaps.com",
    border_size: 1.5,
    border_color: "#ffffff",
    all_states_inactive: "no",
    all_states_zoomable: "no",

		//Location defaults
		location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

		//Label defaults
		label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",

		//Zoom settings
		manual_zoom: "no",
    back_image: "no",
    arrow_box: "no",
    navigation_size: "40",
    navigation_color: "#f7f7f7",
    navigation_border_color: "#636363",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

		//Advanced settings
		div: "map",
    auto_load: "yes",
    rotate: "0",
    url_new_tab: "yes",
    images_directory: "default",
    import_labels: "no",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    HI: {
      name: "Hawaii",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1gzHPTsRxDO82NxzamfWJEN-5ozlKXxuwNENU3YltHQ4/edit"
    },
    AK: {
      name: "Alaska",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1dAKwkT28oyagzEqJIbTKv_qCaeeqKncGwgOr_1qbRL0/edit"
    },
    FL: {
      name: "Florida",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1S0bfzOavYQWBmeHcjFAr7F9thYJIYBIdxjRV7Vzyk98/edit",
      inactive: "no"
    },
    NH: {
      name: "New Hampshire",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1NRMtdbjrA9git_vFld7Syy8kokxIrPkswWLOz_yWOe4/edit"
    },
    VT: {
      name: "Vermont",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1_NDxoQk8qikr2f7wl3izRJ27fhaTenqBW9qJBt_Wuxw/edit"
    },
    ME: {
      name: "Maine",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1tdb2875kCLNpwhJMk7u_BrGkMF-dsleCHDa2BLSsOR4/edit"
    },
    RI: {
      name: "Rhode Island",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/13lrw2cwNhOrGyxOQIJeb-C6CPVmF9ycS_kNHOmBXldI/edit"
    },
    NY: {
      name: "New York",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1_J_PAxOgqKz_M9ybGaji8eNeQjUxg2XwmUCoWlZgU6g/edit"
    },
    PA: {
      name: "Pennsylvania",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1VRfvy3njjh6SkENW-tbNK1rEaE2LNRsy8iniue9HQ5k/edit"
    },
    NJ: {
      name: "New Jersey",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1B6cvuJim7VBa-806ynU9fOXQyZ03efQQcOebQpIQGtI/edit"
    },
    DE: {
      name: "Delaware",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1jUla068K_oJWbp1HSuE4InwJXJA5Wu1KVxGvSTW_hb4/edit"
    },
    MD: {
      name: "Maryland",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1cXhdjInID4tY46HdH6WfgDyWHQBfucP7yKq3Wt3hRlI/edit"
    },
    VA: {
      name: "Virginia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1ZoocpiUNLT2wnkqXSg_Ah8cbypfLSskVgAsfbKR4MWE/edit"
    },
    WV: {
      name: "West Virginia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1qHd7r9EJpzUFaahtmJTLsnrM5Treu4HDExz2qFJtEd0/edit"
    },
    OH: {
      name: "Ohio",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1lovkuk0Lwz0Mq1PR6smICv6dQ-WJu8GEaOmVVoVxSTk/edit"
    },
    IN: {
      name: "Indiana",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1jvIppFCcjnQ3LnY_H5vO9hWTfgo9dgXKyHlqy6ok2Ic/edit"
    },
    IL: {
      name: "Illinois",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1TbBWy7MfP0XfiDKey667jh3NbYzzI4ZHsz9CdXJ2avQ/edit"
    },
    CT: {
      name: "Connecticut",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1k_diz77avU7GjuzJUVdOeDxIuINmyGIPe_su4bzQdOk/edit"
    },
    WI: {
      name: "Wisconsin",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1XiWx1sFMv4n8J7AOgcXzseTeiLggGKQEEtYzObwc48Q/edit"
    },
    NC: {
      name: "North Carolina",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1xLbyOOum2344AEJUCXmUMu0dSut0NRWjhF-Ph7okot4/edit"
    },
    DC: {
      name: "District of Columbia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1P2O72hONcPnfqCv4CuZY_tEmVfXE2JOMSi3EMe8MHDI/edit"
    },
    MA: {
      name: "Massachusetts",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1akVuPv8W8Wip3Y3qc-Ajhnzs_Hp98Jc4bP-u9d9VQjw/edits"
    },
    TN: {
      name: "Tennessee",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1yB_pg-ZaUYCIdjtqcSraMzhJ4J2NTuC-Gov49DSmois/edit"
    },
    AR: {
      name: "Arkansas",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1BZZABXYPRRzGmLyDO7AyI6Bq-wMapkFUc1tz6WHxdNE/edit"
    },
    MO: {
      name: "Missouri",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1nzLKKr9oJT3_ChdGN4NTasdJrwPwQID34QiZHzc6qaE/edit"
    },
    GA: {
      name: "Georgia",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1OdOsO1yColIBwkQBCFvtIcY5aP8U1dPS6dbmUE1qBoQ/edit"
    },
    SC: {
      name: "South Carolina",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/16rXOKny6Sg8PVOSjN42QobGEWQUobnxuLelWwIUGGQM/edit"
    },
    KY: {
      name: "Kentucky",
      description: "default",
      color: "default",
      zoomable: "no",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1AD2oUbVSZBzPKPnXTqgGFTEkMhB0dSqLQVf7jCGj8p8/edit"
    },
    AL: {
      name: "Alabama",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1Iawmjeb8M8wgSXqkHJtNnWVfLEufdeu1xZAha4r2B80/edit"
    },
    LA: {
      name: "Louisiana",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1sofU0_5LQLkVSHvCEZyv_ZW_oX3q6dJxIkEG7AFBnM0/edit"
    },
    MS: {
      name: "Mississippi",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/11MowvtHOgBI8P2xBSXTzB75rmm12RnLebQq2lK1mHiM/edit"
    },
    IA: {
      name: "Iowa",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1GbOri_GAyi9Nu9Qchf_Z1jJ2zo0VIah2LHHPzIPf64I/edit"
    },
    MN: {
      name: "Minnesota",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1R6GFgchwzy6f1RDNO_ZPrnf1pFXxBY61m_e-MRNY4Og/edit"
    },
    OK: {
      name: "Oklahoma",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/17KtQxdBB8tbIvGqWjRhd_EOSd1l2ey6s-yg9Xaxh5tE/edit"
    },
    TX: {
      name: "Texas",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1dL2Pgcs1VWV7CQNsrOhu2xqumr3FjqWRdaVyhxm7cLI/edit"
    },
    NM: {
      name: "New Mexico",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1TDrR_tVEOiBkNGTODV0KooWJWq5fKdQHKh3Q6jpXEhs/edit"
    },
    KS: {
      name: "Kansas",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1InofTVFo29HjC6MR-ZVJ4ohYnrvaGC02QjcXDAl1HIQ/edit"
    },
    NE: {
      name: "Nebraska",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/17tGRf5giUV4ED9mHw24sB1zMys6oaiAzwQEuXSJKRS8/edit"
    },
    SD: {
      name: "South Dakota",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1JEdhXaIzCQUWFKG-bDFw9SFycQ9M4l6U8qrb6N1TlS0/edit"
    },
    ND: {
      name: "North Dakota",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1HRuJxWQ1ZXfxYU_111MX-qqQ7c1SZddIB5CwG7M3gJg/edit"
    },
    WY: {
      name: "Wyoming",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1AyEdndO7Gri-mxZH78BDSO68Fo_5SIgzfmpWJURQbks/edit"
    },
    MT: {
      name: "Montana",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/11RCbH3sn7nIzJol6ZAytIjree-TfpgXInh0DaYjugSQ/edit"
    },
    CO: {
      name: "Colorado",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1-8E0mc5LQzBv_jKri0DVM8qc0InYBuBxAjE1_KIxDtU/edit"
    },
    UT: {
      name: "Utah",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1xVm0h5tucgs0tlmst069GPX9Tv82FOGfKqHo7wSYpZ0/edit"
    },
    AZ: {
      name: "Arizona",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1u1Rs-RkTwxxmSAn84Wx4itsY9iK542h7X7rDwTubBaE/edit"
    },
    NV: {
      name: "Nevada",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1TzI4yS8wXDrEXE-ZMDj78UdeVjneXZ2pwoMEMxMbj9c/edit"
    },
    OR: {
      name: "Oregon",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1eaRoyk1gtxuC7O2VeNqHoV_myvjTjes4ZZacHZrH7I0/edit"
    },
    WA: {
      name: "Washington",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1RCZCFQdd-4Nc6QitCe-yql5hTML7hnsmnXJzVMhSaq4/edit"
    },
    CA: {
      name: "California",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/11dZ8NHzcX1MkH11xixdwNrAddPonQgFKmWd7xC7m7TE/edit"
    },
    MI: {
      name: "Michigan",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1Y6ZtvIG1HpfCJlsq3OB-V4MQUlcAMp5szoPA5J955B4/edit"
    },
    ID: {
      name: "Idaho",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://docs.google.com/spreadsheets/d/1uOxZEk1PE6D2Cp6emd_YvecLb4vG5n8Km8sro9mtoj0/edit#gid=732464180"
    },
    GU: {
      name: "Guam",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://covid-19-testing.github.io/locations/guam/",
      hide: "yes"
    },
    VI: {
      name: "Virgin Islands",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://covid-19-testing.github.io/locations/virgin-islands/",
      hide: "yes"
    },
    PR: {
      name: "Puerto Rico",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://covid-19-testing.github.io/locations/puerto-rico/",
      hide: "yes"
    },
    AS: {
      name: "American Samoa",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://covid-19-testing.github.io/locations/american-samoa/",
      hide: "yes"
    },
    MP: {
      name: "Northern Mariana Islands",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "https://covid-19-testing.github.io/locations/northern-mariana-islands/",
      hide: "yes"
    }
  },
  locations: {
    "0": {
      name: "New York",
      lat: 40.71,
      lng: -74,
      description: "default",
      color: "default",
      url: "default",
      type: "default",
      size: "default"
    },
    "1": {
      name: "Anchorage",
      lat: 61.2180556,
      lng: -149.9002778,
      color: "default",
      type: "circle"
    }
  },
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  }
};
