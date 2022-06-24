import { useCallback } from 'react';
import ContentSwiper from 'components/ContentSwiper';
import FeedbackBlock from './FeedbackBlock';
import { IFeedback } from './utils';

const SmallFeedbackSwiper: React.FC<{
  feedbacks: IFeedback[];
  className?: string;
}> = ({ feedbacks = [], className = '' }) => {
  const getSlides = useCallback((): React.ReactNode[] => {
    if (!feedbacks) {
      return [];
    }

    return feedbacks?.map?.((feedback, idx) => (
      <FeedbackBlock
        messages={feedback.messages}
        name={feedback.name}
        position={feedback.position}
        className="mb-9 mx-2"
        secondary={(idx + 1) % 2 === 0}
      />
    ));
  }, [feedbacks]);

  return (
    <div className={`w-[300px] ${className}`}>
      <ContentSwiper slides={getSlides()} className="smallFeedbackSwiper" />
    </div>
  );
};

export default SmallFeedbackSwiper;
