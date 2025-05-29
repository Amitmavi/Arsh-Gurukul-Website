
import "../Academic/Academic.css";

function Academic() {
  return (
    <div className="academic-container">
      <h1 className="academic-title">COMPREHENSIVE PLAN</h1>

      <p>
        From the 9<sup>th</sup> class onwards there are separate sections for NDA (N), Engineering (E), Medical (M), and other courses (A). Science subjects are taught by three different teachers as per specialization.
      </p>

      <p>
        From 10+1 class onwards there will be 5 sections of 40 students each as per the choice/admission criteria:
      </p>

      <ul className="section-list">
        <li><strong>Section -N-</strong> Non-Medical (Exclusive for NDA/Merchant Navy)</li>
        <li><strong>Section -E-</strong> Non-Medical (Exclusive for IIT/NIT/IIST)</li>
        <li><strong>Section -M-</strong> Medical (Exclusive for AIPMT/AIIMS/B.Sc. Agri. etc.)</li>
        <li><strong>Section -C-</strong> Commerce (For B.Com./CA/Law/Management etc.)</li>
      </ul>

      <p>
        From 10+1 Non-Medical and Medical classes, the CBSE syllabus and competition preparation is covered by in-house expert faculty, avoiding duplication and saving time for self-study. Emphasis is given to competitive exams through coaching/counseling:
      </p>

      <ul className="exam-list">
        <li>National Science / Math Olympiads</li>
        <li>NSTSE - National Science Talent Search Examination (for classes 6 to 12)</li>
        <li>NAO - NASA Astronomy Olympiad (for classes 5 to 10)</li>
        <li>NTSE - National Talent Search Examination (from class 9 onwards)</li>
        <li>KVPY - Kishore Vaigyanik Protsahan Yojana (for classes 11 & 12 Science streams)</li>
        <li>
          NDA - Apart from written exam, coaching for SSB by full time GTO (Group Task Officer) & psychologist. Establishment of NDA Academy for obstacles by July 2015. Launching of Air NCC in addition to Army NCC.
        </li>
        <li>Merchant Navy - Entrance Exam conducted by Indian Maritime University (IMU), Chennai, every year on the pattern of NDA.</li>
        <li>IIT/NIT/BITS Pilani/IIST (Indian Institute of Space Science & Technology, Trivandrum).</li>
        <li>AIPMT/AIIMS/AFMC Pune/MGIMS Wardha for MBBS/BDS courses.</li>
        <li>B.Sc. (Agriculture) - All India Entrance conducted by ICAR, New Delhi for 4-year Degree course. All State Agri Universities also conduct separate exams for the same Degree.</li>
        <li>BAMS - For admission to Ayurvedic Colleges.</li>
        <li>CLAT - Common Law Admission Test for 5 years integrated BA+LLB/BBA+LLB etc. for 16 National Law Universities (NLUs).</li>
        <li>Integrated 5 years M.Sc. (Science) from IISERs (Indian Institute of Science Education & Research).</li>
        <li>Civil Services examination for IAS, IPS, IFS, IRS etc.</li>
        <li>Any other examination as per students choice.</li>
      </ul>

      <p className="note">
        <strong>Note:</strong> Sanskrit will be taught for all classes and streams from 5th to 12th for NCC students who can take NCC as a subject in 11th & 12th classes.
      </p>
    </div>
  );
}

export default Academic;
