import React from "react";
import ReactDOM from "react-dom/client";

/*
Header -
- Logo
- Nav Items
Body - 
- Search
- Resturant Container
- Resturant Card
Footer - 
- Copyright
- Links
- Address
- Contact
*/

const Header = () => {
   return (
      <div className="header">
         <div className="logo-wrap">
            <img
               className="logo"
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Foodora_logo.png/1200px-Foodora_logo.png"
               alt=""
            />
         </div>
         <div className="nav-items">
            <ul>
               <li>Home</li>
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
         </div>
      </div>
   );
};

const ResturantCard = (props) => {
   const { resData } = props;
   const { name, cuisines, rating } = resData?.info;
   return (
      <div className="res-card">
         <img
            className="res-img"
            src={
               "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
               resData.info.cloudinaryImageId
            }
            alt="res-logo"
         />
         <h3>{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h5>{rating}</h5>
         <h5>{resData.info.sla.deliveryTime}</h5>
      </div>
   );
};

const resList = [
   {
      info: {
         id: "234631",
         name: "Truffles",
         cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
         locality: "Kaveri Nagar",
         areaName: "KR Puram",
         costForTwo: "₹350 for two",
         cuisines: [
            "American",
            "Continental",
            "Desserts",
            "Bakery",
            "Beverages",
            "Pastas",
            "Italian",
         ],
         avgRating: 4.4,
         feeDetails: {
            restaurantId: "234631",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 6200,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 6200,
         },
         parentId: "218065",
         avgRatingString: "4.4",
         totalRatingsString: "10K+",
         sla: {
            deliveryTime: 49,
            lastMileTravel: 6.8,
            serviceability: "SERVICEABLE",
            slaString: "49 mins",
            lastMileTravelString: "6.8 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-20 23:30:00",
            opened: true,
         },
         badges: {},
         select: true,
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/truffles-kaveri-nagar-kr-puram-bangalore-234631",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "209764",
         name: "Third Wave Coffee",
         cloudinaryImageId: "d96267738c19ec62acb5390e52faba41",
         locality: "Ambalipura",
         areaName: "Haralur",
         costForTwo: "₹400 for two",
         cuisines: ["Beverages", "Bakery", "Continental"],
         avgRating: 4.3,
         feeDetails: {
            restaurantId: "209764",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 7000,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 7000,
         },
         parentId: "274773",
         avgRatingString: "4.3",
         totalRatingsString: "1K+",
         sla: {
            deliveryTime: 35,
            lastMileTravel: 7.5,
            serviceability: "SERVICEABLE",
            slaString: "35 mins",
            lastMileTravelString: "7.5 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-21 00:00:00",
            opened: true,
         },
         badges: {},
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/third-wave-coffee-ambalipura-haralur-bangalore-209764",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "237665",
         name: "McDonald's",
         cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
         locality: "Preatige Tech park",
         areaName: "Kadubeesanahalli",
         costForTwo: "₹400 for two",
         cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
         avgRating: 4.1,
         feeDetails: {
            restaurantId: "237665",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 3900,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 3900,
         },
         parentId: "630",
         avgRatingString: "4.1",
         totalRatingsString: "5K+",
         sla: {
            deliveryTime: 24,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "24 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-21 00:45:00",
            opened: true,
         },
         badges: {
            textExtendedBadges: [
               {
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                  fontColor: "#7E808C",
               },
            ],
         },
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {
                  badgeObject: [
                     {
                        attributes: {
                           description: "",
                           fontColor: "#7E808C",
                           iconId: "guiltfree/GF_Logo_android_3x",
                           shortDescription: "options available",
                        },
                     },
                  ],
               },
            },
         },
         aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/mcdonalds-preatige-tech-park-kadubeesanahalli-bangalore-237665",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "251475",
         name: "KFC",
         cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
         locality: "Embassy Tech Village",
         areaName: "Bellandur",
         costForTwo: "₹400 for two",
         cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
         avgRating: 4.2,
         feeDetails: {
            restaurantId: "251475",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 5900,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 5900,
         },
         parentId: "547",
         avgRatingString: "4.2",
         totalRatingsString: "1K+",
         sla: {
            deliveryTime: 33,
            lastMileTravel: 5.5,
            serviceability: "SERVICEABLE",
            slaString: "33 mins",
            lastMileTravelString: "5.5 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-20 22:00:00",
            opened: true,
         },
         badges: {},
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/kfc-embassy-tech-village-bellandur-bangalore-251475",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "272242",
         name: "EatFit",
         cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
         locality: "Hoodi",
         areaName: "Whitefield",
         costForTwo: "₹270 for two",
         cuisines: [
            "Chinese",
            "Healthy Food",
            "Tandoor",
            "Pizzas",
            "North Indian",
            "Thalis",
            "Biryani",
         ],
         avgRating: 4.2,
         feeDetails: {
            restaurantId: "272242",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 5400,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 5400,
         },
         parentId: "76139",
         avgRatingString: "4.2",
         totalRatingsString: "5K+",
         sla: {
            deliveryTime: 34,
            lastMileTravel: 5.7,
            serviceability: "SERVICEABLE",
            slaString: "34 mins",
            lastMileTravelString: "5.7 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-20 23:59:00",
            opened: true,
         },
         badges: {
            textExtendedBadges: [
               {
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                  fontColor: "#7E808C",
               },
            ],
         },
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {
                  badgeObject: [
                     {
                        attributes: {
                           description: "",
                           fontColor: "#7E808C",
                           iconId: "guiltfree/GF_Logo_android_3x",
                           shortDescription: "brand",
                        },
                     },
                  ],
               },
            },
         },
         aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/eatfit-hoodi-whitefield-bangalore-272242",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "79472",
         name: "Domino's Pizza",
         cloudinaryImageId: "nkxgwtukusj6dnfbn8lr",
         locality: "Munnekolalu",
         areaName: "Marathahalli",
         costForTwo: "₹400 for two",
         cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
         avgRating: 4.2,
         feeDetails: {
            restaurantId: "79472",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 2900,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 2900,
         },
         parentId: "2456",
         avgRatingString: "4.2",
         totalRatingsString: "5K+",
         sla: {
            deliveryTime: 25,
            serviceability: "SERVICEABLE",
            slaString: "25 mins",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-21 02:59:00",
            opened: true,
         },
         badges: {},
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            header: "₹150 OFF",
            subHeader: "ABOVE ₹999",
            discountTag: "FLAT DEAL",
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/dominos-pizza-munnekolalu-marathahalli-bangalore-79472",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "444074",
         name: "Magnolia Bakery",
         cloudinaryImageId: "6f0945b8b18d9f4241dd1cd9a70e23d7",
         locality: "RMZ Ecoworld",
         areaName: "Bellandur",
         costForTwo: "₹500 for two",
         cuisines: ["Bakery", "Desserts", "Ice Cream"],
         avgRating: 4.5,
         feeDetails: {
            restaurantId: "444074",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 5900,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 5900,
         },
         parentId: "267303",
         avgRatingString: "4.5",
         totalRatingsString: "5K+",
         sla: {
            deliveryTime: 26,
            lastMileTravel: 5.5,
            serviceability: "SERVICEABLE",
            slaString: "26 mins",
            lastMileTravelString: "5.5 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-21 00:30:00",
            opened: true,
         },
         badges: {
            imageBadges: [
               {
                  imageId: "newg.png",
                  description: "Gourmet",
               },
            ],
         },
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {
                  badgeObject: [
                     {
                        attributes: {
                           description: "Gourmet",
                           imageId: "newg.png",
                        },
                     },
                  ],
               },
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/magnolia-bakery-rmz-ecoworld-bellandur-bangalore-444074",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "333582",
         name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
         cloudinaryImageId: "y5meugeozjvrmpn4hvmq",
         locality: "Murgesh Pallya",
         areaName: "Indiranagar",
         costForTwo: "₹300 for two",
         cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
         avgRating: 4.5,
         veg: true,
         feeDetails: {
            restaurantId: "333582",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 7000,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 7000,
         },
         parentId: "582",
         avgRatingString: "4.5",
         totalRatingsString: "100+",
         sla: {
            deliveryTime: 33,
            lastMileTravel: 7.3,
            serviceability: "SERVICEABLE",
            slaString: "33 mins",
            lastMileTravelString: "7.3 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-20 22:00:00",
            opened: true,
         },
         badges: {},
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-murgesh-pallya-indiranagar-bangalore-333582",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "8069",
         name: "Theobroma",
         cloudinaryImageId: "eb6ea8ccb576c5e3feeff7d18d1f3229",
         locality: "Daddakanahalli",
         areaName: "Sarjapur Road",
         costForTwo: "₹600 for two",
         cuisines: ["Bakery"],
         avgRating: 4.4,
         feeDetails: {
            restaurantId: "8069",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 9000,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 9000,
         },
         parentId: "1040",
         avgRatingString: "4.4",
         totalRatingsString: "1K+",
         sla: {
            deliveryTime: 36,
            lastMileTravel: 8.7,
            serviceability: "SERVICEABLE",
            slaString: "36 mins",
            lastMileTravelString: "8.7 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-20 23:00:00",
            opened: true,
         },
         badges: {
            imageBadges: [
               {
                  imageId: "newg.png",
                  description: "Gourmet",
               },
            ],
         },
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {
                  badgeObject: [
                     {
                        attributes: {
                           description: "Gourmet",
                           imageId: "newg.png",
                        },
                     },
                  ],
               },
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/theobroma-daddakanahalli-sarjapur-road-bangalore-8069",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "156663",
         name: "Sri Lakshmi Vaibhava",
         cloudinaryImageId: "hxdoygnqwwi6i6fenhjo",
         locality: "C.T. Street",
         areaName: "Marathahalli",
         costForTwo: "₹200 for two",
         cuisines: ["South Indian", "North Indian"],
         avgRating: 4.3,
         veg: true,
         feeDetails: {
            restaurantId: "156663",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 2900,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 2900,
         },
         parentId: "14682",
         avgRatingString: "4.3",
         totalRatingsString: "5K+",
         sla: {
            deliveryTime: 24,
            lastMileTravel: 2.3,
            serviceability: "SERVICEABLE",
            slaString: "24 mins",
            lastMileTravelString: "2.3 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-20 22:00:00",
            opened: true,
         },
         badges: {},
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/sri-lakshmi-vaibhava-c-t-street-marathahalli-bangalore-156663",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "307559",
         name: "Homely",
         cloudinaryImageId: "hdqmfwigtxpu7aoabzqi",
         locality: "Munekollal",
         areaName: "Marathahalli",
         costForTwo: "₹200 for two",
         cuisines: [
            "Home Food",
            "North Indian",
            "South Indian",
            "Beverages",
            "Desserts",
            "Thalis",
         ],
         avgRating: 4.2,
         feeDetails: {
            restaurantId: "307559",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 2900,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 2900,
         },
         parentId: "4043",
         avgRatingString: "4.2",
         totalRatingsString: "10K+",
         sla: {
            deliveryTime: 42,
            lastMileTravel: 2.5,
            serviceability: "SERVICEABLE",
            slaString: "42 mins",
            lastMileTravelString: "2.5 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-20 16:30:00",
            opened: true,
         },
         badges: {},
         isOpen: true,
         type: "C",
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹100",
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/homely-munekollal-marathahalli-bangalore-307559",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "249712",
         name: "Faasos - Wraps & Rolls",
         cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
         locality: "Tulasi theater",
         areaName: "Marathahalli",
         costForTwo: "₹200 for two",
         cuisines: [
            "Kebabs",
            "Fast Food",
            "Snacks",
            "North Indian",
            "American",
            "Healthy Food",
            "Desserts",
            "Beverages",
         ],
         avgRating: 4.1,
         feeDetails: {
            restaurantId: "249712",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 2900,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 2900,
         },
         parentId: "21809",
         avgRatingString: "4.1",
         totalRatingsString: "1K+",
         sla: {
            deliveryTime: 31,
            lastMileTravel: 1.8,
            serviceability: "SERVICEABLE",
            slaString: "31 mins",
            lastMileTravelString: "1.8 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-21 03:00:00",
            opened: true,
         },
         badges: {
            textExtendedBadges: [
               {
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                  fontColor: "#7E808C",
               },
            ],
         },
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {
                  badgeObject: [
                     {
                        attributes: {
                           description: "",
                           fontColor: "#7E808C",
                           iconId: "guiltfree/GF_Logo_android_3x",
                           shortDescription: "options available",
                        },
                     },
                  ],
               },
            },
         },
         aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-tulasi-theater-marathahalli-bangalore-249712",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "62912",
         name: "LunchBox - Meals and Thalis",
         cloudinaryImageId: "saftivyo2xwkqcda2nxv",
         locality: "Lakshminarayana Pura",
         areaName: "Chinnapanna Halli",
         costForTwo: "₹200 for two",
         cuisines: [
            "Biryani",
            "North Indian",
            "Punjabi",
            "Healthy Food",
            "Desserts",
            "Beverages",
         ],
         avgRating: 4.1,
         feeDetails: {
            restaurantId: "62912",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 2900,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 2900,
         },
         parentId: "4925",
         avgRatingString: "4.1",
         totalRatingsString: "5K+",
         sla: {
            deliveryTime: 43,
            lastMileTravel: 2.2,
            serviceability: "SERVICEABLE",
            slaString: "43 mins",
            lastMileTravelString: "2.2 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-21 03:00:00",
            opened: true,
         },
         badges: {},
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹399",
            discountTag: "FLAT DEAL",
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-lakshminarayana-pura-chinnapanna-halli-bangalore-62912",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "21668",
         name: "Subway",
         cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
         locality: "Kundanahalli",
         areaName: "Marathahalli",
         costForTwo: "₹350 for two",
         cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
         avgRating: 4.3,
         feeDetails: {
            restaurantId: "21668",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 3900,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 3900,
         },
         parentId: "2",
         avgRatingString: "4.3",
         totalRatingsString: "10K+",
         sla: {
            deliveryTime: 40,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "40 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-20 23:55:00",
            opened: true,
         },
         badges: {},
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹100",
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/subway-kundanahalli-marathahalli-bangalore-21668",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "249717",
         name: "The Good Bowl",
         cloudinaryImageId: "0b3356a88b6fc5966c452c4c9b1b5e4a",
         locality: "Tulasi theater",
         areaName: "Marathahalli",
         costForTwo: "₹400 for two",
         cuisines: [
            "Biryani",
            "North Indian",
            "Pastas",
            "Punjabi",
            "Desserts",
            "Beverages",
         ],
         avgRating: 3.9,
         feeDetails: {
            restaurantId: "249717",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 2900,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 2900,
         },
         parentId: "7918",
         avgRatingString: "3.9",
         totalRatingsString: "100+",
         sla: {
            deliveryTime: 29,
            lastMileTravel: 1.8,
            serviceability: "SERVICEABLE",
            slaString: "29 mins",
            lastMileTravelString: "1.8 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-21 03:00:00",
            opened: true,
         },
         badges: {},
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/the-good-bowl-tulasi-theater-marathahalli-bangalore-249717",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "151058",
         name: "Baskin Robbins - Ice Cream Desserts",
         cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
         locality: "Balagere",
         areaName: "Varthur Gunjur",
         costForTwo: "₹200 for two",
         cuisines: ["Ice Cream"],
         avgRating: 4.5,
         veg: true,
         feeDetails: {
            restaurantId: "151058",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 4400,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 4400,
         },
         parentId: "5588",
         avgRatingString: "4.5",
         totalRatingsString: "1K+",
         sla: {
            deliveryTime: 21,
            lastMileTravel: 3.5,
            serviceability: "SERVICEABLE",
            slaString: "21 mins",
            lastMileTravelString: "3.5 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-20 23:00:00",
            opened: true,
         },
         badges: {},
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-balagere-varthur-gunjur-bangalore-151058",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "235721",
         name: "Chaayos Chai+Snacks=Relax",
         cloudinaryImageId: "2beebd3688e63e027ee8a11c1c8a72c8",
         locality: "Kundalahalli",
         areaName: "Marathahalli",
         costForTwo: "₹250 for two",
         cuisines: [
            "Bakery",
            "Beverages",
            "Chaat",
            "Desserts",
            "Home Food",
            "Italian",
            "Maharashtrian",
            "Snacks",
            "Street Food",
            "Sweets",
         ],
         avgRating: 4.3,
         feeDetails: {
            restaurantId: "235721",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 3900,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 3900,
         },
         parentId: "281782",
         avgRatingString: "4.3",
         totalRatingsString: "5K+",
         sla: {
            deliveryTime: 45,
            lastMileTravel: 4.4,
            serviceability: "SERVICEABLE",
            slaString: "45 mins",
            lastMileTravelString: "4.4 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-21 04:00:00",
            opened: true,
         },
         badges: {
            textExtendedBadges: [
               {
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                  fontColor: "#7E808C",
               },
            ],
         },
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {
                  badgeObject: [
                     {
                        attributes: {
                           description: "",
                           fontColor: "#7E808C",
                           iconId: "guiltfree/GF_Logo_android_3x",
                           shortDescription: "options available",
                        },
                     },
                  ],
               },
            },
         },
         aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-kundalahalli-marathahalli-bangalore-235721",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "29670",
         name: "Natural Ice Cream",
         cloudinaryImageId: "nfpplho8j0adedv34nlp",
         locality: "Kaikondrahalli",
         areaName: "Sarjapur Road",
         costForTwo: "₹150 for two",
         cuisines: ["Ice Cream", "Desserts"],
         avgRating: 4.8,
         veg: true,
         feeDetails: {
            restaurantId: "29670",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 10000,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 10000,
         },
         parentId: "2093",
         avgRatingString: "4.8",
         totalRatingsString: "10K+",
         sla: {
            deliveryTime: 35,
            lastMileTravel: 9.2,
            serviceability: "SERVICEABLE",
            slaString: "35 mins",
            lastMileTravelString: "9.2 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-20 23:55:00",
            opened: true,
         },
         badges: {},
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/natural-ice-cream-kaikondrahalli-sarjapur-road-bangalore-29670",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "18772",
         name: "California Burrito",
         cloudinaryImageId: "zwwvf8n0jlo1bjx19qzg",
         locality: "Marathahalli",
         areaName: "Marathahalli",
         costForTwo: "₹250 for two",
         cuisines: [
            "Mexican",
            "American",
            "Salads",
            "Continental",
            "Keto",
            "Healthy Food",
         ],
         avgRating: 4.4,
         feeDetails: {
            restaurantId: "18772",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 3900,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 3900,
         },
         parentId: "1252",
         avgRatingString: "4.4",
         totalRatingsString: "10K+",
         sla: {
            deliveryTime: 26,
            lastMileTravel: 3.7,
            serviceability: "SERVICEABLE",
            slaString: "26 mins",
            lastMileTravelString: "3.7 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-21 00:00:00",
            opened: true,
         },
         badges: {},
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {},
            },
         },
         aggregatedDiscountInfoV3: {
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/california-burrito-marathahalli-bangalore-18772",
         type: "WEBLINK",
      },
   },
   {
      info: {
         id: "70252",
         name: "Starbucks Coffee",
         cloudinaryImageId: "4df3497f1460dfd1ecd8125222f6d362",
         locality: "RMZ Eco World",
         areaName: "Bellandur",
         costForTwo: "₹400 for two",
         cuisines: [
            "Beverages",
            "Cafe",
            "Snacks",
            "Desserts",
            "Bakery",
            "Ice Cream",
         ],
         avgRating: 4,
         feeDetails: {
            restaurantId: "70252",
            fees: [
               {
                  name: "BASE_DISTANCE",
                  fee: 6200,
               },
               {
                  name: "BASE_TIME",
               },
               {
                  name: "ANCILLARY_SURGE_FEE",
               },
            ],
            totalFee: 6200,
         },
         parentId: "195515",
         avgRatingString: "4.0",
         totalRatingsString: "1K+",
         sla: {
            deliveryTime: 29,
            lastMileTravel: 6,
            serviceability: "SERVICEABLE",
            slaString: "29 mins",
            lastMileTravelString: "6.0 km",
            iconType: "ICON_TYPE_EMPTY",
         },
         availability: {
            nextCloseTime: "2023-08-20 23:59:00",
            opened: true,
         },
         badges: {
            textExtendedBadges: [
               {
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                  fontColor: "#7E808C",
               },
            ],
         },
         isOpen: true,
         type: "F",
         badgesV2: {
            entityBadges: {
               imageBased: {},
               textBased: {},
               textExtendedBadges: {
                  badgeObject: [
                     {
                        attributes: {
                           description: "",
                           fontColor: "#7E808C",
                           iconId: "guiltfree/GF_Logo_android_3x",
                           shortDescription: "options available",
                        },
                     },
                  ],
               },
            },
         },
         aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "ABOVE ₹700",
            discountTag: "FLAT DEAL",
            discountCalloutInfo: {
               message: "Free Delivery",
               logoCtx: {
                  logo: "v1655895371/free_delivery_logo_hqipbo.png",
               },
            },
         },
         orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
         },
         differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
               mediaType: "ADS_MEDIA_ENUM_IMAGE",
               lottie: {},
               video: {},
            },
         },
         reviewsSummary: {},
         displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
         restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
         link: "https://www.swiggy.com/restaurants/starbucks-coffee-rmz-eco-world-bellandur-bangalore-70252",
         type: "WEBLINK",
      },
   },
];

const Body = () => {
   return (
      <div className="body">
         <div className="search">Search</div>
         <div className="rest-container">
            {resList.map((resturant) => (
               <ResturantCard key={resturant.info.id} resData={resturant} />
            ))}
         </div>
      </div>
   );
};

const AppLayout = () => {
   return (
      <div className="app">
         <Header />
         <Body />
      </div>
   );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
