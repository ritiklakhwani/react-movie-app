import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const MotionCard = motion.div;

function MovieCard({
  movie: {
    title,
    vote_average,
    poster_path,
    release_date,
    original_language,
    overview,
  },
}) {
  return (
    <MotionCard
      layout
      variants={cardVariants}
      className="movie-card group"
      transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
    >
      <div className="poster-wrapper">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : "/no-movie.png"
          }
          alt={title}
        />
      </div>
      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content meta-row">
          <div className="rating">
            <img src="star.svg" alt="Star Icon" className="meta-star" />
            <p className="meta-value">
              {vote_average ? vote_average.toFixed(1) : "N/A"}
            </p>
          </div>
          <span className="meta-divider">•</span>
          <p className="lang">{original_language}</p>

          <span className="meta-divider">•</span>
          <p className="year">
            {release_date ? release_date.split("-")[0] : "N/A"}
          </p>
        </div>
        <p className="overview">
          {overview
            ? overview
            : "No summary available for this movie right now."}
        </p>
      </div>
    </MotionCard>
  );
}

export default MovieCard;
