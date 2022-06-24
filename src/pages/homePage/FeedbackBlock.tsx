import classNames from 'classnames';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { IFeedback } from './utils';

interface Props extends IFeedback {
  className?: string;
  secondary?: boolean;
}

const FeedbackBlock: React.FC<Props> = ({
  messages = [],
  name = '',
  position = '',
  className = '',
  secondary = false,
}) => (
  <div
    className={classNames(`border rounded-3xl ${className}`, {
      'border-tertiary': !secondary,
      'bg-white': !secondary,
      // 'border-[#fed4e1]': secondary,
      // 'bg-[#fed4e1]': secondary,
      'border-light-pink': secondary,
      'bg-light-pink': secondary,
    })}
  >
    <div className="p-6">
      <div className="relative">
        <div className="pt-6 px-4 text-tertiary font-semibold">
          {messages?.map((message) => (
            <p className="pt-4 pb-2" key={uuidv4()}>
              {message}
            </p>
          ))}
        </div>
        <div className="text-secondary absolute top-0 left-0 text-3xl">
          <FaQuoteLeft />
        </div>
        <div className="text-secondary absolute bottom-[-24px] right-0 text-3xl">
          <FaQuoteRight />
        </div>
      </div>
      <div className="px-4 pt-4">
        <p className="text-primary text-lg pt-6 font-bold">{name}</p>
        <p className="text-tertiary">{position}</p>
      </div>
    </div>
  </div>
);

export default FeedbackBlock;
