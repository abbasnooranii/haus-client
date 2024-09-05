import CholeImg from "../../../assets/Images/ContactUs/Chole.png";
import WillImg from "../../../assets/Images/ContactUs/Will.jpg";
import LasiaImg from "../../../assets/Images/ContactUs/Lesia.jpg";
import KimberleyImg from "../../../assets/Images/ContactUs/Kimberley.jpg";
import MiaImg from "../../../assets/Images/ContactUs/Mia.png";
import MemberDetails from "./MemberDetails";
import { useState } from "react";

const teamMembers = [
  // Chloe Rhodes
  {
    id: 1,
    name: "Chloe Rhodes",
    designation: "Managing Director",
    img: CholeImg,
    about:
      "I joined Haus Sales + Lettings in December 2017 following many years working for well- known corporate estate agents in both North and West Yorkshire. I am level 3 qualified in letting and property management (ARLA) after successfully completing (and passing) 4 industry exams. I have vast experience as an estate agent, especially in residential investment and development. Always here to help be it, property sourcing for investors, portfolio advice, valuations or everything between/behind the scenes. Every one of our team members has years of experience in the West Yorkshire property market and are committed to giving our customers the best service. Our team is great and I'm proud of what we've all achieved together. When I am not in the office you will usually find me on a long country walk or out for dinner with family and friends.",
  },
  // Will White
  {
    id: 2,
    name: "Will White",
    designation: "Senior Property Consultant & Valuer",
    img: WillImg,
    about: `I have been at Haus Sales + Lettings since the start of 2023 following 10 + years of Lettings Property Management experience.
Within my role, no two days are the same. From property sourcing for investors looking to extend their portfolio, portfolio advice on maximising annual income, valuations and everything in between, I am always here to help!
My vast knowledge / experience within property management is my most useful tool, I love to ensure landlords are making the most of their investment. Our Portfolio Health Checks are a great way to highlight areas for improvement. I have worked with many clients on refurbishments, HMO conversions with adding a dormer or converting a basement.
When I’m not in the office, I like to spend time with the family, seaside visits are a particular favourite of ours!`,
  },
  // Lesia Robinson
  {
    id: 3,
    name: "Lesia Robinson",
    designation: "Sales & Lettings Negotiator",
    img: LasiaImg,
    about: `I joined Haus Sales and Lettings back in March 2023 after working within childcare for 6 years.
My role as a sales and lettings negotiator includes helping you find your perfect home. I am here to help you every step of the way; from meeting you on viewings, guiding you through every step of your paperwork through to issuing keys on the most exciting day - Move In Day!
I really enjoy the fast paced environment, speaking to different landlords to generate new business and having no two days the same. My favourite part of the job is meeting you on the move in day, handing you the keys to your new home and congratulating you on your new adventure.
When I'm not in the office you will see me out for brunch enjoying a drink or two, or at home with my cat Pebbles.`,
  },
  // Kimberley Wilson
  {
    id: 4,
    name: "Kimberley Wilson",
    designation: "Sales & Lettings Negotiator",
    img: KimberleyImg,
    about: `My role as Sales & Lettings Negotiator involves liaising with our clients and keeping them up to date with everything behind the scenes as well as meeting tenants and buyers at viewings, guiding them through the moving process process and helping them find their perfect home.
I enjoy the fast paced environment and always being busy, no two days are the same for me here at Haus.
When I'm not in the office my favourite things to do are watching Rugby or travelling back up North to visit family and enjoying a blustery walk on the North East coastline, whilst treating myself to an icecream.`,
  },
  // Mia Eckersley
  {
    id: 5,
    name: "Mia Eckersley",
    designation: "Lettings Administrator",
    img: MiaImg,
    about: `I joined Haus Sales & Lettings in 2022 as a part time Lettings Administrator, whilst at University in Leeds.
I enjoy my job here at haus as it involves communicating with different clients on a daily basis, no day is the same however it is all about organisation and co-ordination. I am the one at the other end of the phone, assisting with your query, arranging your viewing or booking your valuation.
Office based, I am here to help with tenant applications to key handovers and landlord queries.
When I’m not at work you’ll find me watching whatever’s new at the cinema or enjoying a good pub quiz.`,
  },
];

const MeetTheTeam = () => {
  const [member, setMember] = useState(teamMembers[0]);

  return (
    <div className="container mx-auto px-3 my-12">
      <h1 className="text-xl md:text-3xl font-roboto font-bold text-center">
        MEET THE TEAM
      </h1>
      <div className="mt-12 flex gap-6 *:w-[225px] overflow-x-auto text-center">
        {teamMembers.map((member) => (
          <div
            className="flex flex-col items-center cursor-pointer hover:bg-gray-100 duration-300 p-4"
            key={member.id}
            onClick={() => setMember(member)}
          >
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
              <img src={member.img} alt="" />
            </div>
            <h4 className="text-xl font-roboto font-bold text-center mt-6">
              {member.name}
            </h4>
            <span className="font-roboto">{member.designation}</span>
          </div>
        ))}
      </div>
      <MemberDetails {...member} />
    </div>
  );
};

export default MeetTheTeam;
