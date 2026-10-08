"use client";
import reviewsData from "@/data/reviews.json";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";

interface ReviewItem {
  name: string;
  role: string;
  company: string;
  quote: string;
  verifiedEngagement?: string;
}

export default function ReviewsSection() {
  const reviews = reviewsData as ReviewItem[];

  // Golden Rule: When no verified client reviews are supplied in reviews.json, hide completely.
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section
      className="tz-reviews tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120 tz-bg-neutral2"
      aria-labelledby="reviews-heading"
    >
      <div className="container">
        <div className="tz-section-top tz-section-top--centered mb-5">
          <SectionSubtitle subtitle="Client Feedback" />
          <h2
            id="reviews-heading"
            className="tz-display-2 text-uppercase tz-text-neutral5"
          >
            Verified Client Reviews
          </h2>
          <p className="tz-text-l tz-text-neutral6 mx-auto text-center" style={{ maxWidth: "600px" }}>
            Real reviews from real partners. We never publish anonymous or unverified quotes.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {reviews.map((r, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div
                className="p-4 p-lg-5 rounded-4 h-100 d-flex flex-column justify-content-between"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(124, 92, 255, 0.2)",
                }}
              >
                <div>
                  <div className="d-flex align-items-center gap-1 mb-3 text-warning">
                    <i className="ph ph-star-fill" />
                    <i className="ph ph-star-fill" />
                    <i className="ph ph-star-fill" />
                    <i className="ph ph-star-fill" />
                    <i className="ph ph-star-fill" />
                  </div>
                  <blockquote className="text-white tz-text-l fst-italic mb-4" style={{ lineHeight: "1.7" }}>
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                </div>

                <div className="pt-3 border-top border-secondary border-opacity-25">
                  <div className="text-white fw-bold tz-text-m">{r.name}</div>
                  <div className="text-white-50 tz-text-s">
                    {r.role} &middot; <span className="text-primary">{r.company}</span>
                  </div>
                  {r.verifiedEngagement && (
                    <div className="badge bg-secondary bg-opacity-25 text-white-50 tz-text-s mt-2">
                      {r.verifiedEngagement}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
