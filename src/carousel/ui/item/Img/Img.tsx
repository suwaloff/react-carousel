import './Img.css';

export interface ImgProps {
  src: string;
  alt?: string;
}

export const Img = ({ src, alt }: ImgProps) => {
  return <img className={'Img'} src={src} alt={alt} />;
};
