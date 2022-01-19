import React, { FC } from 'react';

// Components
// import { Home } from './pages/Home/Home';
import { LearningGraphQL } from './pages/LearningGraphQL/LearningGraphQL';
// Styles
import './styles/base.css';

export const LearningApp: FC = () => {
  return (
    <div>
      <LearningGraphQL />
    </div>
  );
};
