import React from 'react';
import { Link } from 'react-router-dom';
import BlogCommentForm from '../../elements/BlogCommentForm';
import SidebarRight from '../../elements/SidebarRight';

const BlogDetailsRightSidebar = () => {
    return(
    <>
    {/*Blog Details Section*/}
    <section className="single-blog-section section-padding-all">
        <div className="default-container">
          <div className="row">
            <div className="col-md-8 order-md-1">
              <div className="blog-detail mt-30">
                <div className="b-det-img">
                  <img src="images/blog/bl-01-750x430.png" alt="blog" />
                </div>
                <div className="det-content">
                  <h3>Commercial design for project</h3>
                  <div className="det-meta">
                    <Link to="#">
                      <i className="fa fa-user" /> by admin
                    </Link>
                    <Link to="#">
                      <i className="fa fa-calendar" /> 26 May 2022
                    </Link>
                    <Link to="#">
                      <i className="fa fa-commenting-o" /> 22
                    </Link>
                  </div>
                  <p>Lorem ipsum dolor sit amet, rcquisc adipiscing elit. Aenean socada commodo ligauala egets dssdolor. Aenean magsfssa. Cum socadaiis nato qfuae pentua ibaus et magnsfis dis parturient mon nascqetu rs idicfulus mus. Donefc
                    quamaem felis, ultriciddedes nec, pefflslen tesquwdfe eu, pr etium quis, sem.</p>
                  <p>Socadaiis nato qfuae pent ibaus et magnsfis dis parturient mon tes, nascqetur rsidicful muss enean magsfssad. Cum socadaiis nato qfuae pent ibaus et magnsfis dis parturient mon tes, nascqetur rsidicfulus mus. Donefc qua
                    maem felis, ultriciddedes nec, pefflsl tesquwdfe eu, pr etium quis, sem.</p>
                  <p className="box-letter">Dascqetur rsidicfulus mus donefc quamaem felis, ultriciddedes nec, pefflsl tesquwdfe eu, pr etium quis, fasem. Cum socadaiis nato qfuae pent ibaus et magnsfis dis parturient mon tes, nascqetur rsidicfulus mus. Cum socadaiis
                    nato qfuae pent ibaus et magnsfis dis socad. Socadaiis nato qfuae pent ibaus et magnsfis dis parturient mon tes, nascqetur rsidicful muss enean magsfssa.</p>
                </div>
                <blockquote>
                  <p> “ Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum et. Etiam glea quii ultricies nisi vel augue. Curabitur ullamcor per ultrices etiam rhoncs. Lorem ipsum dolor sit amet,rcquisc adipiscing felis eli. ”
                  </p>
                </blockquote>
                <div className="det-list">
                  <div className="row">
                    <div className="col-sm-7">
                      <ul>
                        <li>
                          <p> Lorem ipsum dolor sit ligauala consectade adipiscingi. </p>
                        </li>
                        <li>
                          <p>Aenean socada commodo eget dssd qfuae pe ibaus.</p>
                        </li>
                        <li>
                          <p> Magnsfis dis parturient, nascqet donefc ultcid dedes.</p>
                        </li>
                        <li>
                          <p> Socadaiis nato qfuae pent et magns mon nascq rsidicful.</p>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-5">
                      <img src="images/blog/bl-09-750x430.png" alt="blog" />
                    </div>
                  </div>
                </div>
                <div className="blog-tags">
                  <div className="row">
                    <div className="col-md-8">
                      <span className="title">Tags :</span>
                      <Link to="#" className="tag">branding</Link>
                      <Link to="#" className="tag">Design</Link>
                      <Link to="#" className="tag">website</Link>
                    </div>
                    <div className="col-md-4 text-right">
                      <span className="title">share :</span>
                      <Link to="#" className="blog-det-social">
                        <i className="fa fa-facebook" />
                      </Link>
                      <Link to="#" className="blog-det-social">
                        <i className="fa fa-twitter" />
                      </Link>
                      <Link to="#" className="blog-det-social">
                        <i className="fa fa-instagram" />
                      </Link>
                      <Link to="#" className="blog-det-social">
                        <i className="fa fa-google-plus" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="blog-nav clearfix">
                  <Link to="#" className="blog-prev"><i className="fa fa-angle-left" /></Link>
                  <Link to="#" className="blog-next"><i className="fa fa-angle-right" /></Link>
                </div>
                <div className="author-section">
                  <div className="all-title">
                    <h3 className="sec-title">
                      <span>About Author</span>
                    </h3>
                  </div>
                  <div className="author-post">
                    <div className="aut-img">
                      <img src="images/team/tm-01-460x460.png" alt="woman" />
                    </div>
                    <div className="aut-content">
                      <h5>Alec Thompson</h5>
                      <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhon cus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis vel, aliquet nec pretium.</p>
                      <div className="aut-social">
                        <Link to="#">
                          <i className="fa fa-facebook" />
                        </Link>
                        <Link to="#">
                          <i className="fa fa-twitter" />
                        </Link>
                        <Link to="#">
                          <i className="fa fa-instagram" />
                        </Link>
                        <Link to="#">
                          <i className="fa fa-google-plus" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-section">
                  <div className="all-title">
                    <h3 className="sec-title">
                      <span>comments</span>
                    </h3>
                  </div>
                  <div className="comment-wrap">
                    <div className="comment-inner">
                      <Link to="#" className="reply">
                        <i className="fa fa-mail-reply-all"> </i>Reply
                      </Link>
                      <div className="com-img">
                        <img src="images/team/tm-02-460x460.png" alt="human" />
                      </div>
                      <div className="comm-content">
                        <h5>Alec Thompson
                          <span>June 04, 2022 at 10:05 PM</span>
                        </h5>
                        <p>Donec pede justo, aliquet nec, vulputate eget, arcu. In enim justo, ahon cus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis vel.
                        </p>
                      </div>
                    </div>
                    <div className="sub-comm comment-inner">
                      <Link to="#" className="reply">
                        <i className="fa fa-mail-reply-all"> </i>Reply
                      </Link>
                      <div className="com-img">
                        <img src="images/team/tm-03-460x460.png" alt="human" />
                      </div>
                      <div className="comm-content">
                        <h5>Alec Thompson
                          <span>June 04, 2022 at 10:05 PM</span>
                        </h5>
                        <p>Donec pede justo, aliquet nec, vulputate eget, arcu. In enim justo, ahon cus ut, imperdiet a, venenatis vitae, justol.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="comment-wrap">
                    <div className="comment-inner">
                      <Link to="#" className="reply">
                        <i className="fa fa-mail-reply-all"> </i>Reply
                      </Link>
                      <div className="com-img">
                        <img src="images/team/tm-04-460x460.png" alt="human" />
                      </div>
                      <div className="comm-content">
                        <h5>Alec Thompson
                          <span>June 04, 2022 at 10:05 PM</span>
                        </h5>
                        <p>Donec pede justo, aliquet nec, vulputate eget, arcu. In enim justo, ahon cus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis vel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <BlogCommentForm />

              </div>
            </div>

            <SidebarRight />

          </div>
        </div>
    </section>
    {/*End Blog Details Section */}    
    </>
    )
}

export default BlogDetailsRightSidebar;