import {
  CardContainer,
  CardRowContainer,
  ClassInfoContainer,
  ClassTitle,
  Text,
} from './styles';

import { Feather, MaterialIcons } from '@expo/vector-icons';
import { IStyledTheme } from '@interfaces/theme';
import { useTheme } from 'styled-components/native';

interface ClassCardProps {
  classTitle: string;
  classDuration: string;
  id?: string;
  wasWatched?: boolean;
}

export function ClassCard({
  classDuration,
  classTitle,
  wasWatched,
}: ClassCardProps) {
  const theme = useTheme() as IStyledTheme;

  return (
    <CardContainer>
      <CardRowContainer>
        {wasWatched ? (
          <MaterialIcons
            name="replay"
            size={theme.sizes[7]}
            color={theme.colors.title}
          />
        ) : (
          <Feather
            name="play-circle"
            size={theme.sizes[7]}
            color={theme.colors.title}
          />
        )}
        <ClassInfoContainer>
          <ClassTitle>{classTitle}</ClassTitle>
          <Text>Duração: {classDuration}</Text>
        </ClassInfoContainer>
        {wasWatched && (
          <Feather
            name="check-square"
            size={theme.sizes[5]}
            color={theme.colors.success}
          />
        )}
      </CardRowContainer>
    </CardContainer>
  );
}
