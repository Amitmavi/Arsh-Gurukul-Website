// NewsEvents.jsx


import "./NewsEvents.css";

const events = [
  { date: "30 May 2025", title: "Annual Sports Day" },
  { date: "15 June 2025", title: "Parent-Teacher Meeting" },
  { date: "25 June 2025", title: "Science Fair Exhibition" },
];

const notifications = [
  { date: "29 May 2025", title: "Holiday on Friday due to Election" },
  { date: "28 May 2025", title: "Mid-Term Results Published" },
  { date: "27 May 2025", title: "New Uniform Rules Announced" },
];

function NewsEvents() {
  return (
    <div className="news-events-container">
      <div className="section">
        <h2 className="section-title">📌 NEWS </h2>
        <div className="scroll-box">
          <div className="scroll-content">
            {events.map((event, idx) => (
              <div className="item" key={idx}>
                <span className="date">{event.date}</span>
                <span className="title">{event.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">📢 EVENTS</h2>
        <div className="scroll-box">
          <div className="scroll-content">
            {notifications.map((note, idx) => (
              <div className="item" key={idx}>
                <span className="date">{note.date}</span>
                <span className="title">{note.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsEvents;
