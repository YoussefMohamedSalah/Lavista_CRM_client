/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
import React from 'react';
import Widget from './Widget';

const WidgetsGroub = ({ GroupTitle, CategoriesData, villageQrcodeList }) => {
  return (
    <>
      {/* widgets section---------------------------------------------- */}
      <div className="projects-section">
        <div className="projects-section-header">
          <p>{GroupTitle}</p>
          <p className="time">December, 12</p>
        </div>
        <div className="projects-section-line">
          <div className="projects-status">
            {/* /------------------------------------------------------ */}
            <>
              <div className="item-status">
                <span className="status-number" style={{ color: '#1f1c2e' }}>
                  {villageQrcodeList?.allItemsCount}
                </span>
                <span className="status-type">All Items</span>
              </div>
            </>
            <>
              <div className="item-status">
                <span className="status-number" style={{ color: '#34c471' }}>
                  {villageQrcodeList?.goodItemsCount}
                </span>
                <span className="status-type">Good Items</span>
              </div>
            </>
            <>
              <div className="item-status">
                <span className="status-number" style={{ color: '#ff942e' }}>
                  {villageQrcodeList?.underRepaitItemsCount}
                </span>
                <span className="status-type">Under Repair</span>
              </div>
            </>
            {/* ------------------------------------------------------- */}
          </div>
          <div className="view-actions">
            <button className="view-btn list-view" title="List View">
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
                className="feather feather-list"
              >
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </button>
            <button className="view-btn grid-view active" title="Grid View">
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
                className="feather feather-grid"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </button>
          </div>
        </div>
        <div className="project-boxes jsGridView">
          {/* ---------------------Widgets--------------------------- */}
          {CategoriesData?.map((category) => (
            <>
              <Widget key={category.id} Category={category} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default WidgetsGroub;
