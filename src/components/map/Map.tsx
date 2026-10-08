import React from "react";
import { brand } from "@/config/brand";

function Map() {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    brand.contact.mapQuery,
  )}&z=12&output=embed`;

  return (
    <div className="tz-contact__map tz-bg-neutral3">
      <div className="container">
        <iframe
          src={src}
          title={`Vesharo office location — ${brand.contact.mapQuery}`}
          style={{
            border: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
