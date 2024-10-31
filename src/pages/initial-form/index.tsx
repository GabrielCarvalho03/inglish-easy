import { Leguage } from "@/components/leguage";
import { useTranslation } from "react-i18next";

export const InitialForm = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-primary w-full h-screen ">
      <div className="w-full flex justify-end py-5 px-5">
        <Leguage />
      </div>
      <section className="w-full flex justify-center py-10">
        <h1 className="text-white text-2xl">{t("hello")}</h1>
      </section>
    </main>
  );
};
