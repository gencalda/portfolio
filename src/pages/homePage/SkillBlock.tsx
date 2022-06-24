interface Props {
  label: string;
}
const SkillBlock: React.FC<Props> = ({ label }) => (
  <div className="border border-light rounded-xl">
    <p className="px-4 py-2">{label}</p>
  </div>
);

export default SkillBlock;
