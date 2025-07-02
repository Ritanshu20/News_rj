export const NewsItems = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light"
      style={{ width: "100%", maxWidth: "18rem", minHeight: "420px" }}
    >
      <img
        src={src || "https://placehold.co/286x160?text=No+Image"}
        className="card-img-top"
        alt={title || "News"}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title?.slice(0, 50) || "No Title Available"}</h5>
        <p className="card-text">
          {description?.slice(0, 90) || "No description available."}
        </p>
        <a
          href={url}
          className="btn btn-primary mt-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
};
