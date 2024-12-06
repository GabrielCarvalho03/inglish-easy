import { Doubt } from "./Doubt";
import { Hero } from "./hero";
import { Plans } from "./Plans";
import { Possibility } from "./possibility";
import { WhyIA } from "./WhyIA";

export const Home = () => {

  return (
    <>
      <Hero more={false} />
      <WhyIA />
      <Plans />
      <Possibility />
      <Doubt />
    </>
  );
};
