import DCategory from "../public/images/promoninja/desktop/desktop-category.jpg";
import DColor1 from "../public/images/promoninja/desktop/desktop-color1.png";
import DColor2 from "../public/images/promoninja/desktop/desktop-color2.png";
import DColor3 from "../public/images/promoninja/desktop/desktop-color3.png";
import DOffers from "../public/images/promoninja/desktop/desktop-offers.png";
import DOffers2 from "../public/images/promoninja/desktop/desktop-offers2.png";
import DSponsor1 from "../public/images/promoninja/desktop/desktop-sponsor1.png";
import DSponsor2 from "../public/images/promoninja/desktop/desktop-sponsor2.png";

import MCategory from "../public/images/promoninja/mobile/mobile-category.png";
import MColor1 from "../public/images/promoninja/mobile/mobile-color1.png";
import MColor2 from "../public/images/promoninja/mobile/mobile-color2.png";
import MColor3 from "../public/images/promoninja/mobile/mobile-color3.png";
import MOffers from "../public/images/promoninja/mobile/mobile-offers.png";
import MOffers2 from "../public/images/promoninja/mobile/mobile-offers2.png";
import MSponsor1 from "../public/images/promoninja/mobile/mobile-sponsor1.png";
import MSponsor2 from "../public/images/promoninja/mobile/mobile-sponsor2.png";

import Preview1 from "../public/images/promoninja/preview/desktop-color1-preview.png";
import Preview2 from "../public/images/promoninja/preview/desktop-color2-preview.png";
import Preview3 from "../public/images/promoninja/preview/desktop-color3-preview.png";
import Preview4 from "../public/images/promoninja/preview/desktop-category-preview.jpg";
import Preview5 from "../public/images/promoninja/preview/desktop-offers-preview.png";
import Preview6 from "../public/images/promoninja/preview/desktop-offers2-preview.png";

import MReddit from "../public/images/portfolio/reddit-mobile.png";
import MTwitter from "../public/images/portfolio/twitter-mobile.png";
import MMusic from "../public/images/portfolio/music-mobile.png";
import MLanding from "../public/images/portfolio/landing-mobile.png";
import MChat from "../public/images/portfolio/chat-mobile.png";

import DReddit from "../public/images/portfolio/reddit-desktop.png";
import DTwitter from "../public/images/portfolio/twitter-desktop.png";
import DMusic from "../public/images/portfolio/music-desktop.png";
import DLanding from "../public/images/portfolio/landing-desktop.png";
import DChat from "../public/images/portfolio/chat-desktop.png";

export const projectMedia = {
  promoninja: {
    desktop: [
      DColor1,
      DColor2,
      DColor3,
      DCategory,
      DOffers,
      DOffers2,
      DSponsor1,
      DSponsor2,
    ],
    mobile: [
      MColor1,
      MColor2,
      MColor3,
      MCategory,
      MOffers,
      MOffers2,
      MSponsor1,
      MSponsor2,
    ],
    previews: [Preview1, Preview2, Preview3, Preview4, Preview5, Preview6],
    project: "Promoninja",
  },
  portfolio: {
    desktop: [DLanding, DMusic, DReddit, DTwitter],
    mobile: [MLanding, MMusic, MReddit, MTwitter],
    project: "ThePortfolio",
  },
  all: {
    desktop: [
      DColor1,
      DColor2,
      DColor3,
      DCategory,
      DOffers,
      DOffers2,
      DSponsor1,
      DSponsor2,
      DLanding,
      DMusic,
      DReddit,
      DTwitter,
    ],
    mobile: [
      MColor1,
      MColor2,
      MColor3,
      MCategory,
      MOffers,
      MOffers2,
      MSponsor1,
      MSponsor2,
      MLanding,
      MMusic,
      MReddit,
      MTwitter,
    ],
    project: "All",
  },
};
