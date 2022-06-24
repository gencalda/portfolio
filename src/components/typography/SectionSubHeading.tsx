interface Props {
  label: string;
  className?: string;
}

const SectionSubHeading: React.FC<Props> = ({ label, className = '' }) => (
  <h3
    className={`pb-4 text-primary font-extrabold text-2xl tracking-wide ${className}`}
  >
    {label}
  </h3>
);

export default SectionSubHeading;
