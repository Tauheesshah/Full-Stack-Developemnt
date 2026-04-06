import React from 'react';

export const Button = ({ label, functions }) => {
  return <button onClick={functions}>{label}</button>;
};