
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export default function RateingStars({ rating = 1, max = 5 }) {
    if (rating < 0 || rating > max) {
      throw new Error("Rating must be between 0 and max");
    }
    
  return (
    <div className="flex gap-1 w-fit rounded-md">
      {Array.from({ length: max }).map((_, index) => {
        const fullStars = Math.floor(rating);

        const decimalPart = rating % 1;
        if (index < fullStars) {
          return <FaStar key={index} className="text-yellow-500 text-lg" />;
        } else if (index === fullStars && decimalPart > 0) {
          return (
            <FaStarHalfAlt key={index} className="text-yellow-500 text-lg" />
          );
        } else {
          return <FaRegStar key={index} className="text-gray-400 text-lg" />;
        }
      })}
    </div>
  );
}
