import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Star } from "@phosphor-icons/react";

const ChampionCard = ({ champion }: any) => {
  return (
    <div className="flex md:flex-row flex-col glass rounded px-4 py-5 mb-4">
      <img
        src={champion.avatar ? champion.avatar : "images/blklight-thumb.jpg"}
        className="w-32 h-32 rounded-full object-cover mx-auto"
        alt={`${champion.name} avatar`}
      />
      <div className="flex-1 md:ml-5">
        <h4 className="text-3xl font-bold tracking-wider md:text-left text-center">
          {champion.name}
        </h4>
        <div className="flex gap-1 md:justify-start justify-center mb-3">
          {champion.championships.map((star: any) => (
            <TooltipProvider key={star.quote}>
              <Tooltip>
                <TooltipTrigger>
                  <Star
                    size={36}
                    weight="duotone"
                    className="text-orange-400"
                  />
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>{star.period}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="tracking-wider">
              Winner Quotes
            </AccordionTrigger>
            <AccordionContent>
              {champion.championships.map((quote: any) => (
                <div className="mb-3" key={quote.quote}>
                  <h5 className="text-xl font-bold tracking-wider mb-2">
                    <span className="marker-line bg-orange-300 text-dark-500 !py-1">
                      {quote.period}
                    </span>
                  </h5>
                  <p className="text-lg font-medium">{quote.quote}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default ChampionCard;
