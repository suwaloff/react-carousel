import { CSSProperties, ReactNode } from 'react';
import { classNames } from '../helpers/classNames';
import './Item.css';

interface ItemProps {
  children?: ReactNode;
  className?: string;
  active?: boolean;
  speed?: number;
  visibleItemCount?: number;
}

export const Item = ({ className, active, children, speed, visibleItemCount }: ItemProps) => {
  const style: CSSProperties = {
    flexBasis: `calc(100% / ${visibleItemCount})`,

    // width: `calc(100% / ${visibleItemCount})`,
    // height: `calc(100% / ${visibleItemCount})`,
    // transition: `opacity ${speed}ms ease-in-out, width ${speed}ms ease, height ${speed}ms ease`,
  };
  return (
    <div className={classNames('item', {}, [className])} style={style}>
      {children}
    </div>
  );
};
