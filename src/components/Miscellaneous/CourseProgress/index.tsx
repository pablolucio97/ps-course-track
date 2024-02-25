import { IStyledTheme } from '@interfaces/theme';
import { getScreenWidthPercent } from '@utils/layout';
import React from 'react';
import * as Progress from 'react-native-progress';
import { useTheme } from 'styled-components/native';
import { Container, InfoContainer, Styles, Text, Title } from './styles';

interface CourseProgressProps {
  totalWatchedClasses: number;
  totalCourseClasses: number;
}

export function CourseProgress({
  totalCourseClasses,
  totalWatchedClasses,
}: CourseProgressProps) {
  const totalProgressValue = Number(
    Number(totalWatchedClasses / totalCourseClasses) * 100
  );
  const totalProgress =
    totalProgressValue < 10
      ? totalProgressValue.toString().substring(0, 1)
      : totalProgressValue < 100
        ? totalProgressValue.toPrecision(2)
        : totalProgressValue.toPrecision(3);
  const totalProgressIndicator = Number(
    totalWatchedClasses / totalCourseClasses
  );

  const theme = useTheme() as IStyledTheme;
  const screenWidth = getScreenWidthPercent(90);

  return (
    <Container>
      <Title>Meu Progresso</Title>
      <Progress.Bar
        width={screenWidth}
        progress={totalProgressIndicator}
        style={Styles.progressBar}
        unfilledColor={theme.colors.cards}
        color={theme.colors.primary}
      />
      <InfoContainer>
        <Title>{totalProgress} %</Title>
        <Text>
          {totalWatchedClasses} de {totalCourseClasses} aulas assistidas
        </Text>
      </InfoContainer>
    </Container>
  );
}
