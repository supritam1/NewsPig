import React from 'react';

export default function About() {
  return (
    <div className="d-flex justify-content-center" style={{marginTop: "5.5rem"}}>
      <div className="card mb-3 shadow-lg rounded" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center justify-content-center" >
            <img 
              src="/android-chrome-192x192.png"
              className="img-fluid rounded-start"
              alt="Pic is not loading due to technical Issue"
              style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-primary">NewsPig</h5>
              <p className="card-text">This is a News blog, developed by Mr. Supritam Mohanty</p>
              <p className="card-text">
                <small className="text-body-secondary">Last updated few mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
