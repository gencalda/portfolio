import mainPic from 'assets/images/mainPic.png';
import LinkButton from 'components/LinkButton';
import PageContainer from 'components/PageContainer';

const MainSection: React.FC = () => (
  <PageContainer id="mainSection" mainContainerClassName="bg-light-pink">
    <div className="h-screen flex items-center justify-center">
      <div className="p-6 flex flex-col w-full justify-center items-center md:flex-row-reverse md:gap-6 xl:justify-between">
        <div>
          <div className="bg-secondary rounded-2xl relative h-[12rem] w-[11rem] md:h-[20rem] md:w-[19rem] xl:h-[25rem] xl:w-[24rem]">
            <img
              className="absolute bottom-0"
              src={mainPic}
              alt="Genesis Carmelle Calda"
            />
          </div>
        </div>
        <div className="">
          <div>
            <div className="md:max-w-[500px] xl:max-w-[unset] text-center md:text-left pt-4">
              <h1 className="text-primary font-extrabold text-4xl tracking-wide text-center md:text-left xl:text-[2.7rem]">
                Genesis Carmelle Calda
              </h1>
              <p className="pt-4 text-tertiary">
                A passionate, result-driven, customer-focused, fast learner and
                analytical
                <span className="font-bold ml-1">
                  Fullstack Javascript developer.
                </span>
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <LinkButton
                label="Contact me"
                url="mailto:gencalda@gmail.com"
                className="mt-8 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </PageContainer>
);

export default MainSection;
