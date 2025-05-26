import "../AboutUsBox/OurFounder.css"; // You can rename or create a new CSS file if you want

const founderImages = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/2.jpg",
  "/images/2.jpg",
  // Add more images here if needed
];

function OurFounder() {
  return (
    <div className="faculty-container">
      <h2 className="faculty-heading"> Our Founders</h2>
      
      <div className="founder-grid">
        {founderImages.map((img, index) => (
          <div className="founder-card" key={index}>
            <img className="founder-photo" src={img} alt={`Founder ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="founder-description">
        <p>
          Comfortably settled on a commendable pedestal in the educational field, Gurukul Kurukshetra needs no introduction. 
          This high seat of learning was established by the great freedom fighter and dedicated social crusader Swami Shardhananda on 
          13 April 1912 on the eve of Baisakhi. Adopting the ideals as set by Swami Dayananda, assimilating the traditional and modern culture, 
          this institution is enlightening the lives of thousands of students.
        </p>
        <p>
          Kurukshetra reminds us of the mega war where the seed of Indias destruction was sown; but on the positive side, 
          it reminds us of the great Swami Shardhananda who planted a tree of knowledge in the form of Gurukul to remove the darkness of ignorance. 
          That small sapling has now assumed the shape and size of a huge banyan tree.
        </p>
        <p>
          Students hailing from various geographical regions receive education under this tree of knowledge. 
          A munificent donor of Thanesar City, Lala Jyoti Prasad, donated a big chunk of land and ₹10,000 in cash enabling 
          Swami Shardhanand ji to give his dreams a concrete shape. Although Lala Ji had no issue of his own, 
          yet due to his generosity, today shoals of students are bringing laurels to this institution.
        </p>
      </div>
    </div>
  );
}

export default OurFounder;
