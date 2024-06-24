import PageDiscover from "./components/pageDiscover";
import PageFaq from "./components/pageFaq";
import PageWhy from "./components/pageWhy";
import PageMain from "./components/pageMain";
import PagePricing from "./components/pagePricing";

import Banner from "./components/banner";
import PageDasboard from "./components/dashboard";

export default function Solution() {

  return (
    <main className={container}>
      <PageMain/>
      <PageWhy />
      <PageDasboard />
      <PageDiscover />
      <Banner />
      <PagePricing />
      <PageFaq />
    </main>
  );
}
const container = "flex w-full flex-col items-center";
