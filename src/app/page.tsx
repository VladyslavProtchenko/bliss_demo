"use client";

import PageSolutions from "./components/PageSolutions";
import PageDiscover from "./components/pageDiscover";
import PageFaq from "./components/pageFaq";
import PageFeatures from "./components/pageFeatures";
import PageHow from "./components/pageHow";
import PageMain from "./components/pageMain";
import PagePricing from "./components/pagePricing";
import PageProblems from "./components/pageProblems";
import PageStatistic from "./components/pageStatistic";
import PageWhy from "./components/pageWhy";

export default function Home() {

  return (
    <main className={container}>
      <PageMain/>
      <PageProblems />
      <PageSolutions />
      <PageFeatures />
      <PageWhy />
      <PageDiscover />
      <PagePricing />
      <PageHow />
      <PageStatistic />
      <PageFaq />
    </main>
  );
}
const container = "flex w-full flex-col max-w-[1440px] items-center";
