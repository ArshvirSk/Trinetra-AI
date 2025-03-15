import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import React, { useEffect, useMemo, useState } from "react";

const mapContainerStyle = {
  width: "100%",
  height: "700px",
};

const defaultCenter = {
  lat: 19.076,
  lng: 72.8777,
};

// Mock parking locations (Replace with API data)
const parkingLocations = [
  {
    X: 72.9594266,
    Y: 19.1768968,
    Name: "M/S nirmal Lifestyle",
    OBJECTID: 1,
    CODE: "E-7",
    LMV: 749,
    LCV: 0,
    HMV: 136,
    TOTAL: 885,
    AREA_LOT: 53770,
  },
  {
    X: 72.8479501,
    Y: 19.2396647,
    Name: "M/S Vinita Estate",
    OBJECTID: 2,
    CODE: "W-14",
    LMV: 168,
    LCV: 26,
    HMV: 0,
    TOTAL: 194,
    AREA_LOT: "",
  },
  {
    X: 72.9435973,
    Y: 19.1706938,
    Name: "Marathon (Chhaganlal Khimji)",
    OBJECTID: 3,
    CODE: "E-3",
    LMV: 440,
    LCV: "",
    HMV: "",
    TOTAL: "",
    AREA_LOT: 22000,
  },
  {
    X: 72.9525028,
    Y: 19.16951,
    Name: "M/S Dura Tech",
    OBJECTID: 4,
    CODE: "E-2",
    LMV: 192,
    LCV: "",
    HMV: "",
    TOTAL: 192,
    AREA_LOT: 9600,
  },
  {
    X: 72.936941,
    Y: 19.166235,
    Name: "M/S Nirmal Lifestyle",
    OBJECTID: 5,
    CODE: "E-8",
    LMV: 1218,
    LCV: 0,
    HMV: 465,
    TOTAL: 1683,
    AREA_LOT: 116700,
  },
  {
    X: 72.944394,
    Y: 19.1596483,
    Name: "M/S Runwal Homes Pvt. Ltd.",
    OBJECTID: 6,
    CODE: "E-15",
    LMV: 1152,
    LCV: 0,
    HMV: 117,
    TOTAL: 1269,
    AREA_LOT: 99297.7,
  },
  {
    X: 72.9468988,
    Y: 19.1813617,
    Name: "M/S Runwal Developers Pvt. Ltd.",
    OBJECTID: 7,
    CODE: "E-5",
    LMV: 480,
    LCV: 30,
    HMV: 0,
    TOTAL: 510,
    AREA_LOT: 25950,
  },
  {
    X: 72.9452648,
    Y: 19.1577008,
    Name: "M/S Ashford Infotech",
    OBJECTID: 8,
    CODE: "E-19",
    LMV: 254,
    LCV: 0,
    HMV: 36,
    TOTAL: 289,
    AREA_LOT: 16440,
  },
  {
    X: 72.9298782,
    Y: 19.1426186,
    Name: "M/S Neptune Ventures",
    OBJECTID: 9,
    CODE: "E-13",
    LMV: 639,
    LCV: 0,
    HMV: 104,
    TOTAL: 743,
    AREA_LOT: 47468,
  },
  {
    X: 72.9307915,
    Y: 19.1292046,
    Name: "M/S Lodha",
    OBJECTID: 10,
    CODE: "E-6",
    LMV: 402,
    LCV: 0,
    HMV: 0,
    TOTAL: 402,
    AREA_LOT: 19997.95,
  },
  {
    X: 72.8906988,
    Y: 19.1182027,
    Name: "M/S Sripal Realty (Lodha)",
    OBJECTID: 11,
    CODE: "E-17",
    LMV: 185,
    LCV: 0,
    HMV: 0,
    TOTAL: 185,
    AREA_LOT: 8800,
  },
  {
    X: 72.9189633,
    Y: 19.0989283,
    Name: "M/S Wadhva",
    OBJECTID: 12,
    CODE: "E-12",
    LMV: 824,
    LCV: 36,
    HMV: 13,
    TOTAL: 873,
    AREA_LOT: 45100,
  },
  {
    X: 72.8922408,
    Y: 19.1136352,
    Name: "M/S Central Marcantile (Kanakia)",
    OBJECTID: 13,
    CODE: "E-4",
    LMV: 161,
    LCV: 0,
    HMV: 13,
    TOTAL: 174,
    AREA_LOT: 21031,
  },
  {
    X: 72.917499,
    Y: 19.1120113,
    Name: "M/S K D Patel",
    OBJECTID: 14,
    CODE: "E-21",
    LMV: 486,
    LCV: 68,
    HMV: 0,
    TOTAL: 554,
    AREA_LOT: 28720,
  },
  {
    X: 72.8565756,
    Y: 19.1317765,
    Name: "M/S Satellite Vijay Developers Pvt. Ltd. (Omkar)",
    OBJECTID: 15,
    CODE: "W-50",
    LMV: 561,
    LCV: 0,
    HMV: 0,
    TOTAL: 561,
    AREA_LOT: 27939.92,
  },
  {
    X: 72.8445612,
    Y: 19.1417063,
    Name: "M/S Patel Engineering Co. Ltd.",
    OBJECTID: 16,
    CODE: "W-44",
    LMV: 290,
    LCV: 34,
    HMV: 0,
    TOTAL: 324,
    AREA_LOT: 16710,
  },
  {
    X: 72.8326685,
    Y: 19.1414709,
    Name: "M/S Nakta Investment Pvt. Ltd.",
    OBJECTID: 17,
    CODE: "W-48",
    LMV: 69,
    LCV: 0,
    HMV: 0,
    TOTAL: 69,
    AREA_LOT: 3450,
  },
  {
    X: 72.8285172,
    Y: 19.1413328,
    Name: "M/S Runwal Developers Pvt. Ltd.",
    OBJECTID: 18,
    CODE: "W-8",
    LMV: 450,
    LCV: 65,
    HMV: 0,
    TOTAL: 515,
    AREA_LOT: "",
  },
  {
    X: 72.8225142,
    Y: 19.1302827,
    Name: "M/S Kabra & Associates",
    OBJECTID: 19,
    CODE: "W-47",
    LMV: 144,
    LCV: 0,
    HMV: 0,
    TOTAL: 144,
    AREA_LOT: 7200,
  },
  {
    X: 72.8502502,
    Y: 19.1612502,
    Name: "M/S Vardhaman Realtors",
    OBJECTID: 20,
    CODE: "W-45",
    LMV: 73,
    LCV: 0,
    HMV: 0,
    TOTAL: 73,
    AREA_LOT: 3597.03,
  },
  {
    X: 72.8294929,
    Y: 19.0654733,
    Name: "M/S Ahuja Pvt. Ltd.",
    OBJECTID: 21,
    CODE: "W-17",
    LMV: 195,
    LCV: 0,
    HMV: 0,
    TOTAL: 195,
    AREA_LOT: 8483.96,
  },
  {
    X: 72.8324043,
    Y: 19.0552527,
    Name: "M/S Pridehill Developers Pvt. Ltd.",
    OBJECTID: 22,
    CODE: "W-7",
    LMV: 92,
    LCV: 0,
    HMV: 0,
    TOTAL: 92,
    AREA_LOT: 4576.68,
  },
  {
    X: 72.8559688,
    Y: 19.153778,
    Name: "M/S Pranik Developers (Lodha)",
    OBJECTID: 23,
    CODE: "W-10",
    LMV: 982,
    LCV: 20,
    HMV: 21,
    TOTAL: 1023,
    AREA_LOT: "",
  },
  {
    X: 72.8835388,
    Y: 19.1078147,
    Name: "M/S Neelkanth Tech Park",
    OBJECTID: 24,
    CODE: "W-4",
    LMV: 275,
    LCV: 0,
    HMV: 0,
    TOTAL: 275,
    AREA_LOT: "",
  },
  {
    X: 72.8466928,
    Y: 19.1634857,
    Name: "M/S Rachna Astra",
    OBJECTID: 25,
    CODE: "W-1",
    LMV: 116,
    LCV: 0,
    HMV: 0,
    TOTAL: 116,
    AREA_LOT: "",
  },
  {
    X: 72.85325,
    Y: 19.1697557,
    Name: "M/S Romell Group",
    OBJECTID: 26,
    CODE: "W-2",
    LMV: 306,
    LCV: 0,
    HMV: 0,
    TOTAL: 306,
    AREA_LOT: "",
  },
  {
    X: 72.8458665,
    Y: 19.1695904,
    Name: "M/S HCC",
    OBJECTID: 27,
    CODE: "W-16",
    LMV: 227,
    LCV: 0,
    HMV: 0,
    TOTAL: 227,
    AREA_LOT: "",
  },
  {
    X: 72.8515051,
    Y: 19.1658299,
    Name: "M/S Suyojna Impex",
    OBJECTID: 28,
    CODE: "W-9",
    LMV: 74,
    LCV: 0,
    HMV: 0,
    TOTAL: 74,
    AREA_LOT: "",
  },
  {
    X: 72.8612622,
    Y: 19.1704423,
    Name: "M/S Oberoi Realty Ltd.",
    OBJECTID: 29,
    CODE: "W-29",
    LMV: 3500,
    LCV: 0,
    HMV: 132,
    TOTAL: 3632,
    AREA_LOT: 190840,
  },
  {
    X: 72.844722,
    Y: 19.1782256,
    Name: "M/S D B realty",
    OBJECTID: 30,
    CODE: "W-5",
    LMV: 376,
    LCV: 0,
    HMV: 116,
    TOTAL: 492,
    AREA_LOT: "",
  },
  {
    X: 72.8735593,
    Y: 19.1112263,
    Name: "M/S Rockford Developer Pvt. Ltd.",
    OBJECTID: 31,
    CODE: "W-12",
    LMV: 250,
    LCV: 0,
    HMV: 0,
    TOTAL: 250,
    AREA_LOT: "",
  },
  {
    X: 72.8678091,
    Y: 19.0723097,
    Name: "M/S Ultraspace Developer Ltd.",
    OBJECTID: 32,
    CODE: "W-19",
    LMV: 409,
    LCV: 0,
    HMV: 0,
    TOTAL: 409,
    AREA_LOT: "",
  },
  {
    X: 72.8633802,
    Y: 19.0707271,
    Name: "M/S Cloud Nine",
    OBJECTID: 33,
    CODE: "W-20",
    LMV: 80,
    LCV: 0,
    HMV: 0,
    TOTAL: 80,
    AREA_LOT: "",
  },
  {
    X: 72.8642827,
    Y: 19.1395609,
    Name: "M/S Oberoi Realty",
    OBJECTID: 34,
    CODE: "W-28",
    LMV: 673,
    LCV: 0,
    HMV: 0,
    TOTAL: 673,
    AREA_LOT: "",
  },
  {
    X: 72.8360793,
    Y: 19.0563965,
    Name: "M/S Shraddha Sheltors",
    OBJECTID: 35,
    CODE: "W-27",
    LMV: 102,
    LCV: 0,
    HMV: 0,
    TOTAL: 102,
    AREA_LOT: "",
  },
  {
    X: 72.8453182,
    Y: 19.1151737,
    Name: "M/S TATA Housing",
    OBJECTID: 36,
    CODE: "W-40",
    LMV: 309,
    LCV: 15,
    HMV: 0,
    TOTAL: 324,
    AREA_LOT: "",
  },
  {
    X: 72.8445076,
    Y: 19.1404455,
    Name: "M/S Zennia Enterprises",
    OBJECTID: 37,
    CODE: "W-46",
    LMV: 205,
    LCV: 48,
    HMV: 5,
    TOTAL: 258,
    AREA_LOT: "",
  },
  {
    X: 72.861983,
    Y: 19.1375704,
    Name: "M/S Dynacraft Machine",
    OBJECTID: 38,
    CODE: "W-39",
    LMV: 99,
    LCV: 82,
    HMV: 111,
    TOTAL: 292,
    AREA_LOT: "",
  },
  {
    X: 72.883435,
    Y: 19.1169977,
    Name: "M/S Neepa Real Estate",
    OBJECTID: 39,
    CODE: "W-21",
    LMV: 1282,
    LCV: 210,
    HMV: 25,
    TOTAL: 1517,
    AREA_LOT: 80720,
  },
  {
    X: 72.8308539,
    Y: 18.9740792,
    Name: "M/S Swayam Realtors & Traders PPL",
    OBJECTID: 40,
    CODE: "C-54",
    LMV: 1280,
    LCV: 0,
    HMV: 0,
    TOTAL: 1280,
    AREA_LOT: 64000,
  },
  {
    X: 72.8293991,
    Y: 18.9868055,
    Name: "M/S Lodha (Apollo mill)",
    OBJECTID: 41,
    CODE: "C-5",
    LMV: 817,
    LCV: 0,
    HMV: 30,
    TOTAL: 847,
    AREA_LOT: 40413.35,
  },
  {
    X: 72.8249928,
    Y: 18.9775835,
    Name: "M/S Genext Hardware & Parks Pvt. Ltd.(Raheja)",
    OBJECTID: 42,
    CODE: "C-4",
    LMV: 258,
    LCV: 1316,
    HMV: 5,
    TOTAL: 1597,
    AREA_LOT: "",
  },
  {
    X: 72.8262401,
    Y: 18.9777443,
    Name: "M/S Neelkamal Realtors",
    OBJECTID: 43,
    CODE: "C-9",
    LMV: 923,
    LCV: 0,
    HMV: 0,
    TOTAL: 923,
    AREA_LOT: 34262.1,
  },
  {
    X: 72.8235487,
    Y: 18.9680598,
    Name: "M/S Neel Kamal Realtors & Builders Pvt. Ltd. (D B Realty)",
    OBJECTID: 44,
    CODE: "C-26",
    LMV: 626,
    LCV: 210,
    HMV: 0,
    TOTAL: 836,
    AREA_LOT: 59940.76,
  },
  {
    X: 72.8305104,
    Y: 18.9801796,
    Name: "M/S Simplex Mills",
    OBJECTID: 45,
    CODE: "C-32",
    LMV: 100,
    LCV: 0,
    HMV: 0,
    TOTAL: 100,
    AREA_LOT: 7990,
  },
  {
    X: 72.8405161,
    Y: 18.9788988,
    Name: "M/S Mafatlal Mills",
    OBJECTID: 46,
    CODE: "C-53",
    LMV: 1635,
    LCV: 0,
    HMV: 0,
    TOTAL: 1635,
    AREA_LOT: 81510,
  },
  {
    X: 72.8283843,
    Y: 18.9640672,
    Name: "M/S Kathawala Realtors",
    OBJECTID: 47,
    CODE: "C69",
    LMV: 279,
    LCV: 100,
    HMV: 0,
    TOTAL: 379,
    AREA_LOT: 20450,
  },
  {
    X: 72.8356467,
    Y: 18.9825995,
    Name: "M/S Goodtime Real Estate Development Pvt. Ltd. (Penninsula)",
    OBJECTID: 48,
    CODE: "C-74",
    LMV: 409,
    LCV: 62,
    HMV: 15,
    TOTAL: 486,
    AREA_LOT: 26280,
  },
  {
    X: 72.8146433,
    Y: 18.9717845,
    Name: "M/S Suryodaya Estate",
    OBJECTID: 49,
    CODE: "C-13",
    LMV: 747,
    LCV: 0,
    HMV: 12,
    TOTAL: 759,
    AREA_LOT: 38790,
  },
  {
    X: 72.8146684,
    Y: 18.9712533,
    Name: "M/S Rubberwala & Neo Ventures",
    OBJECTID: 50,
    CODE: "C-21",
    LMV: 152,
    LCV: 0,
    HMV: 0,
    TOTAL: 152,
    AREA_LOT: 7600,
  },
  {
    X: 72.8214436,
    Y: 18.9507799,
    Name: "M/S Marine Drive Hospitality & Realty Pvt. Ltd.",
    OBJECTID: 51,
    CODE: "C-71",
    LMV: 779,
    LCV: 24,
    HMV: 4,
    TOTAL: 807,
    AREA_LOT: 40990,
  },
  {
    X: 72.8241726,
    Y: 18.9608775,
    Name: "M/S Rubberwala",
    OBJECTID: 52,
    CODE: "C-20",
    LMV: 79,
    LCV: 223,
    HMV: 0,
    TOTAL: 302,
    AREA_LOT: "",
  },
  {
    X: 72.8114927,
    Y: 18.9766056,
    Name: "M/S HBS (Vellard View CHS)",
    OBJECTID: 53,
    CODE: "C-65",
    LMV: 235,
    LCV: 0,
    HMV: 0,
    TOTAL: 235,
    AREA_LOT: 11750,
  },
  {
    X: 72.8102249,
    Y: 18.9681848,
    Name: "M/S Lodha",
    OBJECTID: 54,
    CODE: "C-58",
    LMV: 204,
    LCV: 0,
    HMV: 0,
    TOTAL: 204,
    AREA_LOT: 20251.04,
  },
  {
    X: 72.8183029,
    Y: 18.9621518,
    Name: "M/S Goodwill Theaters Pvt. Ltd. (Novelty Cinema)",
    OBJECTID: 55,
    CODE: "C-48",
    LMV: 160,
    LCV: 0,
    HMV: 0,
    TOTAL: 160,
    AREA_LOT: 7965.72,
  },
  {
    X: 72.7967095,
    Y: 18.9512693,
    Name: "M/S Runwal Township Pvt. Ltd.",
    OBJECTID: 56,
    CODE: "C-49",
    LMV: 58,
    LCV: 0,
    HMV: 0,
    TOTAL: 58,
    AREA_LOT: 6150,
  },
  {
    X: 72.8242368,
    Y: 18.9628682,
    Name: "M/S Hilton Infrastructure",
    OBJECTID: 57,
    CODE: "C-44",
    LMV: 220,
    LCV: 112,
    HMV: 0,
    TOTAL: 332,
    AREA_LOT: "",
  },
  {
    X: 72.8296232,
    Y: 19.0042865,
    Name: "M/S Lodha",
    OBJECTID: 58,
    CODE: "C-6",
    LMV: 4328,
    LCV: 0,
    HMV: 237,
    TOTAL: 4565,
    AREA_LOT: 244932.01,
  },
  {
    X: 72.8242105,
    Y: 18.9864185,
    Name: "M/S D B Realty",
    OBJECTID: 59,
    CODE: "C-8",
    LMV: 385,
    LCV: 0,
    HMV: 0,
    TOTAL: 385,
    AREA_LOT: 16455,
  },
  {
    X: 72.8214244,
    Y: 19.0081249,
    Name: "M/S K. Raheja",
    OBJECTID: 60,
    CODE: "C-3",
    LMV: 794,
    LCV: 9,
    HMV: 0,
    TOTAL: 803,
    AREA_LOT: 33119.24,
  },
  {
    X: 72.8286533,
    Y: 19.0019508,
    Name: "M/S Lodha",
    OBJECTID: 61,
    CODE: "C-16",
    LMV: 3856,
    LCV: 0,
    HMV: 0,
    TOTAL: 3856,
    AREA_LOT: 237033.1,
  },
  {
    X: 72.8327546,
    Y: 19.0075388,
    Name: "M/S Indiabull",
    OBJECTID: 62,
    CODE: "C-1",
    LMV: 2370,
    LCV: 0,
    HMV: 0,
    TOTAL: 2370,
    AREA_LOT: 108396.93,
  },
  {
    X: 72.8213296,
    Y: 18.9991927,
    Name: "M/S Shri Ram Mill (Palais Royalae)",
    OBJECTID: 63,
    CODE: "C-33",
    LMV: 900,
    LCV: 0,
    HMV: 0,
    TOTAL: 900,
    AREA_LOT: "",
  },
  {
    X: 72.8308884,
    Y: 18.9940387,
    Name: "M/S Marathon",
    OBJECTID: 64,
    CODE: "C-17",
    LMV: 493,
    LCV: 0,
    HMV: 0,
    TOTAL: 493,
    AREA_LOT: 24616.74,
  },
  {
    X: 72.8232844,
    Y: 19.0080746,
    Name: "M/S Omkar",
    OBJECTID: 65,
    CODE: "C-72",
    LMV: 701,
    LCV: 0,
    HMV: 0,
    TOTAL: 701,
    AREA_LOT: 34762.4,
  },
  {
    X: 72.8307687,
    Y: 19.0105802,
    Name: "M/S D B Realty",
    OBJECTID: 66,
    CODE: "C15",
    LMV: 2500,
    LCV: 0,
    HMV: 0,
    TOTAL: 2500,
    AREA_LOT: 89496.48,
  },
  {
    X: 72.8349573,
    Y: 19.0098719,
    Name: "M/S Indiabull",
    OBJECTID: 67,
    CODE: "C-7",
    LMV: 890,
    LCV: 0,
    HMV: 427,
    TOTAL: 1317,
    AREA_LOT: 90437.56,
  },
  {
    X: 72.8425886,
    Y: 19.0242726,
    Name: "M/S Kohonoor Mills",
    OBJECTID: 68,
    CODE: "C-18",
    LMV: 977,
    LCV: 0,
    HMV: 31,
    TOTAL: 1008,
    AREA_LOT: 52136.02,
  },
  {
    X: 72.8468394,
    Y: 19.0370115,
    Name: "M/S United Shelters Pvt. Ltd. (Tadeshwarwadi)",
    OBJECTID: 69,
    CODE: "C-45",
    LMV: 218,
    LCV: 0,
    HMV: 0,
    TOTAL: 218,
    AREA_LOT: 10900,
  },
  {
    X: 72.8302085,
    Y: 19.0190489,
    Name: "M/S Kalpavruksha",
    OBJECTID: 70,
    CODE: "C-2",
    LMV: 172,
    LCV: 0,
    HMV: 0,
    TOTAL: 172,
    AREA_LOT: 8600,
  },
  {
    X: 72.8422525,
    Y: 18.9982123,
    Name: "M/S Kalpataru",
    OBJECTID: 71,
    CODE: "C-11",
    LMV: 512,
    LCV: 553,
    HMV: 0,
    TOTAL: 1065,
    AREA_LOT: "",
  },
  {
    X: 72.8493366,
    Y: 18.997395,
    Name: "M/S Dosti",
    OBJECTID: 72,
    CODE: "C-10",
    LMV: 166,
    LCV: 31,
    HMV: 0,
    TOTAL: 197,
    AREA_LOT: 10315,
  },
  {
    X: 72.8479491,
    Y: 18.9928869,
    Name: "M/S Penninsula Realtors",
    OBJECTID: 73,
    CODE: "C-63",
    LMV: 166,
    LCV: 75,
    HMV: 36,
    TOTAL: 277,
    AREA_LOT: 17495,
  },
  {
    X: 72.840489,
    Y: 18.9914059,
    Name: "M/S Esque Finement Pvt. Ltd. (Lodha)",
    OBJECTID: 74,
    CODE: "C-25",
    LMV: 586,
    LCV: 0,
    HMV: 114,
    TOTAL: 700,
    AREA_LOT: 65663.08,
  },
  {
    X: 72.8385937,
    Y: 18.9895509,
    Name: "M/S Byramji Jeejiboy",
    OBJECTID: 75,
    CODE: "C-27",
    LMV: 998,
    LCV: 206,
    HMV: 38,
    TOTAL: 1242,
    AREA_LOT: 26378.5,
  },
  {
    X: 72.8674313,
    Y: 19.0433807,
    Name: "M/S Maitri asso. (Dosti)",
    OBJECTID: 76,
    CODE: "C-51",
    LMV: 247,
    LCV: 0,
    HMV: 0,
    TOTAL: 247,
    AREA_LOT: 10678.72,
  },
  {
    X: 72.867391,
    Y: 19.0226391,
    Name: "M/S Maitri Associates (Dosti)",
    OBJECTID: 77,
    CODE: "C-73",
    LMV: 445,
    LCV: 48,
    HMV: 165,
    TOTAL: 658,
    AREA_LOT: 45170,
  },
  {
    X: 72.8501629,
    Y: 19.0204018,
    Name: "M/S Shiv Sneha Associates",
    OBJECTID: 78,
    CODE: "C-43",
    LMV: 103,
    LCV: 0,
    HMV: 0,
    TOTAL: 103,
    AREA_LOT: 5150,
  },
  {
    X: 72.8522069,
    Y: 19.0282504,
    Name: "M/S Satra Developers",
    OBJECTID: 79,
    CODE: "C-76",
    LMV: 221,
    LCV: 10,
    HMV: 0,
    TOTAL: 231,
    AREA_LOT: 11700,
  },
  {
    X: 72.835848,
    Y: 19.0139942,
    Name: "M/S PSK Developers Pvt. Ltd.",
    OBJECTID: 80,
    CODE: "C-12",
    LMV: 212,
    LCV: 0,
    HMV: 0,
    TOTAL: 212,
    AREA_LOT: 10568.62,
  },
  {
    X: 72.8189418,
    Y: 18.9983713,
    Name: "M/S Hilton Infrastructure",
    OBJECTID: 81,
    CODE: "C-44",
    LMV: 220,
    LCV: 112,
    HMV: 0,
    TOTAL: 332,
    AREA_LOT: "",
  },
  {
    X: 72.831956,
    Y: 19.0651161,
    Name: "M/S Meeti Developers Pvt. Ltd.",
    OBJECTID: 82,
    CODE: "W-53",
    LMV: 142,
    LCV: 0,
    HMV: 0,
    TOTAL: 142,
    AREA_LOT: 7072.38,
  },
  {
    X: 72.8279502,
    Y: 18.976766,
    Name: "M/S Reliable Enterprises",
    OBJECTID: 83,
    CODE: "C-23",
    LMV: 108,
    LCV: 72,
    HMV: 0,
    TOTAL: 180,
    AREA_LOT: "",
  },
  {
    X: 72.9594266,
    Y: 19.1768968,
    Name: "M/S nirmal Lifestyle",
    OBJECTID: 84,
    CODE: "E-7",
    LMV: 749,
    LCV: 0,
    HMV: 136,
    TOTAL: 885,
    AREA_LOT: 53770,
  },
  {
    X: 72.8479501,
    Y: 19.2396647,
    Name: "M/S Vinita Estate",
    OBJECTID: 85,
    CODE: "W-14",
    LMV: 168,
    LCV: 26,
    HMV: 0,
    TOTAL: 194,
    AREA_LOT: "",
  },
  {
    X: 72.9435973,
    Y: 19.1706938,
    Name: "Marathon (Chhaganlal Khimji)",
    OBJECTID: 86,
    CODE: "E-3",
    LMV: 440,
    LCV: "",
    HMV: "",
    TOTAL: "",
    AREA_LOT: 22000,
  },
  {
    X: 72.9525028,
    Y: 19.16951,
    Name: "M/S Dura Tech",
    OBJECTID: 87,
    CODE: "E-2",
    LMV: 192,
    LCV: "",
    HMV: "",
    TOTAL: 192,
    AREA_LOT: 9600,
  },
  {
    X: 72.936941,
    Y: 19.166235,
    Name: "M/S Nirmal Lifestyle",
    OBJECTID: 88,
    CODE: "E-8",
    LMV: 1218,
    LCV: 0,
    HMV: 465,
    TOTAL: 1683,
    AREA_LOT: 116700,
  },
  {
    X: 72.871068,
    Y: 19.131942,
    Name: "",
    OBJECTID: 93,
    CODE: "",
    LMV: "",
    LCV: "",
    HMV: "",
    TOTAL: "",
    AREA_LOT: "",
  },
  {
    X: 72.830237,
    Y: 19.13889,
    Name: "",
    OBJECTID: 94,
    CODE: "",
    LMV: "",
    LCV: "",
    HMV: "",
    TOTAL: "",
    AREA_LOT: "",
  },
  {
    X: 72.813669,
    Y: 19.140929,
    Name: "",
    OBJECTID: 95,
    CODE: "",
    LMV: "",
    LCV: "",
    HMV: "",
    TOTAL: "",
    AREA_LOT: "",
  },
];

