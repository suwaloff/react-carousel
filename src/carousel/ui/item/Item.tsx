import { Img, ImgProps } from './Img/Img';
import { classNames } from '../helpers/classNames';
import cls from './Item.module.scss';

interface ItemProps {
  img?: ImgProps;
  text?: string;
  className?: string;
  active?: boolean;
}

export const Item = ({ img, text, className, active }: ItemProps) => {
  return (
    <div className={classNames(cls.Item, { [cls.active]: active }, [className])}>
      <span className={cls.text}>{text}</span>
      <Img alt={img.alt} src={img.src} />
    </div>
  );
};
