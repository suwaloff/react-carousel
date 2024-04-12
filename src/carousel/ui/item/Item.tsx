import { ReactNode } from 'react';
import { classNames } from '../helpers/classNames';
import './Item.css';

interface ItemProps {
  children?: ReactNode;
  className?: string;
  active?: boolean;
}

export const Item = ({ className, active, children }: ItemProps) => {
  return <div className={classNames('Item', { ['active']: active }, [className])}>{children}</div>;
};
