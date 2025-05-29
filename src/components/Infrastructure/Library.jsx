import "../Infrastructure/Library.css";

function Library() {
  return (
    <div className="library-page">
      <div className="library-header">
        <h1>Library</h1>
        <div className="underline"></div>
      </div>

      <div className="library-images">
        <img src="/images/L1.png" alt="Library Image 1" />
        <img src="/images/L2.png" alt="Library Image 2" />
        <img src="/images/L3.png" alt="Library Image 3" />
      </div>

      <div className="library-content">
        <p>
          Gurukul Kurukshetra s sprawling campus of 35 acres houses two major libraries — one located at Arsh Mahavidyalaya and the other within the school premises. These libraries are richly stocked with over 3200 books on Vedic literature, biographies, and autobiographies of eminent personalities.
        </p>

        <p>
          Additionally, there are 5000+ books that serve the academic requirements of students from Science, Arts, and Commerce streams. The library also has a wide collection of books for competitive exams such as PMT, IIT, JEE, NDA, and NTSE. Resources like dictionaries, encyclopedias, thesauruses, and past year question papers are also available for student reference.
        </p>

        <p>
          The fully air-conditioned and computerized library subscribes to 20 daily newspapers and 100 journals/periodicals. It is a spacious facility capable of accommodating up to 200 students at a time, offering a peaceful and resource-rich learning environment.
        </p>

        <p className="incharge-note"><strong>Incharge</strong></p>
      </div>
    </div>
  );
}

export default Library;
