import { CSSProperties } from 'react';
import { TextEl } from './styles';

interface TextProps {
  content: string;
  style?: CSSProperties;
}

export function Text({ content, style }: TextProps) {
  return <TextEl style={style as never}>{content}</TextEl>;
}
