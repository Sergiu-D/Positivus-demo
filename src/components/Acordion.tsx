import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Acordion({ data }: { data: { title: string; text: string }[] }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {data.map((item, index) => {
        return (
          <AccordionItem value={`item-${index}`} key={`item-${index}`}>
            <AccordionTrigger><span>{index + 1}</span>{item.title}</AccordionTrigger>
            <AccordionContent>{item.text}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
