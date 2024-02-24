import { CSSProperties } from 'react';
import { TitleEl } from './styles';

interface TitleProps {
  content: string;
  style?: CSSProperties;
}

export function Title({ content, style }: TitleProps) {
  return <TitleEl style={style as never}>{content}</TitleEl>;
}
