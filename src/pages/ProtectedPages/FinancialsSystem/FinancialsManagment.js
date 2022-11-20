/* eslint-disable arrow-body-style */
/* eslint-disable react/button-has-type */
import React from 'react';
import './FinancialsManagment.scss';
import NotficationList from './NotficationList';
import WidgetsGroub from './WidgetsGroub';

const FinancialsManagment = () => {
  // data for wedget Group,, And for every single widget

  const StatusArray = [
    { title: 'Hello', value: '26' },
    { title: 'world', value: '43' },
    { title: 'good', value: '76' },
  ];
  const WidgetData = [
    {
      id: 1,
      date: 'December 10, 2020',
      mainTitle: 'Web Designing',
      subTitle: 'Prototyping',
      bgColor: '#fee4cb',
      color: '#ff942e',
      progress: '80%',
      doneItems: '123',
      pendingItems: '13',
    },

    {
      id: 2,
      date: 'December 10, 2020',
      mainTitle: 'UI Development',
      subTitle: 'Prototyping',
      bgColor: '#ffd3e2',
      color: '#df3670',
      progress: '20%',
      doneItems: '123',
      pendingItems: '13',
    },

    {
      id: 3,
      date: 'December 10, 2020',
      mainTitle: 'Data Analysis',
      subTitle: 'Prototyping',
      bgColor: '#c8f7dc',
      color: '#34c471',
      progress: '60%',
      doneItems: '123',
      pendingItems: '13',
    },
    {
      id: 4,
      date: 'December 10, 2020',
      mainTitle: 'Testing',
      subTitle: 'Prototyping',
      bgColor: '#e9e7fd',
      color: '#4f3ff0',
      progress: '50%',
      doneItems: '123',
      pendingItems: '13',
    },
    {
      id: 5,
      date: 'December 10, 2020',
      mainTitle: 'Web Designing',
      subTitle: 'Prototyping',
      bgColor: '#fee4cb',
      color: '#ff942e',
      progress: '80%',
      doneItems: '123',
      pendingItems: '13',
    },
    {
      id: 6,
      date: 'December 10, 2020',
      mainTitle: 'Web Designing',
      subTitle: 'Prototyping',
      bgColor: '#d5deff',
      color: '#4067f9',
      progress: '40%',
      doneItems: '123',
      pendingItems: '13',
    },
  ];
  return (
    <>
      <div className="app-container" style={{ borderRadius: '15px' }}>
        <div className="app-header">
          <div className="app-header-left">
            <span className="app-icon" />
            <p className="app-name">Financials Managment</p>
          </div>
          <div className="app-header-right">
            <button className="mode-switch" title="Switch Theme">
              <svg
                className="moon"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <defs />
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            </button>
            <button className="add-btn" title="Add New Project">
              <svg
                className="btn-icon feather feather-plus"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <button className="notification-btn">
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
                className="feather feather-bell"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </button>
            <button className="profile-btn">
              <img src="https://assets.codepen.io/3306515/IMG_2025.jpg" alt="ss" />
              <span>Aybüke C.</span>
            </button>
          </div>
          <button className="messages-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-message-circle"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </button>
        </div>
        <div className="app-content">
          {/* --------------------- Side Icons -------------------------------------------------- */}
          <div className="app-sidebar">
            <a href="#" className="app-sidebar-link active">
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
                className="feather feather-home"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </a>
            <a href="#" className="app-sidebar-link">
              <svg
                className="link-icon feather feather-pie-chart"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <defs />
                <path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
              </svg>
            </a>
            <a href="#" className="app-sidebar-link">
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
                className="feather feather-calendar"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </a>
            <a href="#" className="app-sidebar-link">
              <svg
                className="link-icon feather feather-settings"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <defs />
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
            </a>
          </div>
          {/* wedgets section */}
          <WidgetsGroub GroupTitle={'Statistics'} WidgetData={WidgetData} StatusArray={StatusArray} />
          {/* wedgets section end */}
          {/* ============================================== */}
          {/* messages section */}
          <NotficationList GroupTitle={'Real Time Paying '} />
          {/* messages section end */}
        </div>
      </div>
    </>
  );
};
export default FinancialsManagment;

