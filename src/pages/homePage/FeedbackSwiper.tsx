import React, { useCallback } from 'react';
import ContentSwiper from 'components/ContentSwiper';
import FeedbackBlock from './FeedbackBlock';
import { IFeedback } from './utils';

const FeedbackSwiper: React.FC<{
  feedbacks: IFeedback[];
  className?: string;
}> = ({ feedbacks = [], className = '' }) => {
  const getSlides = useCallback((): React.ReactNode[] => {
    const slides: React.ReactNode[] = [];
    if (!feedbacks) {
      return [];
    }

    const slidesCount = Math.round(feedbacks.length / 2);
    let slideIndex = 0;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < slidesCount; i++) {
      const isFirstBlockSecondary = i % 2 !== 0;

      slides.push(
        <div className="flex gap-6">
          <FeedbackBlock
            messages={feedbacks?.[slideIndex]?.messages}
            name={feedbacks?.[slideIndex]?.name}
            position={feedbacks?.[slideIndex]?.position}
            secondary={isFirstBlockSecondary}
            className="mb-10 mt-5 ml-14"
          />
          <FeedbackBlock
            secondary={!isFirstBlockSecondary}
            className="mb-10 mt-5 mr-14"
            messages={feedbacks?.[slideIndex + 1]?.messages}
            name={feedbacks?.[slideIndex + 1]?.name}
            position={feedbacks?.[slideIndex + 1]?.position}
          />
        </div>
      );
      slideIndex += 2;
    }

    return slides;
  }, [feedbacks]);

  return (
    <div className={`w-[300px] md:w-[98%] ${className}`}>
      <ContentSwiper hasNavigation slides={getSlides()} />
    </div>
  );
};

export default FeedbackSwiper;
