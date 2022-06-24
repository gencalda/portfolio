interface Props {
  label: string;
  className?: string;
}

const SectionHeading: React.FC<Props> = ({ label, className = '' }) => (
  <h2 className={`py-8 font-bold text-primary text-3xl ${className}`}>
    {label}
  </h2>
);

export default SectionHeading;
