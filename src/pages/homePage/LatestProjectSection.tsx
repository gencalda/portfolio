import { useCallback } from 'react';
import slide3 from 'assets/images/appPictures/searchTransaction.png';
import slide2 from 'assets/images/appPictures/transactionDetail.png';
import slide1 from 'assets/images/appPictures/transactionList.png';
import ContentSwiper from 'components/ContentSwiper';
import DropdownButton from 'components/DropdownButton';
import LinkButton from 'components/LinkButton';
import PageContainer from 'components/PageContainer';
import SectionHeading from 'components/typography/SectionHeading';
import SectionSubHeading from 'components/typography/SectionSubHeading';

const LatestProjectSection: React.FC = () => {
  const getSlides = useCallback(
    (): React.ReactNode[] => [
      <div className="pb-9">
        <img src={slide1} alt="App transaction list screen" />
      </div>,
      <div className="pb-9">
        <img src={slide2} alt="App transaction details screen" />
      </div>,
      <div className="pb-9">
        <img src={slide3} alt="App transaction search screen" />
      </div>,
    ],
    []
  );

  return (
    <PageContainer
      id="latestProjectSection"
      mainContainerClassName="bg-secondary-background"
    >
      <div className="p-6 w-full">
        <SectionHeading label="Latest project" />
        <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:gap-6">
          <div className="w-[300px]">
            <ContentSwiper slides={getSlides()} />
          </div>
          <div className="text-tertiary">
            <SectionSubHeading label="My money tracker" />
            <p className="pb-4">
              An app that helps you keep track of your expenses for you to
              understand better where your money goes.
            </p>
            <p className="pb-6">
              Built from scratch using Ionic, React.js, Typescript, Tailwind,
              Node.js and Amazon Web Services (AWS) such as Lambda, DynamoDB,
              S3, API Gateway and Cognito.
            </p>
            <div className="pb-6 flex flex-col gap-3 md:flex-row">
              <DropdownButton
                label="View code"
                id="viewLatestProjectCodeButton"
                options={[
                  <a
                    className="w-full"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/gencalda/my-money-tracker-frontend"
                  >
                    <div className="px-4 py-2">Frontend</div>
                  </a>,
                  <a
                    className="w-full"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/gencalda/my-money-tracker-backend"
                  >
                    <div className="px-4 py-2">Backend</div>
                  </a>,
                ]}
                styles={{
                  '& .MuiMenu-list': {
                    width: '180px',
                  },
                }}
              />
              <LinkButton
                url="https://www.my-money-tracker.com/"
                openNewTab
                content={<div className="px-6">Explore</div>}
                className="text-center"
              />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default LatestProjectSection;
