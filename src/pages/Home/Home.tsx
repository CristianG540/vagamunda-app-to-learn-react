import React, { FC } from 'react';

export const Home: FC = () => {
  return (
    <div>
      <div id="test-div">{'laika come home 🐕🌌🚀'}</div>
      <button
        className="w-1/2 flex items-center justify-center bg-green-300 text-black border border-black ring-4 ring-indigo-300 text-2xl"
        type="button"
      >
        Hello chicken 🐔
      </button>
    </div>
  );
};
