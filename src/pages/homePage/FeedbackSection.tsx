import PageContainer from 'components/PageContainer';
import SectionHeading from 'components/typography/SectionHeading';
import FeedbackSwiper from './FeedbackSwiper';
import SmallFeedbackSwiper from './SmallFeedbackSwiper';
import { IFeedback } from './utils';

const FeedbackSection: React.FC = () => {
  const FEEDBACK_LIST: IFeedback[] = [
    {
      messages: [
        `The quality of Gen's code is brilliant, nothing is ever too much trouble
      to fix. Even with slight UX adjustments where the user story hasn't been
      clear, Gen makes the changes perfectly and attaches evidence on the ticket
      proving that it works.`,
        `I always feel confident that Gen has dev tested her fixes. Thanks Gen for being so amazing.`,
      ],
      name: 'Nicola Thomas',
      position: 'Test Manager',
    },
    {
      messages: [
        `Gen is great at pushing the boundaries and being creative. It's brilliant that Gen will discuss if something can be done in a better way and move forward with these ideas as it greatly improves the product and customers experience.`,
        `Gen's open communication and asking questions to ensure we get things right makes my job much easier and I always feel a ticket is in good hands when Gen is working on it. Great team work and always supporting others.`,
      ],
      name: 'Caroline Mennim',
      position: 'Product Owner',
    },
    {
      messages: [
        `I only ever hear good things about the work that Gen has done, and this is certainly visible in the reduction in QA bugs that I see. Keep up the excellent work.`,
      ],
      name: 'Jay Evans',
      position: 'Lead Engineer',
    },
    {
      messages: [
        `Gen finishes her tasks with little assistance to none. She finishes her tasks before the deadline and have them tested early.`,
        `She is currently no longer my teammate but with regards to the impact of the work she has done is huge that up to this day is appreciated and became basis to some of our code. Her work are now in production without any reported issues.`,
      ],
      name: 'Lloyd Nathanael Sollano',
      position: 'Application Development Senior Analyst',
    },
    {
      messages: [
        `Gen is a valuable member of the team. She's very willing to learn and does not back down from complex tasks. She quickly adjusted to agile process and is not afraid to voice out her opinions on problems the team is encountering. She quickly picked up coding in Node.js, Ionic and Angular.`,
      ],
      name: 'Jeffrey Ortañez',
      position: 'Application Development Senior Analyst',
    },
    {
      messages: [
        `Gen is one of the dev that we can rely on to complete her deliverables on time. She is a fast learner and can quickly pick up the approaches discussed to her. Also, she provides her inputs on the implementation.`,
      ],
      name: 'Charis Nuñez',
      position: 'Technical Architect',
    },
  ];

  return (
    <PageContainer
      id="feedbackSection"
      mainContainerClassName="bg-secondary-background"
    >
      <div className="p-6 w-full">
        <SectionHeading label="What the colleagues say" />
        <div className="flex flex-col justify-center items-center md:flex-row">
          <SmallFeedbackSwiper
            className="md:hidden"
            feedbacks={FEEDBACK_LIST}
          />
          <FeedbackSwiper
            className="hidden md:block"
            feedbacks={FEEDBACK_LIST}
          />
        </div>
      </div>
    </PageContainer>
  );
};

export default FeedbackSection;
