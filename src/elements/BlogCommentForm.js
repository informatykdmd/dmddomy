import React from 'react';

const BlogCommentForm = () => {
    return(
    <>
    <div className="blog-comment-form">
        <div className="all-title">
          <h3 className="sec-title">
            <span>leave comment</span>
          </h3>
        </div>
        <form action="#" className="comment-form">
            <div className="row">
                <div className="col-md-6">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="name" />
                </div>
                </div>
                <div className="col-md-6">
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="email" />
                </div>
                </div>
                <div className="col-md-12">
                <div className="form-group">
                    <textarea name="message" placeholder="Your Message" className="form-control" rows={6} />
                </div>
                </div>
                <div className="col-md-12">
                <div className="form-group">
                    <button type="submit" className="btn btn_custom ploting-btn btn-style-two">post comment</button>
                </div>
                </div>
            </div>
        </form>
    </div>
    </>
    )
}

export default BlogCommentForm;