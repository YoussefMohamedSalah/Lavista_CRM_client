/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import React from 'react';
// import NotificationMessage from './NotificationMessage';

const NotficationList = ({ GroupTitle }) => {
  return (
    <>
      <div className="messages-section">
        <button className="messages-close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x-circle"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
        </button>
        <div className="projects-section-header">
          <p>{GroupTitle}</p>
        </div>
        <div className="messages">
          {/* ------------------------------ */}
          {/* {RealTimeScanning.map((variant) => (
            <>
              <NotificationMessage
                Date={variant.date}
                Title={variant.title}
                Body={variant.body}
                AvatarUrl={variant.avatarUrl}
                State={variant.state}
              />
            </>
          ))} */}
          {/* ----------------------------------------------------- */}
        </div>
      </div>
    </>
  );
};

export default NotficationList;
