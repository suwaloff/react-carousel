import cls from './Item.module.scss';

interface ItemProps {
  img?: string;
  text?: string;
}

export const Item = ({ img, text }: ItemProps) => {
  return (
    <div className={cls.Item}>
      <span className={cls.text}>{text}</span>
      <img className={cls.img} src={img} />
    </div>
  );
};
