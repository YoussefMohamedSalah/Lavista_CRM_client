/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import BasicInfoForm from './Forms/BasicInfoForm';
import WorkExperianseForm from './Forms/WorkExperianseForm';

export const CreatorAssigningForm = ({ userData }) => {
  return (
    <>
      <BasicInfoForm userData={userData} />
      {/* ------------------second Form------------------- */}
      <WorkExperianseForm userData={userData} />
    </>
  );
};
