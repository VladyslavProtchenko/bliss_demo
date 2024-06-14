import Banner from "./components/banner";
import PageFaq from "./components/pageFaq";
import PageFeatures from "./components/pageFeatures";
import PageMain from "./components/pageMain";
import Together from "./components/together";


export default function Home() {

  return (
    <main className={container}>
      <PageMain/>
      <PageFeatures />
      <Banner />
      <Together />
      <PageFaq />
    </main>
  );
}
const container = "flex w-full flex-col max-w-[1440px] items-center";
