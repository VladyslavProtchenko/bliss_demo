import PageDiscover from "./components/pageDiscover";
import PageFaq from "./components/pageFaq";
import PageFeatures from "./components/pageFeatures";
import PageHow from "./components/pageHow";
import PageMain from "./components/pageMain";
import PageProblems from "./components/pageProblems";
import PageWhy from "./components/pageWhy";
import ExplorePage from "./components/explore";
import Integrations from "@components/integrationSection/Integration";
import Choose from "@components/choose/Choose";
export default function Home() {

  return (
    <main className={container}>
      <PageMain/>
      <PageProblems />
      <ExplorePage />
      <PageFeatures />
      <PageWhy />
      <PageHow />
      <PageDiscover />
      <Integrations />
      <Choose />
      <PageFaq />
    </main>
  );
}
const container = "w-full flex flex-col items-center";