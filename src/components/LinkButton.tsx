interface Props {
  url: string;
  className?: string;
  label?: string;
  content?: React.ReactNode;
  openNewTab?: boolean;
}

const LinkButton: React.FC<Props> = ({
  url = '',
  className = '',
  label = '',
  content,
  openNewTab = false,
}) => (
  <a
    target={openNewTab ? '_blank' : '_self'}
    rel="noreferrer"
    href={url}
    className={`${className} block px-8 bg-secondary cursor-pointer rounded-3xl text-white tracking-wider font-medium py-2 hover:bg-[#E1366F] active:bg-[#C83063]`}
  >
    <div>{label || content}</div>
  </a>
);

export default LinkButton;
