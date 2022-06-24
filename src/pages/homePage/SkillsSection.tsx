import React from 'react';
import PageContainer from 'components/PageContainer';
import SectionHeading from 'components/typography/SectionHeading';
import SectionSubHeading from 'components/typography/SectionSubHeading';
import SkillBlock from 'pages/homePage/SkillBlock';
import ExperienceRow from './ExperienceRow';
import { IWorkExperience } from './utils';

const SkillsSection: React.FC = () => {
  const FRONTEND_LIST = [
    'React.js',
    'Redux',
    'Typescript',
    'Ionic',
    'Tailwind',
    'Storybook',
    'Javascript',
    'CSS3',
    'SCSS',
    'Angular',
    'HTML5',
    'Bootstrap',
  ];
  const BACKEND_LIST = ['Node.js', 'AWS', 'MySQL', 'Symfony', 'PHP'];
  const AWS_LIST = [
    'Lambda',
    'DynamoDB',
    'S3',
    'API Gateway',
    'Cognito',
    'Amplify',
    'Step Function',
  ];
  const TESTING_LIST = ['Jest', 'Jasmine', 'Cypress'];
  const OTHERS = ['Git', 'Agile - Scrum'];
  const WORK_EXPERIENCES: IWorkExperience[] = [
    {
      year: 'September 29, 2021 - Present',
      position: 'Senior Frontend Developer',
      company: 'Cloud Employee',
    },
    {
      year: 'March 10, 2020 - September 23, 2021',
      position: 'Senior Frontend Developer',
      company: 'Microsourcing',
    },
    {
      year: 'August 03, 2018 - March 05, 2020',
      position: 'Application Development Analyst',
      note: 'Fullstack web developer',
      company: 'Accenture',
    },
    {
      year: 'May 2017 - July 27, 2018',
      position: 'Fullstack Web Developer',
      company: 'Creating Info',
    },
    {
      year: 'June 2016 - May 2017',
      position: 'Application Development Associate',
      company: 'Accenture',
    },
  ];

  return (
    <PageContainer id="skillsSection" mainContainerClassName="bg-white">
      <div className="p-6 w-full">
        <SectionHeading label="Skills and experience" />
        <div>
          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <div className="md:w-[500px] lg:w-[600px] xl:flex-grow">
              <SectionSubHeading label="Frontend" />
              <div className="flex flex-wrap gap-2 text-tertiary font-semibold">
                {FRONTEND_LIST?.map((skill) => (
                  <React.Fragment key={skill}>
                    <SkillBlock label={skill} />
                  </React.Fragment>
                ))}
              </div>
              <SectionSubHeading label="Backend" className="mt-6" />
              <div className="flex flex-wrap gap-2 text-tertiary font-semibold">
                {BACKEND_LIST?.map((skill) => (
                  <React.Fragment key={skill}>
                    <SkillBlock label={skill} />
                  </React.Fragment>
                ))}
              </div>
              <SectionSubHeading
                label="Amazon Web Services (AWS)"
                className="mt-6"
              />
              <div className="flex flex-wrap gap-2 text-tertiary font-semibold">
                {AWS_LIST?.map((skill) => (
                  <React.Fragment key={skill}>
                    <SkillBlock label={skill} />
                  </React.Fragment>
                ))}
              </div>
              <SectionSubHeading label="Testing" className="mt-6" />
              <div className="flex flex-wrap gap-2 text-tertiary font-semibold">
                {TESTING_LIST?.map((skill) => (
                  <React.Fragment key={skill}>
                    <SkillBlock label={skill} />
                  </React.Fragment>
                ))}
              </div>
              <SectionSubHeading label="Others" className="mt-6" />
              <div className="flex flex-wrap gap-2 text-tertiary font-semibold">
                {OTHERS?.map((skill) => (
                  <React.Fragment key={skill}>
                    <SkillBlock label={skill} />
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div>
              <SectionSubHeading
                label="6+ Years Experience"
                className="mt-6 md:mt-0"
              />
              {WORK_EXPERIENCES?.map((work) => (
                <React.Fragment key={work.year}>
                  <ExperienceRow
                    year={work.year}
                    position={work.position}
                    company={work.company}
                    note={work.note}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default SkillsSection;