const SmartParking = () => {
  const [selectedParking, setSelectedParking] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [userLocation, setUserLocation] = useState(defaultCenter);

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => console.warn("Geolocation permission denied.")
      );
    }
  }, []);

  // Memoized filtered locations for performance
  const filteredLocations = useMemo(() => {
    return parkingLocations.filter((parking) =>
      parking.Name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="relative flex bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <LoadScript googleMapsApiKey="AIzaSyAcsbrr5mKHFjjWQ8PhV3twTf87vlglZsg">
        <div className="flex-grow p-4">
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={
                selectedParking
                  ? { lat: selectedParking.Y, lng: selectedParking.X }
                  : userLocation
              }
              zoom={12}
            >
              {/* User's location marker */}
              <Marker
                position={userLocation}
                icon="http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
              />

              {filteredLocations.map((parking, index) => (
                <Marker
                  key={index}
                  position={{ lat: parking.Y, lng: parking.X }}
                  onClick={() => setSelectedParking(parking)}
                  title={parking.Name}
                />
              ))}

              {selectedParking && (
                <InfoWindow
                  position={{ lat: selectedParking.Y, lng: selectedParking.X }}
                  onCloseClick={() => setSelectedParking(null)}
                >
                  <div className="p-4 bg-gray-800/90 backdrop-blur-md rounded-lg shadow-lg text-white">
                    <h2 className="text-lg font-bold text-green-400">
                      {selectedParking.Name}
                    </h2>
                    <p className="text-gray-300">
                      CODE:{" "}
                      <span className="text-blue-400 font-semibold">
                        {selectedParking.CODE}
                      </span>
                    </p>
                    <p className="text-gray-300">
                      Total Spots:{" "}
                      <span className="text-green-400 font-semibold">
                        {selectedParking.TOTAL}
                      </span>
                    </p>
                    <p className="text-gray-300">
                      LMV:{" "}
                      <span className="text-yellow-400 font-semibold">
                        {selectedParking.LMV}
                      </span>
                    </p>
                    <p className="text-gray-300">
                      LCV:{" "}
                      <span className="text-purple-400 font-semibold">
                        {selectedParking.LCV}
                      </span>
                    </p>
                    <p className="text-gray-300">
                      HMV:{" "}
                      <span className="text-red-400 font-semibold">
                        {selectedParking.HMV}
                      </span>
                    </p>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                      <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{
                          width: `${(selectedParking.TOTAL / 2000) * 100}%`, // Assuming max 2000 spots for progress
                        }}
                      ></div>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </div>
        </div>
      </LoadScript>

      {/* Glassmorphism Sidebar */}
      <div className="w-96 p-6 bg-white/10 backdrop-blur-lg rounded-l-2xl shadow-2xl border-l border-white/20">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search parking locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400"
          />
        </div>

        <div className="space-y-4 mt-6 h-[calc(100vh-160px)] overflow-y-auto custom-scrollbar">
          <h2 className="text-xl font-bold text-white/90 mb-4">
            Available Parking Spots
          </h2>
          {filteredLocations.map((parking, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedParking(parking);
                const map = document.querySelector('div[aria-label="Map"]');
                map.scrollIntoView({ behavior: "smooth" });
              }}
              onKeyPress={(e) =>
                e.key === "Enter" && setSelectedParking(parking)
              }
              tabIndex={0}
              className="p-4 bg-white/5 rounded-lg backdrop-blur-sm cursor-pointer transition-all hover:bg-white/10 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <h3 className="font-semibold text-white/90">{parking.Name}</h3>
              <div className="mt-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Total</span>
                  <span className="text-green-400">{parking.TOTAL}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{
                      width: `${(parking.TOTAL / 2000) * 100}%`,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>LMV: {parking.LMV}</span>
                  <span>LCV: {parking.LCV}</span>
                  <span>HMV: {parking.HMV}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartParking;
