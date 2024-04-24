import styled from "styled-components";
import React from "react";

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  /* width: 100vw; */
`;

// Styled component for each stat card
const StatCard = styled.div`
  background-color: #f0f0f0;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Styled component for the stat value
const StatValue = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: black;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
`;

// Styled component for the stat label
const StatLabel = styled.span`
  text-align: right;
  color: grey;
`;

const StatUnit = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: grey;
  margin-top: 6px;
`;

const Stat = ({ value, unit, label, sensor }) => (
  <StatsWrapper>
    <StatCard>
      <div>
        <StatValue>
          {value} <StatUnit>{unit}</StatUnit>
        </StatValue>
      </div>
      <div>
        <div>{label}</div>
        <StatLabel>{sensor}</StatLabel>
      </div>
    </StatCard>
  </StatsWrapper>
);

export default Stat;
