import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import PageContainer from 'components/PageContainer';

const FooterSection: React.FC = () => (
  <PageContainer id="footerSection" mainContainerClassName="bg-primary">
    <div className="px-6 py-12 w-full flex flex-col md:flex-row justify-between">
      <div>
        <p className="text-secondary font-bold text-xl tracking-widest">
          Gen Calda
        </p>
      </div>
      <div className="text-white flex flex-col gap-2 my-2 md:flex-row md:gap-8">
        <a target="_blank" rel="noreferrer" href="https://github.com/gencalda">
          <div className="flex items-center gap-2">
            <div className="text-xl text-[#5e333f]">
              <FaGithub />
            </div>
            <p>github.com/gencalda</p>
          </div>
        </a>
        <a href="mailto:gencalda@gmail.com">
          <div className="flex items-center gap-2">
            <div className="text-xl text-[#5e333f]">
              <MdEmail />
            </div>
            <p>gencalda@gmail.com</p>
          </div>
        </a>
      </div>
    </div>
  </PageContainer>
);

export default FooterSection;
