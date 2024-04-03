import cls from './Img.module.scss';

export interface ImgProps {
  src: string;
  alt?: string;
}

export const Img = ({ src, alt }: ImgProps) => {
  return <img className={cls.Img} src={src} alt={alt} />;
};
