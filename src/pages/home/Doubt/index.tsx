import { Banner } from "@/components/banner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Doubt = () => {
  return (
    <>
      <Banner />

      <section className="w-full flex flex-col items-center gap-10">
        <h1 className="text-3xl font-extrabold">Dúvidas frequentes</h1>

        <div className="w-8/12  mb-48 flex flex-col gap-10 p-10 bg-gradient-to-r from-color-primary to-color-secondary text-white rounded-md">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text:base md:text-2xl font-extrabold">
                Como faço para me tornar um membro?
              </AccordionTrigger>
              <AccordionContent>
                Para se tornar um membro, basta preencher o formulário de
                inscrição em nosso site.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text:base md:text-2xl font-extrabold">
                Quais são as formas de pagamento?
              </AccordionTrigger>
              <AccordionContent>
                Você pode pagar com cartão de crédito, boleto bancário ou pix.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text:base md:text-2xl font-extrabold">
                Posso cancelar minha assinatura ?
              </AccordionTrigger>
              <AccordionContent>
                Sim, você pode cancelar a assinatura a qualquer momento.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="w-full h-16 flex justify-center items-center bg-gradient-to-r from-color-primary to-color-secondary text-white">
        <h1>Todos os direitos reservados</h1>
      </section>
    </>
  );
};
