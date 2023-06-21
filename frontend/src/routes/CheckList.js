import React from 'react';

const Checklist = () => {
  return (
    <>
      <div className="PageHead">
        <h1>
          <b>Check List regarding documents to be submitted with the proposal for New Registration</b>
        </h1>
      </div>
      <br />
      <div className="PageContain" style={{ textAlign: 'justify', color: 'black' }}>
        <div style={{ paddingLeft: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <b>
              <span style={{ fontSize: 'medium' }}>
                Check List regarding documents to be submitted with the proposal for the registration of a Multi state Cooperative Society.
              </span>
            </b>
            <br />
            <br />
          </div>
          <strong>
            <span style={{ fontSize: 'medium' }}>[A]</span>
          </strong>
          <br />
          <br />
          <ol style={{ padding: '10px' }}>
            <li>Form 1: To be submitted in the format annexed with the MSCS Act 2002 along with the documents required under Form I.</li>
            <li>A certificate from the bank stating credit balance there in favour of the proposed multi-state co-operative society.</li>
            <li>A scheme explaining how the proposed multi state co-operative society has reasonable prospects of becoming a viable unit.</li>
            <li>Four copies of bye-laws in original.</li>
            <li>Proposed area of operation for registration shall initially be permitted for two contagious states only.</li>
            <li>
              List of at least 50 members from each state. The list has to be submitted in the format annexed with the MSCS Act 2002 along with the copies of ID proofs of the members duly attested by the Chief promoter.
            </li>
            <li>
              Certified copies of the resolutions passed by the proposed society along with the certified copy of the resolution of the promoters which shall specify the name and address of one of the applicant(s) to whom the Central Registrar may address correspondence under the rules before registration and dispatch or hand over registration documents.
            </li>
            <li>Contact number and e-mail address of the Chief Promoter or Society on cover page.</li>
          </ol>
          <br />
        </div>
        <div style={{ textAlign: 'justify', paddingLeft: '20px' }}>
          <strong>
            <span style={{ fontSize: 'medium' }}>[B]</span>
          </strong>
          <br />
          <br />
          <strong>For societies having objects related to thrift and credit and for multi-purpose societies following additional documents are required to be submitted along with documents mentioned at point [A] above:</strong>
          <br />
          <ol>
            <li>No objection Certificate from the Registrar of Cooperative Societies of the States/U.T. where the area of operation of the society is proposed to be confined.</li>
            <li>A certificate to the effect that the credentials of the Chief Promoter/Promoters have been verified by the Registrar of Co-operative Societies of the state where the head office is proposed to be located.</li>
          </ol>
          <strong>
            <br />
            All documents to be submitted in original with the signatures of the Chief Promoter/Promoters on each page.
          </strong>
          <br />
          <br />
          Note: Societies which are already registered under the MSCS Act, 2002 and are desirous of expanding their area of operations falling under category (B) above shall be required to submit a NoC as mentioned at [B](1)
        </div>
        <div>
          &nbsp;&nbsp;
          <br />
        </div>
      </div>
    </>
  );
};

export default Checklist;
