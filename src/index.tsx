import React, { FC } from 'react';
// Components
// import { Home } from './pages/Home/Home';
import { MainLearningGraphQL } from './pages/LearningGraphQL';
;


// Styles
import './styles/base.css';

/**
 * A custom component. Neat!
 */
export const LearningApp: FC = () => {
  return (
    <div>
      {/* <Home /> */}
      <MainLearningGraphQL />
    </div>
  );
};
