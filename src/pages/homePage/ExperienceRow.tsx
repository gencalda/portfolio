import { IWorkExperience } from './utils';

const ExperienceRow: React.FC<IWorkExperience> = ({
  year = '',
  position = '',
  company = '',
  note,
}) => (
  <div className="flex flex-col py-4 border-t-2 border-light mt-4">
    <div>
      <p className="text-primary font-bold">{year}</p>
    </div>
    <div>
      <p className="text-secondary font-bold">{position}</p>
      {note && <p className="text-secondary text-sm">*{note}</p>}
      <p className="text-tertiary">{company}</p>
    </div>
  </div>
);

export default ExperienceRow;
