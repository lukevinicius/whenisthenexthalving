import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function AccordionInfo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="md:text-lg text-justify">
          What Is a Bitcoin Halving?
        </AccordionTrigger>
        <AccordionContent className="text-base text-justify">
          Bitcoin halving is a prescheduled event where the reward for mining
          and verifying new blocks is reduced by 50% and miners earn only half
          the number of BTC per mined block. Scheduled to take place every
          210,000 blocks, or approximately every four years, Bitcoin halvings
          continue until the network has produced the maximum total supply of 21
          million BTC.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="md:text-lg text-justify">
          What Happens When Bitcoin Halves?
        </AccordionTrigger>
        <AccordionContent className="text-base">
          When Bitcoin halves, the reward for mining a new block is cut in half.
          This reduces the rate at which new BTC are created, effectively
          lowering the inflation rate of the cryptocurrency. The halving event
          occurs approximately every four years and is part of Bitcoin`s
          controlled supply, aiming to limit the total number of BTC to 21
          million.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="md:text-lg text-justify">
          Why Are the Halvings Occurring Less Than Every Four Years?
        </AccordionTrigger>
        <AccordionContent className="text-base">
          The Bitcoin mining algorithm has a target block time of approximately
          10 minutes. However, the actual time can vary, with some blocks taking
          more or less than 10 minutes to mine. This variation can affect the
          time frame to reach the next halving, which is expected to take place
          in April 2024.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="md:text-lg text-justify">
          Does Bitcoin Halving Affect Altcoins?
        </AccordionTrigger>
        <AccordionContent className="text-base">
          Bitcoin halving events draw attention to the cryptocurrency market,
          including Altcoins. Investors may become more optimistic about the
          potential price growth of other cryptocurrencies. This excitement can
          lead to increased investment in Altcoins, causing their prices to
          rise. Additionally, some miners may switch to mine Altcoins that offer
          better rewards as Bitcoin`s mining reward decreases.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
