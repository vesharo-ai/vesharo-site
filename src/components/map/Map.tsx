import React from "react";

function Map({}) {
  return (
    <div className="tz-contact__map tz-bg-neutral3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.2156438445377!2d-2.2936754376828103!3d53.4626665378156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae72e7e47f69%3A0x6c930e96df4455fe!2sOld%20Trafford!5e0!3m2!1sen!2sbd!4v1661768864802!5m2!1sen!2sbd"
        style={{
          border: 0,
        }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
