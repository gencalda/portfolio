import PageContainer from 'components/PageContainer';

const linkStyle = 'hover:text-secondary';

const DesktopNavigationBar: React.FC = () => (
  <PageContainer mainContainerClassName="bg-light-pink">
    <div className="w-full flex justify-between pt-6 px-6 tracking-wider">
      <div className="text-secondary font-extrabold text-2xl">Gen Calda</div>
      <div className="flex gap-8 text-sm font-semibold text-primary">
        <a href="#latestProjectSection" className={linkStyle}>
          Works
        </a>
        <a href="#skillsSection" className={linkStyle}>
          Skills
        </a>
        <a href="#feedbackSection" className={linkStyle}>
          Feedback
        </a>
        <a href="mailto:gencalda@gmail.com" className={linkStyle}>
          Contact
        </a>
      </div>
    </div>
  </PageContainer>
);

export default DesktopNavigationBar;
