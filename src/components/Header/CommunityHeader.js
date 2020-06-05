import React, { useState } from 'react';
import logoimg from '../../img/logo.jpg';
import { Link } from 'react-router-dom';

const CommunityHeader = () => {
  const [adquestiontap, setAddQuestiontap] = useState(true);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark communityheader">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <img src={logoimg} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="">
                  <i className="fa fa-edit"></i> Answers
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/spaces">
                  <i className="fa fa-users"></i> Spaces
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="">
                  <i className="fa fa-bell"></i> Nitifications
                </Link>
              </li>
            </ul>

            <form className="form-inline">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
              />
              <button className="fa fa-search" type="submit"></button>
            </form>

            <div className="dropdown user-dropdown mx-2">
              <a
                className="dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-user-circle"></i>
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Settings
                </a>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </div>
            </div>

            <a
              href=""
              className="btn btn-primary rounded-pill"
              data-toggle="modal"
              data-target="#addquestionModal"
            >
              Add Question
            </a>
          </div>
        </div>
      </nav>

      <div
        className="modal fade"
        id="addquestionModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addquestionModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header p-0">
              <nav className="modal-nav">
                <a
                  className={adquestiontap ? 'active' : ''}
                  onClick={() => setAddQuestiontap(true)}
                >
                  Add Question
                </a>
                <a
                  className={adquestiontap ? '' : 'active'}
                  onClick={() => setAddQuestiontap(false)}
                >
                  Share Link
                </a>
              </nav>
              <button
                type="button"
                className="close m-0 p-2"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {adquestiontap ? (
                <div>
                  <div className="alert alert-primary">
                    <div className="font-weight-bold">
                      Tips on getting good answers quickly
                    </div>
                    Make sure your question has not been asked already Keep your
                    question short and to the point Double-check grammar and
                    spelling
                  </div>

                  <div className="mb-3">
                    <img src="/img/person.jpg" className="boxavatar mr-2" />
                    <span>Mohit Kumar</span>{' '}
                    <div class="dropdown share-dropdown">
                      <div
                        class="btn1"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-users"></i> Public
                      </div>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div class="dropdown-item text-wrap">
                          <b>Public</b>
                          <br />
                          Others will see your identity alongside this question
                          on your profile and in their feeds.
                        </div>

                        <div class="dropdown-item text-wrap">
                          <b>Anonymous</b>
                          <br />
                          Your identity will never be associated with this
                          question.
                        </div>

                        <div class="dropdown-item text-wrap">
                          <b>Limited</b>
                          <br />
                          Your identity will be shown but this question will not
                          appear in your followers' feeds or your profile.
                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control questioninput px-0"
                    placeholder="Start your question with 'What', 'How', 'Why', etc."
                  />

                  <div className="link-input">
                    <i className="fa fa-link"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Optional: include a link that gives context"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-3">
                    <img src="/img/person.jpg" className="boxavatar mr-2" />
                    <span>Mohit Kumar</span>{' '}
                    <div class="dropdown share-dropdown">
                      <div
                        class="btn1"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fa fa-plus"></i> Choose a Space
                      </div>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div class="dropdown-item text-wrap serch-input">
                          <input type="text" className="form-control" />
                          <i className="fa fa-search"></i>
                        </div>

                        <div class="dropdown-item text-wrap">
                          <i className="fa fa-users mr-2"></i>
                          Your followers
                        </div>
                      </div>
                    </div>
                  </div>
                  <textarea
                    className="form-control questioninput px-0"
                    placeholder="Say something about this..."
                  />

                  <div className="link-input">
                    <i className="fa fa-link"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter a Link"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <span
                type="button"
                className="font-weight-bold mr-2"
                data-dismiss="modal"
              >
                Cancle
              </span>
              <button type="button" className="btn btn-primary rounded-pill">
                Add Question
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityHeader;
