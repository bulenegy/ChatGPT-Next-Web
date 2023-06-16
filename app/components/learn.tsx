
import styles from "./learn.scss";


import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <div>
      <img src="https://example.com/image.jpg" alt="example" />
      <textarea placeholder="请在此输入文字" />
      <button>提交</button>
    </div>
  );
};

export default MyComponent;