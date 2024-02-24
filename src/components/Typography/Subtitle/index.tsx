import { CSSProperties } from 'react';
import { SubtitleEl } from './styles';

interface SubtitleProps {
  content: string;
  style?: CSSProperties;
}

export function Subtitle({ content, style }: SubtitleProps) {
  return <SubtitleEl style={style as never}>{content}</SubtitleEl>;
}
