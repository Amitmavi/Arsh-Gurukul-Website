
import "../AboutUsBox/DirectorMessage.css";
import directorImage from "../../../public/images/S9.jpeg"; // Place your image in assets folder or adjust path accordingly

function DirectorMessage() {
  return (
    <div className="director-wrapper">
      <div className="director-card">
        <h1 className="director-heading">DIRECTOR MESSAGE</h1>
        <h2 className="director-heading">Dr. Sudha Arya</h2>

        <div className="director-content">
          <img
            src={directorImage}
            alt="Dr. Sudha arya(english,sanskrit)"
            className="director-image"
          />
          <div className="director-text">
            <p>
              Founded in 1912 by Swami Shardhanand Ji with a grand vision of
              inculcating Indian ethos and scientific temperament in young
              minds, Gurukul Kurukshetra, a CBSE affiliated Senior Secondary
              School provides public school education in a safe, secure, happy
              and stimulating learning environment to instill a sense of honor,
              respect and compassion in each student and prepare them for
              success throughout his life. The students are encouraged to adopt
              simple living and high thinking. They are made aware of our rich
              culture, civilization, and society thereby promoting in them a
              positive attitude.
            </p>

            <p>
              Gurukul Kurukshetra empowers all students to excel in their chosen
              field. The school provides a wide range of opportunities to
              students to participate in sports activities, performing arts and
              musical programmes alongwith due emphasis on Academic activities.
              These efforts ensure harmonious development of the students on
              the campus of Gurukul. Gurukul is proud of its commitment of
              providing an excellent education to our students. Fifty trained
              educators having master degree in their respective subjects and
              are available round the clock to help the students. As a result of
              their hard work, this year our students again made a mark in the
              academic as well as extra-curricular activities. In the Academic
              year 2022-23, a total of 14 students have been recommended by SSB
              for joining NDA/TES while 6 students have joined IITs. Another 22
              students have joined other prestigious engineering colleges
              securing high merit in JEE including NITS/IIITs etc. 3 of our
              students have also secured admission in medical colleges after
              qualifying in the NEET competitive examination.
            </p>

            <p>
              At Gurukul, we employ the latest tools for imparting education
              with over 100 computers in separate labs for junior and senior
              students. In addition, we also have excellent facilities
              including a well equipped gymnasium hall, naturopathy center, AC
              library, ultra-modern labs and shooting range, all sprawling over
              38 acres of land. Five multistorey buildings and excellent
              administrative block add to the charm of our unique institution.
            </p>

            <p>My best wishes to all the students.</p>

            <p className="director-signature">
              Jai Hind
              <br />
              Dr. Sudha arya(english,sanskrit)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectorMessage;
