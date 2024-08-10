import Hero from "../../Components/Home/Hero/Hero";
import Refer from "../../Components/Home/Refer/Refer";
import Resources from "../../Components/Home/Resources/Resources";
import Sponsors from "../../Components/Home/Sponsors/Sponsors";
import Trusted from "../../Components/Home/Trusted/Trusted";

const Home = () => {
  return (
    <main>
      <Hero />
      <Sponsors />
      <Trusted />
      <Refer />
      <Resources />
    </main>
  );
};

export default Home;
