interface Props {
  children: React.ReactNode;
  mainContainerClassName?: string;
  innerContainerClassName?: string;
  id?: string;
}

const PageContainer: React.FC<Props> = ({
  children,
  mainContainerClassName = '',
  innerContainerClassName = '',
  id,
}) => (
  <div
    id={id}
    className={`w-full flex justify-center ${mainContainerClassName}`}
  >
    <div
      className={`w-full grow max-w-[100%] xl:max-w-[1280px] 2xl:max-w-[1300px] ${innerContainerClassName}`}
    >
      {children}
    </div>
  </div>
);

export default PageContainer;
