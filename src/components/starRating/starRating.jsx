const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i}>&#9733;</span>); // Full star unicode
      } else {
        stars.push(<span key={i}>&#9734;</span>); // Empty star unicode
      }
    }
    return <div>{stars}</div>;
  };

  export default StarRating;