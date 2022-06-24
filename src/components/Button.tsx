import classNames from 'classnames';

interface Props {
  id?: string;
  label?: string;
  outline?: boolean;
  active?: boolean;
  className?: string;
  content?: React.ReactNode;
  onClickHandler?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button: React.FC<Props> = ({
  label = '',
  outline = false,
  active = false,
  className = '',
  content,
  id = '',
  onClickHandler,
}) => {
  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    onClickHandler?.(event);
  };

  return (
    <button
      onClick={onClick}
      id={id}
      type="button"
      className={classNames(
        `w-full cursor-pointer ${className} md:w-auto tracking-wider py-2 rounded-3xl`,
        {
          'border border-secondary bg-secondary hover:bg-[#E1366F] active:bg-[#C83063] text-white font-medium':
            !outline,
          'btn-outline border border-secondary text-secondary font-medium':
            outline,
          'btn-active': active,
          'md:px-10': !content,
        }
      )}
    >
      <div>{label || content}</div>
    </button>
  );
};

export default Button;
