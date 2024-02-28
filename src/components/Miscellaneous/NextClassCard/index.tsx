import { Feather } from '@expo/vector-icons';
import { IStyledTheme } from '@interfaces/theme';
import { GlobalStyles } from '@styles/globals';
import { useTheme } from 'styled-components/native';
import {
  CardColumnContainer,
  CardContainer,
  CardRowContainer,
  CardTitle,
  ClassInfoContainer,
  ClassTitle,
  Container,
  Styles,
  Text,
} from './styles';

interface NextClassCardProps {
  classDuration: string;
  classTitle: string;
  onPress: () => void;
}

export function NextClassCard({
  classDuration,
  classTitle,
  onPress,
}: NextClassCardProps) {
  const theme = useTheme() as IStyledTheme;

  return (
    <Container onPress={onPress}>
      <CardRowContainer style={GlobalStyles.justifyContentFlexEnd}>
        <CardTitle>Próxima aula</CardTitle>
        <Feather
          name="arrow-right"
          size={theme.sizes[7]}
          color={theme.colors.title}
        />
      </CardRowContainer>
      <CardContainer>
        <ClassInfoContainer>
          <CardRowContainer>
            <Feather
              name="play-circle"
              size={theme.sizes[7]}
              color={theme.colors.title}
              style={Styles.playClassIcon}
            />
            <CardColumnContainer>
              <ClassTitle>{classTitle}</ClassTitle>
              <CardRowContainer>
                <Text>Duração: {classDuration} </Text>
              </CardRowContainer>
            </CardColumnContainer>
          </CardRowContainer>
        </ClassInfoContainer>
      </CardContainer>
    </Container>
  );
}
