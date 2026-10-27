import ReviewList from './components/reviews/ReviewList';

const Summarizer = () => {
   return (
      <div className="p-4 h-screen w-full">
         <ReviewList productId={1} />
      </div>
   );
};

export default Summarizer;
