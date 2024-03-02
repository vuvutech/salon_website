import React from "react";
import { NextSeo } from "next-seo";

// Keywords List
export const keywords = [
  "blow dry short hair Johannesburg",
  "medium hair blowout Johannesburg",
  "long hair blow wave Johannesburg",
  "wash and blow Johannesburg",
  "kids cornrows near me Johannesburg",
  "adults cornrows salon Johannesburg",
  "cornrow extensions Johannesburg",
  "kids hair braiding styles Johannesburg",
  "labor weave Johannesburg",
  "micro rings hair extensions Johannesburg",
  "silicone weave installation Johannesburg",
  "micro extensions salon Johannesburg",
  "kids singles braids Johannesburg",
  "adults twist and singles Johannesburg",
  "stylish hair braiding for women Johannesburg",
  "relaxer cut color and style Johannesburg",
  "hair treatment and style salon Johannesburg",
  "wash color treat twist style Johannesburg",
  "razor shave near me Johannesburg",
  "powder shave hair salon Johannesburg",
  "brush cut and style Johannesburg",
  "haircut Johannesburg",
  "hair trim Johannesburg",
  "cut and color styling Johannesburg",
  "dreadlocks maintenance Johannesburg",
  "wash twist style dreadlocks Johannesburg",
  "moroccanoil treatment Johannesburg",
  "mizani protein moisture treatment Johannesburg",
  "scalp treatment salon near me Johannesburg",
  "Hair Salon",
  "Elsie Hair Salon",
  "Elsie Hairs",
  "Elsie Hair",
  "Elsie",
];

const SEO = () => (
    <NextSeo
      title="Elsie Hair Salon - Johannesburg Hair Services"
      description="Explore our professional hair services in Johannesburg. From blowouts to weaves, singles, combos, grooming, dreadlocks, and treatments, we've got you covered."
      keywords={keywords.join(", ")}
      // Add other necessary meta tags and configurations
    />
  );
  
  export default SEO;