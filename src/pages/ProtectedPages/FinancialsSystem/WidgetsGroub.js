/* eslint-disable react/button-has-type */
/* eslint-disable arrow-body-style */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Widget from './Widget';

const WidgetsGroub = ({ GroupTitle, StatusArray, WidgetData }) => {
  const [data, setData] = useState()
  console.log(data)

  // -----*-----*------*------Get Category Data*-----*-----*-----*-----*-----

  const getAllCategories = async () => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_API_KEY}/api/category`);
      setData(data.data)
    } catch (err) {
      console.error(err);
    }
  };

  // -----*-----*------*------*-----*-----*-----*-----*-----*-----

  useEffect(() => {
    getAllCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // -----*-----*------*------*-----*-----*-----*-----*-----*-----

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
            {StatusArray?.map((status) => (
              <>
                <div className="item-status">
                  <span className="status-number" style={{ color: `${status.styleColor}` }}>
                    {status.value}
                  </span>
                  <span className="status-type">{status.title}</span>
                </div>
              </>
            ))}
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
          {WidgetData?.map((variant) => (
            <>
              <Widget
                Id={variant.id}
                Date={variant.date}
                MainTitle={variant.mainTitle}
                SubTitle={variant.subTitle}
                BgColor={variant.bgColor}
                Color={variant.color}
                Progress={variant.progress}
                DoneItems={variant.doneItems}
                PendingItems={variant.pendingItems}
              />
            </>
          ))}
          {/* {data?.map((variant) => (
            <>
              <Widget
                Id={variant.id}
                MainTitle={variant.title}
                Date={variant.date}

                // SubTitle={variant.subTitle}
                // BgColor={variant.bgColor}
                // Color={variant.color}
                // Progress={variant.progress}
                DoneItems={variant.doneItems}
                PendingItems={variant.pendingItems}
              />
            </>
          ))} */}

        </div>
      </div>
    </>
  );
};

export default WidgetsGroub;
