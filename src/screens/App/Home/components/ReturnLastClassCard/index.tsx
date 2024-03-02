import {
  CardContainer,
  CardRowContainer,
  CardTitle,
  ClassInfoContainer,
  ClassTitle,
  Container,
  Text,
} from './styles';

import { Feather } from '@expo/vector-icons';
import { IStyledTheme } from '@interfaces/theme';
import { useTheme } from 'styled-components/native';

interface ReturnLastClassCardProps {
  classTitle: string;
  classDuration: string;
}

export function ReturnLastClassCard({
  classDuration,
  classTitle,
}: ReturnLastClassCardProps) {
  const theme = useTheme() as IStyledTheme;

  return (
    <Container>
      <CardTitle>Retome de onde parou</CardTitle>
      <CardContainer>
        <CardRowContainer>
          <Feather
            name="play-circle"
            size={theme.sizes[7]}
            color={theme.colors.title}
          />
          <ClassInfoContainer>
            <ClassTitle>{classTitle}</ClassTitle>
            <Text>Duração: {classDuration}</Text>
          </ClassInfoContainer>
        </CardRowContainer>
      </CardContainer>
    </Container>
  );
}
