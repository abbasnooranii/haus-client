import Banner from "../../../Components/Shared/Tanants-similler/Banner/Banner";
import Filter from "../../../Components/Hauses/Filter/Filter";
import { Helmet } from "react-helmet";
import MainTitleDesc from "../../../Components/Shared/Articles/MainTitleDesc/MainTitleDesc";
import SecoundaryTitleDesc from "../../../Components/Shared/Articles/SecoundaryTitleDesc/SecoundaryTitleDesc";
import ArticleCard from "../../../Components/Shared/Articles/ArticleCard/ArticleCard";

const TenantsGuideToRanting = () => {
  return (
    <div>
      <Helmet>
        <title>A TENANTS GUIDE TO RENTING</title>
        {/* <meta name="description" content="Helmet application" /> */}
      </Helmet>
      <Filter />
      <Banner title="A TENANTS GUIDE TO RENTING" width="400px" />
      <MainTitleDesc
        title="A TENANT’S GUIDE TO RENTING (7 EASY STEPS)"
        desc="When you’re looking to rent a home, it can often feel like the pressure is on to make a quick decision or you’ll lose out. Don’t let these feelings get the best of you! It can take some careful thought and consideration to find the right place for you, so it’s worth being prepared. We have over 20 years of lettings experience, so read on and let us guide you in the right direction."
      />
      <SecoundaryTitleDesc
        title="GET YOUR DOCUMENTS IN ORDER"
        desc="As you’re starting to search, begin to gather the documents you’ll need for an application. Make sure you have up-to-date photographic I.D. in the form of a driver’s license or a passport. It can be easy to have misplaced these documents if you haven't needed to use them for a while so make sure you've got them ready to go for when you find the right place. You'll also need to be able to prove your employment status, so speak to your employer if needs be to make sure this won't be an issue for you down the line."
      />
      <SecoundaryTitleDesc
        title="DO THE MATHS"
        desc="Decide what you can afford and for how long –it’s a legal commitment, so make sure you do the maths and make sure you are realistic. Think about reviewing your finances first and deciding on what your maximum limit is, once you’ve factored in things like food, bills and transport costs. You should also make sure you’ve set funds aside to cover a reasonable security deposit (usually 1-2 times monthly rent) and initial rent. Having all these things in place means that when you find the perfect place, you’re ready to act straight away"
      />
      <SecoundaryTitleDesc
        title="LOCATION"
        desc="When deciding on your search area, the wider you’re prepared to consider, the better chance you have of finding your perfect home. Think about what’s most important to you – are you reliant on public transport, or could you live further afield? Do you want to be near shops, or could you sacrifice convenience for calm? You might think your mind is made up on these points, but writing them down in black and white can help you prioritise what you want and what you need so that you aren’t swayed into making the wrong decision by a great house."
      />
      <SecoundaryTitleDesc
        title="ARRANGE A VIEWING"
        desc="It is essential to see the property in person before committing to a tenancy agreement. Think about your list of priorities, take it with you and be honest about how well the property fulfils these. Be sure to look out for the smaller details too, as these can often speak volumes about how well looked-after the property is."
      />
      <SecoundaryTitleDesc
        title="APPLY"
        desc="Once you have decided on a property that’s right for you, you’ll need to supply various pieces of information to determine your suitability for the property. This information will include things like your employment details and current landlord details."
      />
      <SecoundaryTitleDesc
        title="SIGN ON THE DOTTED LINE"
        desc="A reputable agent or landlord will provide you with a comprehensive tenancy agreement, which should clearly state the rights and responsibilities of both parties. It should set out reasonable arrangements for any inspections or maintenance to be carried out and be clear on what happens at the end of the tenancy. You should also be provided with a full inventory, the property’s EPC (Energy Performance Certificate), and any other documents like gas and electrical safety certificates. We encourage you to take your time to go through the paperwork and point out anything you’re unsure about – a good agent will always make sure all parties are clear and happy before signing."
      />
      <SecoundaryTitleDesc
        title="HOME SWEET HOME"
        desc="As you get settled, safely file any paperwork and make sure the administrative side is sorted. Your landlord is legally obliged to protect your deposit within an accredited scheme such as the TDS (Tenancy Deposit Scheme), which gives you access to dispute resolution services, and compensation if you don’t get the deposit back when you leave. They should also give you details of emergency contacts, and other useful property information like where the fuse box and meters are."
      />

      <div className="container mx-auto px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
};

export default TenantsGuideToRanting;
