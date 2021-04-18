import { useEffect, useState } from 'react';

const defaultDimensions = { width: 0, height: 0 };

const useDimensions = (targetRef) => {
  let [dimensions, setDimensions] = useState(defaultDimensions);  //再代入したいからletで受け取る
  const node = targetRef.current;

  const updateDimensions = (node) => {
    return node === null 
    ? defaultDimensions
    : {
        width: node.offsetWidth,
        height: node.offsetHeight,
      };
    };
      dimensions = updateDimensions(node);

    useEffect(() => {
      const resizeDimensions = () => {
        setDimensions(updateDimensions(node));
      };
      window.removeEventListener('resize', resizeDimensions);
      window.addEventListener('resize', resizeDimensions);  //resizeされたら、resizeDimensionsが実行される
    }, [node]);

      return dimensions;
};

export default useDimensions;
