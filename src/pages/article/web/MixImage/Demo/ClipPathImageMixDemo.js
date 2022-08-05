import { Fragment, useState, useEffect, useRef, useCallback } from 'react';
import { Button } from 'antd';
import classNames from 'classnames';
import style from './clipPathImageMixDemo.module.sass';
import Picture from '../../../../../components/Picture/Picture';

const picArr = [
  {
    avifSrc: '/images/mix-image/3.avif',
    webpSrc: '/images/mix-image/3.webp',
    src: '/images/mix-image/3.jpg'
  },
  {
    avifSrc: '/images/mix-image/2.avif',
    webpSrc: '/images/mix-image/2.webp',
    src: '/images/mix-image/2.jpg'
  }
];

function ClipPathImageMixDemo(props) {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  // 切换图片
  function switchIndex(event) {
    setIndex((prevState) => prevState === 0 ? 1 : 0);
  }

  // 设置css变量的值
  function setStyleProperty(x, y, radius) {
    containerRef.current.style.setProperty('--x', `${ x }px`);
    containerRef.current.style.setProperty('--y', `${ y }px`);
    typeof radius === 'number' && containerRef.current.style.setProperty('--radius', `${ radius }px`);
  }

  const handleMouseMove = useCallback(function(event) {
    const bounding = event.target.getBoundingClientRect();
    const [x, y] = [event.pageX - bounding.left, event.pageY - bounding.top];

    setStyleProperty(x, y, 150);
  }, []);

  const handleMouseOut = useCallback(function(event) {
    setStyleProperty(0, 0, 0);
    containerRef.current.removeEventListener('mousemove', handleMouseMove);
    containerRef.current.removeEventListener('mouseout', handleMouseOut);
  }, []);

  const handleMouseOver = useCallback(function(event) {
    const bounding = event.target.getBoundingClientRect();
    const [x, y] = [event.pageX - bounding.left, event.pageY - bounding.top];

    setStyleProperty(x, y, 150);
    containerRef.current.addEventListener('mousemove', handleMouseMove);
    containerRef.current.addEventListener('mouseout', handleMouseOut);
  }, []);

  useEffect(function() {
    containerRef.current.addEventListener('mouseover', handleMouseOver);

    return function() {
      handleMouseOut();
      containerRef.current.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <Fragment>
      <div ref={ containerRef } className={ classNames('relative mx-auto max-w-[600px]', style.container) }>
        <Picture className="block w-full pointer-events-none"
          imageClassName="w-full"
          { ...picArr[index] }
        />
        <Picture className={ classNames('block absolute top-0 left-0 w-full pointer-events-none', style.mix) }
          imageClassName="w-full"
          { ...picArr[index === 0 ? 1 : 0] }
        />
      </div>
      <div className="pt-[16px] text-center">
        <Button onClick={ switchIndex }>切换图片</Button>
      </div>
    </Fragment>
  );
}

export default ClipPathImageMixDemo;