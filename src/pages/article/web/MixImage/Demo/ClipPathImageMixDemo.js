import { Fragment, useState, useEffect, useRef, useCallback } from 'react';
import { Button, Card } from 'antd';
import classNames from 'classnames';
import style from './clipPathImageMixDemo.module.sass';
import Picture from '../../../../../components/Picture/Picture';

const picArr = [
  {
    avifSrc: '/images/mix-image/3.avif',
    webpSrc: '/images/mix-image/3.webp',
    src: '/images/mix-image/3.jpg',
    alt: '吹响吧！上低音号 吉川优子'
  },
  {
    avifSrc: '/images/mix-image/2.avif',
    webpSrc: '/images/mix-image/2.webp',
    src: '/images/mix-image/2.jpg',
    alt: '吹响吧！上低音号 中川夏纪'
  }
];

function ClipPathImageMixDemo(props) {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  // 切换图片
  function switchIndex(event) {
    setIndex((prevState) => prevState === 0 ? 1 : 0);
  }

  const handleMouseMove = useCallback(function(event) {
    if (containerRef.current) {
      const bounding = containerRef.current.getBoundingClientRect();
      const [x, y] = [event.clientX - bounding.left, event.clientY - bounding.top];

      containerRef.current.style.setProperty('--x', `${ x }px`);
      containerRef.current.style.setProperty('--y', `${ y }px`);
    }
  }, []);

  const handleMouseOver = useCallback(function(event) {
    containerRef.current.style.setProperty('--radius', '100px');
    handleMouseMove(event);
    document.addEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(function() {
    document.addEventListener('mouseover', handleMouseOver, { once: true });

    return function() {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Fragment>
      <Card className={ style.card }
        bodyStyle={{ textAlign: 'center' }}
        extra={ <Button onClick={ switchIndex }>切换图片</Button> }
      >
        <div ref={ containerRef } className={ classNames('inline-block', style.container) }>
          <div className="relative inline-block max-w-[500px] pointer-events-none">
            <Picture className="block w-full"
              imageClassName="w-full"
              { ...picArr[index] }
            />
            <Picture className={ classNames('block absolute top-0 left-0 w-full pointer-events-none', style.mix) }
              imageClassName="w-full"
              { ...picArr[index === 0 ? 1 : 0] }
            />
          </div>
        </div>
      </Card>
    </Fragment>
  );
}

export default ClipPathImageMixDemo;