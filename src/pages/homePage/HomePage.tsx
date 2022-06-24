import FeedbackSection from './FeedbackSection';
import FooterSection from './FooterSection';
import LatestProjectSection from './LatestProjectSection';
import MainSection from './MainSection';
import SkillsSection from './SkillsSection';

const HomePage: React.FC = () => (
  <>
    <MainSection />
    <LatestProjectSection />
    <SkillsSection />
    <FeedbackSection />
    <FooterSection />
  </>
);

export default HomePage;
