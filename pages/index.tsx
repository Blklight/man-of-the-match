import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Howl, Howler } from "howler";
import { cn } from "@/lib/utils";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { getAllChampions } from "@/lib/services";
import ChampionCard from "@/components/ChampionCard";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useState } from "react";

export const metadata: Metadata = {
  title: "#ManOfTheMatch",
  description: "",
};

export async function getStaticProps() {
  const champions = await getAllChampions();
  return { props: { champions } };
}

const Home = ({ champions }: any) => {
  const [show, setShow] = useState(false);

  const sound = new Howl({
    src: ["/urna.mp3"],
    onloaderror(id, err) {
      // eslint-disable-next-line no-console
      console.warn("failed to load sound file:", { id, err });
    },
  });

  const winners = [
    {
      photo: "https://i.imgur.com/nQ1MWHe.jpg",
      photoHD: "https://i.imgur.com/ENK4JCt.jpg",
    },
    {
      photo: "https://i.imgur.com/hW3jzGf.jpg",
      photoHD: "https://i.imgur.com/HFS85z7.jpg",
    },
  ];

  const seconds = [
    {
      quote: "Sentimento muito bom, é comer casada.",
      name: "Ultimate WNDL",
    },
  ];

  const thirds = [
    {
      quote: "O cara que respira tecnologia é o rodrigo que usa nebulizador",
      name: "Ultimate",
    },
  ];

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
            <span className="background-texture marker-line !px-4 !py-3 bg-orange-300 text-dark-500"></span>
          </h1>
          <p className="text-xl font-medium">
            <span className="marker-line !px-3 !py-1 bg-orange-300 text-dark-500">
              Developed by Team Blklight
            </span>
          </p>
        </div>
        <Tabs defaultValue="season" className="w-full">
          <TabsList>
            <TabsTrigger value="season">Votes - 2023/2 </TabsTrigger>
            <TabsTrigger value="champions" onClick={() => play()}>
              All Time Champions
            </TabsTrigger>
            <TabsTrigger value="bonus" onClick={() => play()}>
              Bonus
            </TabsTrigger>
          </TabsList>
          <TabsContent value="season" className="glass">
            <div className="card card-plain card-body">
              <Button
                className="bg-orange-300 text-dark-500 hover:bg-orange-600 hover:text-light-500 text-xl"
                size={"lg"}
                onClick={() => {
                  play();
                  setShow(!show);
                }}
              >
                Champions of the season
              </Button>
              {show && (
                <section
                  className={`my-5 transition-all ${
                    show ? "fade-in-bottom" : "fade-out-bottom"
                  }`}
                >
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold bg-orange-300 text-dark-500 tracking-wide mb-2">
                      <span className="marker-line"> Winner(s) </span>
                    </h3>
                    {winners.map((winner, index) => (
                      <div key={index}>
                        <img
                          src={winner.photo}
                          className="w-full h-auto mx-auto my-4"
                          alt={`avatar`}
                        />
                        <div className="flex justify-center my-2">
                          <Button
                            className="bg-orange-300 text-dark-500 hover:bg-orange-600 hover:text-light-500 rounded-sm"
                            size={"sm"}
                            asChild
                          >
                            <Link href={winner.photoHD} target="_blank">
                              Download HD Version
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mb-4">
                    <h4 className="text-2xl font-bold bg-orange-300 text-dark-500 mb-2">
                      <span className="marker-line"> 2ª place</span>
                    </h4>
                    <div className="px-2">
                      {seconds.map((second, key) => (
                        <p
                          key={key}
                          className="text-xl text-dark-500 font-medium mb-2"
                        >
                          {second.quote} - {second.name}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold bg-orange-300 text-dark-500 mb-2">
                      <span className="marker-line"> 3ª place</span>
                    </h4>
                    <div className="px-2">
                      {thirds.map((third, key) => (
                        <p
                          key={key}
                          className="text-xl text-dark-500 font-medium mb-2"
                        >
                          {third.quote} - {third.name}
                        </p>
                      ))}
                    </div>
                  </div>
                </section>
              )}

              {/* <iframe
                src=""
                width="640"
                height="2550"
                className="iframe-style-force mx-auto block"
              >
                Carregando…
              </iframe> */}
            </div>
          </TabsContent>
          <TabsContent value="champions" className="!transparent py-4">
            {champions.map((champion: any) => (
              <ChampionCard champion={champion} key={champion.name} />
            ))}
          </TabsContent>

          <TabsContent value="bonus" className="glass">
            <div className="card card-plain card-body">
              <h3 className="text-3xl font-bold bg-orange-300 text-dark-500 mb-4">
                <span className="marker-line !py-1">
                  Daft Vitola - Wallpaper
                </span>
              </h3>
              <img
                src="https://i.imgur.com/3ndugq6.jpg"
                className="w-full h-auto mx-auto mb-4"
                alt=""
              />
              <Button
                className="bg-orange-300 text-dark-500 hover:bg-orange-600 hover:text-light-500"
                asChild
              >
                <Link
                  href={"https://i.imgur.com/bZQauq4.jpg"}
                  className="bg-orange-300 text-dark-500 hover:bg-orange-600 hover:text-light-500 flex"
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
