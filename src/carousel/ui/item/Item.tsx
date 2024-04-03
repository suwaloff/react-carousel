import { Img, ImgProps } from './Img/Img';
import cls from './Item.module.scss';

interface ItemProps {
  img?: ImgProps;
  text?: string;
}

export const Item = ({ img, text }: ItemProps) => {
  return (
    <div className={cls.Item}>
      <span className={cls.text}>{text}</span>
      <Img alt={img.alt} src={img.src} />
    </div>
  );
};
