import React from 'react';
import { Link } from 'react-router-dom';

const SidebarRight = () => {
    return(
    <>
    <div className="col-md-4 order-md-2">
        <div className="widget widget-search">
            <form className="side-form" method="POST" action="#">
            <input type="text" className="form-control" placeholder="Search Here..." />
            <button type="submit">
                <i className="fa fa-paper-plane" />
            </button>
            </form>
        </div>
        <div className="widget widget-categories">
            <div className="all-title">
            <h3>
                <span>Categories</span>
            </h3>
            </div>
            <div className="widget-items">
            <ul>
                <li className="blog-category">
                <Link to="#">Commercial
                    <span>(23)</span>
                </Link>
                </li>
                <li className="blog-category">
                <Link to="#">Education
                    <span>(26)</span>
                </Link>
                </li>
                <li className="blog-category">
                <Link to="#">Hospital
                    <span>(13)</span>
                </Link>
                </li>
                <li className="blog-category">
                <Link to="#">Residentia
                    <span>(18)</span>
                </Link>
                </li>
                <li className="blog-category">
                <Link to="#">Office
                    <span>(28)</span>
                </Link>
                </li>
            </ul>
            </div>
        </div>
        <div className="widget widget-recent-post">
            <div className="all-title">
            <h3>
                <span>Recent Post</span>
            </h3>
            </div>
            <div className="widget-items">
            <ul>
                <li>
                <div className="blog-rp-image">
                    <Link to="single-post-left-sidebar.html">
                    <img src="images/blog/bl-01-120x120.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="single-post-left-sidebar.html">Fundamental analysis services</Link></p>
                    <p>Lorem ipsum dolor sit amet, cohy elitr</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="single-post-left-sidebar.html">
                    <img src="images/blog/bl-02-120x120.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="single-post-left-sidebar.html">Steps to a successful Business</Link></p>
                    <p>Lorem ipsum dolor sit amet, cohy elitr</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="single-post-left-sidebar.html">
                    <img src="images/blog/bl-03-120x120.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="single-post-left-sidebar.html">Development Progress Conference</Link></p>
                    <p>Lorem ipsum dolor sit amet, cohy elitr</p>
                </div>
                </li>
                <li>
                <div className="blog-rp-image">
                    <Link to="single-post-left-sidebar.html">
                    <img src="images/blog/bl-04-120x120.png" alt="thumb" />
                    </Link>
                </div>
                <div className="blog-rp-info">
                    <p><Link to="single-post-left-sidebar.html">Commercial design for project</Link></p>
                    <p>Lorem ipsum dolor sit amet, cohy elitr</p>
                </div>
                </li>
            </ul>
            </div>
        </div>
        <div className="widget widget-archives">
            <div className="all-title">
            <h3>
                <span>archives</span>
            </h3>
            </div>
            <div className="widget-items widget-archie">
            <ul>
                <li>
                <Link to="#">july
                    <span>20</span>
                </Link>
                </li>
                <li>
                <Link to="#">November
                    <span>36</span>
                </Link>
                </li>
                <li>
                <Link to="#">october
                    <span>12</span>
                </Link>
                </li>
            </ul>
            </div>
        </div>
        <div className="widget widget-tags">
            <div className="all-title">
            <h3>
                <span>Popular Tags</span>
            </h3>
            </div>
            <div className="widget-tags widget-items">
            <Link to="#" className="tag">marketing</Link>
            <Link to="#" className="tag">Design</Link>
            <Link to="#" className="tag">Networking</Link>
            <Link to="#" className="tag">Branding</Link>
            <Link to="#" className="tag">Wordpress</Link>
            <Link to="#" className="tag">Website</Link>
            <Link to="#" className="tag">Graphic Design</Link>
            <Link to="#" className="tag">Fonts</Link>
            </div>
        </div>
        <div className="widget widget-meta">
            <div className="all-title">
            <h3>
                <span>meta</span>
            </h3>
            </div>
            <div className="widget-items widget-meta">
            <Link to="#">Entries.RSS</Link>
            <Link to="#">Comment.RSS</Link>
            <Link to="#">Wordpress.org</Link>
            <Link to="#">Site Admin</Link>
            </div>
        </div>
    </div>
    </>
    )
}

export default SidebarRight;