import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is custom app development?",
    answer: `Custom development is also known as bespoke, or tailor-made software. It refers to the process of designing software applications to address a specific need within a specific group of users. Unlike more traditional development solutions, custom-made applications are designed with your unique business goals and needs in mind, saving you the trouble of adjusting your operations to the offered functionality of a pre-developed software product.

At our company, before proceeding to the development process, we take our time to learn about your values and key expectations from the product you want us to create and base all our suggestions on an extensive market and user research, so you can be certain that the selection of features you’ll receive in the end will be the right fit.`,
  },
  {
    question: "How much does custom software cost?",
    answer: `The question you probably have in mind is “Will paying for the development of a custom app turn out to be more expensive than opting in for a pre-developed solution?”. The short answer is: “Yes, at least in the short run”.

Because in the long run, the costs of adapting to predefined software, the costs of integration, scaling up etc. might prove to be higher. Or it might even be that the money put into deployment of this solution will be just thrown away if the software isn’t able to meet some crucial requirements.

The bottom line is that the overall cost of a project is a highly individual matter, as it depends on a variety of factors, such as the number and nature of some specific features you want to include, the amount of people involved, the country where your software agency is based, and many others.`,
  },

  {
    question: "What are the benefits of a custom application?",
    answer: `There’s no universal answer to this question, as the core idea behind bespoke software is that it’s tailored just for you. So, technically, it could have all the benefits you require to address your current issues. But let’s be more specific.

We’ve already covered some key benefits of custom app development, such as better resource management, higher optimisation, personalised automation, or significantly greater brand engagement. However, the list doesn’t end here! Among other things, custom software can help you:
<ul class="list-disc list-inside pl-6 -space-y-4">
<li>Improve collaboration & productivity at your workplace
</li>
<li>Access the required data regardless of the size
</li>
<li>Secure your solution from digital fraud
</li>
<li>Maximise the effectiveness of the technology you use;
</li>
<li>Scale with ease, regardless of the architecture;
</li>
<li>… and many, many more!</li>
</ul>
`,
  },
  {
    question: "Is custom software developement right for you?",
    answer: `Custom solutions are made with purpose. They are well thought out and they exist to address pre-defined challenges. At the same time, the nature of customer applications allows for alterations, modifications, and scalability, if the future demands it. Basically, you go with custom software when you know exactly what you want, at least for the time-being.

Instead, if your business is in the very beginning of its journey and you are not quite sure about your market, audience, and potential challenges, off-the-shelf applications written with pre-existing frameworks may just be enough.

At Miquido, we always try to get to know the client and their product vision before settling on a course of the development process. So if you’re in doubt, don’t worry. We’ll hear you out and advise you on the best-fitting solution for your unique situation.`,
  },
  {
    question: "How do you choose a custom app development company?",
    answer: `We live during a time when competition is fierce. Every business swears to be the best. Here are some ways to choose a company that will help you succeed:
      <ul class="list-disc list-inside pl-6 -space-y-4">
      <li><b>Check references.</b> While quite an obvious one, many people tend to skip this step, attracted by low prices or bright visuals. Marketing is good, but try asking around on platforms like Clutch, that actually verify their reviewers and provide valuable insights;
</li>
      <li><b>Meet the team.</b> Or at least some people representing the team. You don’t need to become best friends, but your app developers will be your business partners for at least a few months – you need to make sure you’ll get along before committing to a project;
</li>
      <li><b>Consider your needs.</b> There are software agencies of all shapes and sizes out there. Do you need something unique and complex or will a simple template-based app do? Are you looking for a one-stop service or is there a specific aspect of your product you’d like to work on at the moment? What is your budget? Ask yourself all these questions and more and try to find a vendor that fits your list the best;
</li>
      <li><b>Research them.</b> Have an eye for a certain company already? Take a look at their portfolio and check the technology they use. You don’t need to be aguru of software development yourself, but at least this way you’ll be sure they know what they are talking about. Ask yourself if you like their style, their area of expertise, their approach to clients – all of these can become critical issues if overlooked in the very beginning;
</li>
      <li><b>Ask questions.</b> This is the final and the most important advice – transparent communication goes both ways. A development company will not be able to honestly tell you if they are the right fit for your product idea unless you share it with them. Don’t be afraid to talk, to ask questions, and to receive guidance. We always want our clients to succeed, so we can only assume it’s the same for the other agencies.</li>
      </ul>
`,
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-20 ">
      <div className="text-center lg:text-left lg:pl-4 mb-10 lg:mb-14">
        {/* <p className="text-[#E81F38] text-xl  tracking-[2px] uppercase">FAQs</p> */}
        <h2 className="text-3xl tracking-wide text-[#262626] md:text-[2.5rem] font-[500] leading-10 mt-4">
          Still not sure if Custom App Development{" "}
          <br className="hidden lg:block" />
          is right for you?
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_2fr] gap-12 items-start">
        {/* LEFT SIDE */}
        <div className="">
          <p className="text-[#728390] mb-6 md:mb-10">
            Make sure you check our Frequently Asked questions before you make
            up your mind! Or better yet – talk to one of our experts and let’s
            find the best solution for you!
          </p>
          <button className=" bg-[#001e8a] text-white  rounded font-medium hover:bg-blue-800 cursor-pointer px-6 py-2.5  shadow-md  transition-all duration-300">
            Get in Touch
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#ebebeb] rounded   w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center py-4 px-4 cursor-pointer text-left group"
              >
                <span
                  className={` ${
                    activeIndex === index ? "text-[#001E8A]" : "text-[#262626]"
                  }  text-lg font-[500]`}
                >
                  {faq.question}
                </span>
                <span className="text-[#001E8A]">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-white px-4 "
                  >
                    <p
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                      className="text-[#728390] py-3 whitespace-pre-line "
                    ></p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
