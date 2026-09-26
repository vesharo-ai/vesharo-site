import React from "react";

const BlogDetailsReview = React.memo(function BlogDetailsReview() {
  return (
    <div className="tz-blog-details__reviews">
      <h3 className="tz-mb-30 tz-text-neutral5">03 Comments</h3>
      <div className="tz-comment">
        {/* comment item */}
        <div className="tz-comment__item">
          <img src="/images/blog/comment-avatar_1.png" alt="img" />
          <div className="tz-comment__content">
            <h5 className="tz-comment__author-name">Robert Fox</h5>
            <p className="tz-comment__date tz-text-m">October 07,2025</p>
            <p className="tz-comment__text tz-text-l">
              Our experience with this travel agency was absolutely fantastic!
              The team planned every detail perfectly, ensuring a hassle-free
              and unforgettable vacation.
            </p>
            <a href="#" className="tz-comment__reply tz-text-l">
              <img
                className="svg"
                src="/images/blog/reply-icon.svg"
                alt="icon"
              />
              Reply
            </a>
            {/* comment item */}
            <div className="tz-comment__item">
              <img
                className="tz-comment__author-image"
                src="/images/blog/comment-avatar_2.png"
                alt="img"
              />
              <div className="tz-comment__content">
                <h5 className="tz-comment__author-name">Ronald Richards</h5>
                <p className="tz-comment__date tz-text-m">October 07,2025</p>
                <p className="tz-comment__text tz-text-l">
                  Our experience with this travel agency was absolutely
                  fantastic! The team planned every detail perfectly, ensuring a
                  hassle-free and unforgettable vacation.
                </p>
                <a href="#" className="tz-comment__reply tz-text-l">
                  <img
                    className="svg"
                    src="/images/blog/reply-icon.svg"
                    alt="icon"
                  />
                  Reply
                </a>
              </div>
            </div>
            {/* comment item */}
          </div>
        </div>
        {/* comment item */}
        {/* comment item */}
        <div className="tz-comment__item">
          <img src="/images/blog/comment-avatar_3.png" alt="img" />
          <div className="tz-comment__content">
            <h5 className="tz-comment__author-name">Floyd Miles</h5>
            <p className="tz-comment__date tz-text-m">October 07,2025</p>
            <p className="tz-comment__text tz-text-l">
              Our experience with this travel agency was absolutely fantastic!
              The team planned every detail perfectly, ensuring a hassle-free
              and unforgettable vacation.
            </p>
            <a href="#" className="tz-comment__reply tz-text-l">
              <img
                className="svg"
                src="/images/blog/reply-icon.svg"
                alt="icon"
              />
              Reply
            </a>
          </div>
        </div>
        {/* comment item */}
        {/* Comment Box */}
        <div className="tz-comment-box tz-pt-30 tz-pt-lg-60">
          <h4 className="tz-text-neutral5">Leave a Reply</h4>
          <form action="#">
            <div className="row">
              <div className="col-md-6">
                <input
                  name="name"
                  type="text"
                  className="form-control tz-bg-white-nutral-2 tz-text-m"
                  placeholder="Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  name="email"
                  type="email"
                  className="form-control tz-bg-white-nutral-2 tz-text-m"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <textarea
                  name="message"
                  className="form-control tz-text-m"
                  id="comment"
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="tz-button tz-button--effect tz-button--style2 tz-text-l"
                >
                  <span>Post Comment</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* Comment Box */}
      </div>
    </div>
  );
});

export default BlogDetailsReview;
