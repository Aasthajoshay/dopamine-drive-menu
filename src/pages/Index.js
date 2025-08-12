import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero"
import { DopamineMenu } from "../components/DopamineMenu";
import { HealthyMeals } from "../components/HealthyMeals";
import { ShareMealForm } from "../components/ShareMealForm";

const Index = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <div id="activities">
        <DopamineMenu />
      </div>
      <div id="meals">
        <HealthyMeals />
      </div>
      <div id="share">
        <ShareMealForm />
      </div>
    </div>
  );
};

export default Index;