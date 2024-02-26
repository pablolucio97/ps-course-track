import { ClassCard } from '@components/Miscellaneous/ClassCard';
import { Title } from '@components/Typography/Title';
import { ColumnContainer } from '@styles/globals';
import { StatusBar } from 'expo-status-bar';
import { Container } from './styles';

export function VideoClasses() {
  return (
    <Container>
      <StatusBar style="dark" />
      <ColumnContainer>
        <Title content="Videoaulas" />
      </ColumnContainer>
      <ClassCard
        classTitle="Como criar negócios rentáveis"
        classDuration="08:28"
        wasWatched
      />
      <ClassCard
        classTitle="Como criar negócios rentáveis"
        classDuration="08:28"
      />
      <ClassCard
        classTitle="Como criar negócios rentáveis"
        classDuration="08:28"
      />
    </Container>
  );
}
