import { CSSProperties } from 'react';
import { TextEl } from './styles';

interface TextProps {
  content: string;
  style?: CSSProperties;
  allowFontScaling?: boolean;
}

export function Text({ content, style, allowFontScaling }: TextProps) {
  return (
    <TextEl style={style as never} allowFontScaling={allowFontScaling}>
      {content}
    </TextEl>
  );
}
