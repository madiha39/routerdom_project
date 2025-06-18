import React from "react";

// Example images from Unsplash (replace with your own if needed)
const showcases = [
  {
    title: "AI & Machine Learning",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    desc: "Explore how mathematical research is powering breakthroughs in artificial intelligence, deep learning, and data science.",
    diagram: (
      <svg width="100%" height="60" viewBox="0 0 200 60">
        <polyline
          points="0,50 40,30 80,40 120,10 160,30 200,20"
          fill="none"
          stroke="#6a11cb"
          strokeWidth="4"
        />
      </svg>
    ),
  },
  {
    title: "Physics Innovations",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    desc: "Mathematics is the language of physics. Discover how equations and models describe the universe, from quantum mechanics to relativity.",
    diagram: (
      <svg width="100%" height="60" viewBox="0 0 200 60">
        <circle
          cx="50"
          cy="30"
          r="20"
          fill="none"
          stroke="#ffd700"
          strokeWidth="4"
        />
        <circle
          cx="150"
          cy="30"
          r="20"
          fill="none"
          stroke="#2575fc"
          strokeWidth="4"
        />
      </svg>
    ),
  },
  {
    title: "Astronomy & Space",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    desc: "From black holes to exoplanets, mathematics helps us understand the cosmos. See how research is expanding our view of the universe.",
    diagram: (
      <svg width="100%" height="60" viewBox="0 0 200 60">
        <ellipse
          cx="100"
          cy="30"
          rx="80"
          ry="20"
          fill="none"
          stroke="#ff6a00"
          strokeWidth="4"
        />
        <circle cx="100" cy="30" r="6" fill="#ffd700" />
      </svg>
    ),
  },
];

const figures = [
  {
    name: "Ada Lovelace",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg",
    desc: "Pioneer of computer science and mathematics.",
  },
  {
    name: "Albert Einstein",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
    desc: "Revolutionized physics with the theory of relativity.",
  },
  {
    name: "Katherine Johnson",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Katherine_Johnson_1983.jpg",
    desc: "NASA mathematician whose calculations were critical to space missions.",
  },
  {
    name: "Srinivasa Ramanujan",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Srinivasa_Ramanujan_-_OPC_-_1.jpg",
    desc: "Made extraordinary contributions to mathematical analysis, number theory, and continued fractions.",
  },
];

const Home = () => {
  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center animate__animated animate__fadeInDown">
        Mathematical Research Showcases
      </h1>
      <div className="row g-4 mb-5 justify-content-center">
        {showcases.map((item, idx) => (
          <div className="col-md-4 d-flex" key={idx}>
            <div
              className="card shadow-lg border-0 w-100 animate__animated animate__fadeInUp"
              style={{ animationDelay: `${idx * 0.2 + 0.2}s` }}
            >
              <img
                src={item.img}
                className="card-img-top"
                alt={item.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text flex-grow-1">{item.desc}</p>
                <div className="mb-2">{item.diagram}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="mb-4 text-center animate__animated animate__fadeIn">
        Famous Figures in Mathematics & Science
      </h2>
      <div className="row g-4 justify-content-center">
        {figures.map((fig, idx) => (
          <div className="col-md-3 d-flex" key={idx}>
            <div
              className="card border-0 shadow animate__animated animate__zoomIn"
              style={{
                borderRadius: "1.2rem",
                overflow: "hidden",
                animationDelay: `${idx * 0.15 + 0.2}s`,
              }}
            >
              <img
                src={fig.img}
                className="card-img-top"
                alt={fig.name}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h6 className="card-title">{fig.name}</h6>
                <p className="card-text">{fig.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>
        {`
          .card {
            border-radius: 1.2rem;
            overflow: hidden;
            transition: box-shadow 0.3s, transform 0.2s;
          }
          .card:hover {
            box-shadow: 0 8px 32px 0 rgba(106,17,203,0.2), 0 1.5px 8px 0 #ffd70044;
            transform: translateY(-6px) scale(1.03);
          }
          .card-title {
            color: #6a11cb;
            font-weight: bold;
          }
          .card-text {
            font-size: 1rem;
          }
        `}
      </style>
      {/* Animate.css for beautiful animations */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </div>
  );
};

export default Home;
