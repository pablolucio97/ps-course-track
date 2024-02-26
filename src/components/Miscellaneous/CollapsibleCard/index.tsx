import { Dispatch, SetStateAction } from 'react';
import Collapsible from 'react-native-collapsible';
import {
  Button,
  ButtonTitle,
  CollapsibleCollapsedContainer,
  CollapsibleExpandedContainer,
  Styles,
  Text,
  Title,
} from './styles';

interface CollapsibleCardProps {
  content: string;
  isCollapsed: boolean;
  onCollapse: Dispatch<SetStateAction<boolean>>;
  title?: string;
  buttonTitleExpanded?: string;
  buttonTitleCollapsed?: string;
}

export function CollapsibleCard({
  title,
  content,
  buttonTitleExpanded,
  buttonTitleCollapsed,
  isCollapsed,
  onCollapse,
}: CollapsibleCardProps) {
  const collapsedContent = content
    .substring(0, content.length / 3)
    .concat('...');

  return (
    <CollapsibleExpandedContainer>
      {isCollapsed ? (
        <CollapsibleCollapsedContainer>
          {title && <Title>{title}</Title>}
          <Text>{collapsedContent}</Text>
          <Button onPress={() => onCollapse(isCollapsed)}>
            <ButtonTitle>{buttonTitleCollapsed ?? 'Expandir'}</ButtonTitle>
          </Button>
        </CollapsibleCollapsedContainer>
      ) : (
        <Collapsible
          collapsed={isCollapsed}
          style={Styles.collapsibleContainer}
        >
          {title && <Title>{title}</Title>}
          <Text>{content}</Text>
          <Button onPress={() => onCollapse(isCollapsed)}>
            <ButtonTitle>{buttonTitleExpanded ?? 'Ver menos'}</ButtonTitle>
          </Button>
        </Collapsible>
      )}
    </CollapsibleExpandedContainer>
  );
}
