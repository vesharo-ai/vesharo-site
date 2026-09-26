import React from "react";

function Subscribe1({ spacingClass = "" }: { spacingClass?: string }) {
  return (
    <>
      <div className={`tz-subscribe1 ${spacingClass}`}>
        <div className="container">
          <div className="tz-subscribe1__wrapper">
            <div className="row g-4 d-flex justify-content-between">
              <div className="col-md-5">
                <div className="tz-subscribe1__title tz-display-3 text-uppercase">
                  Subscribe to Our Newsletter
                </div>
              </div>
              <div className="col-md-5 d-flex justify-content-center">
                <form action="#" className="tz-subscribe1__search">
                  <input
                    type="text"
                    className="form-control tz-text-m"
                    placeholder="Enter Your Email"
                    autoComplete="off"
                  />
                  <button type="submit">
                    <i className="ph ph-paper-plane-tilt" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe1;
