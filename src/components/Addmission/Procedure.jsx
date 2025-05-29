import "../Addmission/Procedure.css";


function Procedure() {
  return (
    <div className="procedure-page">
      <div className="procedure-header">
        <h1>Admission Procedure</h1>
        <div className="underline"></div>
      </div>

      <div className="procedure-content">
        <p>
          Admissions are made to <strong>V, VI, VII, VIII, IX, and XI</strong> classes. The entrance 
          test is generally held in the <strong>last week of March</strong>, while the prospectus is
           released in January. Duly filled forms attached with the prospectus must be submitted before the 
           last date. <strong>Preference is given to candidates who excel in the entrance test</strong>, the
            syllabus of which is available in the prospectus and on our website. A <strong>personal
               interview</strong> is also conducted as part of the admission process. Admission is granted
                only if the candidate satisfies the selection committee. Parents must provide a valid <strong>medical 
                  fitness certificate</strong> for their ward, and if any signs of ongoing health issues are detected 
                  later, the admission will be cancelled. After admission, submission of a <strong>birth
                     certificate</strong>, <strong>school leaving certificate</strong> from the previous institution, 
                     and an <strong>attested copy of the mark sheet</strong> is mandatory.
        </p>
      </div>
    </div>
  );
}

export default Procedure;
