import { Helmet } from "react-helmet";
import Hero from "../../Components/Home/Hero/Hero";
import Refer from "../../Components/Home/Refer/Refer";
import Resources from "../../Components/Home/Resources/Resources";
import Reviews from "../../Components/Home/Reviews/Reviews";
import Sponsors from "../../Components/Home/Sponsors/Sponsors";
import Trusted from "../../Components/Home/Trusted/Trusted";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Home</title>
        {/* <meta name="description" content="Helmet application" /> */}
      </Helmet>
      <Hero />
      <Sponsors />
      <Trusted />
      <Refer />
      <Resources />
      <Reviews />
    </main>
  );
};

export default Home;
