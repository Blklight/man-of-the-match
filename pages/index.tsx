import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Howl, Howler } from "howler";
import { cn } from "@/lib/utils";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { getAllChampions } from "@/lib/services";
import ChampionCard from "@/components/ChampionCard";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "#ManOfTheMatch",
  description: "",
};

export async function getStaticProps() {
  const champions = await getAllChampions();
  return { props: { champions } };
}

const Home = ({ champions }: any) => {
  // console.log(champions);

  const sound = new Howl({
    src: ["/urna.mp3"],
    onloaderror(id, err) {
      // eslint-disable-next-line no-console
      console.warn("failed to load sound file:", { id, err });
    },
  });

  const play = () => {
    sound.play();
  };
  return (
    <>
      <Head>
        <title>#ManOfTheMatch</title>
      </Head>
      <div className="container mx-auto py-4">
        <div className="mb-5">
          <h1 className="lg:text-8xl text-6xl font-bold header-name mb-4">
            <span className="background-texture marker-line !px-4 !py-3 bg-purple-500 text-polen-500"></span>
          </h1>
          <p className="text-xl font-medium">
            <span className="marker-line bg-purple-500 !px-3 !py-1 text-polen-500">
              Developed by Team Blklight
            </span>
          </p>
        </div>
        <Tabs defaultValue="season" className="w-full">
          <TabsList>
            <TabsTrigger value="season">Votes - 2023/1 </TabsTrigger>
            <TabsTrigger value="champions" onClick={() => play()}>
              All Time Champions
            </TabsTrigger>
            <TabsTrigger value="bonus" onClick={() => play()}>
              Bonus
            </TabsTrigger>
          </TabsList>
          <TabsContent value="season" className="glass">
            <div className=" card card-plain card-body">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf5h6E2aKVPbPTamDR8dAixaxKfg2WKVJrvJQv85M4tUcwfcg/viewform?embedded=true"
                width=""
                height="1767"
                style={{
                  backgroundColor: "transparent !important",
                  borderRadius: "4px",
                }}
              >
                Carregando…
              </iframe>
            </div>
          </TabsContent>
          <TabsContent value="champions" className="!transparent py-4">
            {champions.map((champion: any) => (
              <ChampionCard champion={champion} key={champion.name} />
            ))}
          </TabsContent>

          <TabsContent value="bonus" className="glass">
            <div className="card card-plain card-body">
              <h3 className="text-3xl font-bold bg-purple-500 text-polen-500 mb-4">
                <span className="marker-line !py-1">
                  Daft Vitola - Wallpaper
                </span>
              </h3>
              <img
                src="https://i.imgur.com/3ndugq6.jpg"
                className="w-full h-auto mx-auto mb-4"
                alt=""
              />
              <Button asChild>
                <Link
                  href={"https://i.imgur.com/bZQauq4.jpg"}
                  className="bg-purple-500 text-polen-500 flex"
                  target="_blank"
                >
                  Clique aqui para fazer o download da versão em HD.
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </>
  );
};

export default Home;
