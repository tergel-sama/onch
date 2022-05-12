import { SimpleGrid } from "@chakra-ui/react";
import CareerItem from "./CareerItem";

const data = [
  {
    title: `Audit & Advisory`,
    content: `Financial markets are growing ever more global 
    and more complex. And increasingly, companies, 
    regulators and shareholders seek greater 
    transparency and real-time access to financial 
    information.
    As an Audit & Advisory professional, you have the 
    opportunity to help enhance audit quality, provide 
    deep insights, and deliver a differentiated audit. 
    The work you do at Onch & Company may open 
    up a plenty of opportunity for years to come.`,
  },
  {
    title: `Tax
    Services`,
    content: `We meet with business leaders. We build close client service relationships. We understand client goals. And we advise clients on how tax may influence their ability to achieve those goals. We know tax inside and out and also often become deeply specialized in a strategic area of business or a specific industry.
    The work you do at Onch & Company may open up a plenty of opportunity for years to come.`,
  },
  {
    title: `Business
    Consultancy`,
    content: `We meet with business leaders. We build close client service relationships. We understand client goals. And we advise clients on how tax may influence their ability to achieve those goals. We know tax inside and out and also often become deeply specialized in a strategic area of business or a specific industry.
    The work you do at Onch & Company may open up a plenty of opportunity for years to come.`,
  },
  {
    title: `Onch
    Academy`,
    content: `Technology does not standstill. It takes innovative approaches to transform, modernize, and run existing technology platforms. The key is knowing when to take advantage of the new technologies to drive product and service enhancements, improve financial performance, and accelerate speed to market. The work you do at Onch & Company may open up a plenty of opportunity for years to come.`,
  },
  {
    title: `Student
    Internship`,
    content: `Discovery Internship
    The Discovery Internship is designed to expose freshman and sophomore interns’ different professional services at Onch & Company. This opportunity will help you grow your professional skills, empower your curiosity, and celebrate your versatility.`,
  },
  {
    title: `Partnerships with universities and community`,
    content: `We offer students a variety of opportunities to get to know Onch & Company. From internships and competitions to community service programs we look for students who will become tomorrow’s business leaders. Explore opportunities below to propel your career.`,
  },
];

export default function Career() {
  return (
    <>
      <h1 className="text-[#217b2f] text-[64px] font-bold my-12 mt-32">
        Careers at Onch
      </h1>
      <SimpleGrid spacing={10} columns={{ xl: 3, base: 1 }}>
        {data.map((item, index) => (
          <CareerItem
            key={index}
            title={item.title}
            content={item.content}
            long={index === 5 ? true : false}
          />
        ))}
      </SimpleGrid>
    </>
  );
}
