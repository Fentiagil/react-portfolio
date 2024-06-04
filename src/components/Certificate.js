import React from 'react';
import '../assets/Certificate.css';
import certificateData from '../CertificateData';

function Certificate() {
  return (
    <div className="certificate">
      <h1>Certificate</h1>
      <div className="certificate-list">
        {certificateData.map(certificate => (
          <div key={certificate.id} className="certificate-card">
            <img src={certificate.image} alt={certificate.title} className="certificate-image" />
            <div className="certificate-title">
              <h3>{certificate.title}</h3>
            </div>
            <h5>Certificate Number : <small>{certificate.certifNumber}</small></h5>
            <h5>Published Date : <small>{certificate.publish}</small></h5>
            <h5>Publisher : <small>{certificate.publisher}</small></h5>
            <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="certificate-button">View certificate</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
