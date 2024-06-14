import PageDiscover from "./components/pageDiscover";
import PageFaq from "./components/pageFaq";
import PageWhy from "./components/pageWhy";
import PageMain from "./components/pageMain";
import PagePricing from "./components/pagePricing";

import ExplorePage from "./components/explore";

export default function Solution() {

  return (
    <main className={container}>
      <PageMain/>
      <ExplorePage />
      <PageWhy />
      <PagePricing />
      <PageFaq />
    </main>
  );
}
const container = "flex w-full flex-col max-w-[1440px] items-center";
