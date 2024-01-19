import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
    function formatDate(dateTimeString) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = new Date(dateTimeString).toLocaleDateString('pl-PL', options);
        return formattedDate;
      }
  return (
    <div className="col-lg-4 mb-4 field-overlay-holder">
      <div className="img_blog field-overlay-inner">
        <div className="field-position-m field-mover-border">
          <img src={post.contentDetails && post.contentDetails.HEADER_FOTO} alt="" className="img-fluid mx-auto d-block" />
        </div>
      </div>
      <div className="blog-box-detail p-4">
        <div className="mt-0">
          <p className="labal text-muted">{post.contentDetails && post.contentDetails.CATEGORY}</p>
          <h5 className="font-weight-bold">{post.contentDetails && post.contentDetails.TITLE}</h5>
          <p className="text-muted">{post.contentDetails && post.contentDetails.HIGHLIGHTS}</p>
          <p className="space-date text-muted">
            {post.authorDetails && post.authorDetails.NAME_AUTHOR} - {post.contentDetails && formatDate(post.contentDetails.DATE_TIME)}
          </p>
          <Link className="read-more text-uppercase font-weight-bold" to={`/post/${post.ID}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
