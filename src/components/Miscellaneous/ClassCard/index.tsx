import {
  CardContainer,
  CardRowContainer,
  ClassInfoContainer,
  ClassSubContainer,
  ClassTitle,
  ClassWatchedContainer,
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
  onPress: () => void;
}

export function ClassCard({
  classDuration,
  classTitle,
  wasWatched,
  onPress,
}: ClassCardProps) {
  const theme = useTheme() as IStyledTheme;

  return (
    <CardContainer onPress={onPress}>
      <CardRowContainer>
        <ClassSubContainer>
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
        </ClassSubContainer>
        {wasWatched && (
          <ClassWatchedContainer onPress={() => {}}>
            <Feather
              name="check-square"
              size={theme.sizes[5]}
              color={theme.colors.success}
            />
          </ClassWatchedContainer>
        )}
      </CardRowContainer>
    </CardContainer>
  );
}
