import { ClassCard } from '@components/Miscellaneous/ClassCard';
import { Subtitle } from '@components/Typography/Subtitle';
import { Text } from '@components/Typography/Text';
import { Title } from '@components/Typography/Title';
import { ColumnContainer, GlobalStyles } from '@styles/globals';
import { light } from '@themes/light';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Collapsible from 'react-native-collapsible';
import {
  Button,
  CollapsibleCollapsedContainer,
  CollapsibleExpandedContainer,
  Container,
} from './styles';

export function VideoClasses() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <Container>
      <StatusBar style="dark" />
      <ColumnContainer>
        <Title content="Videoaulas" style={GlobalStyles.marginBottomMedium} />
      </ColumnContainer>
      {isCollapsed ? (
        <CollapsibleCollapsedContainer>
          <Button onPress={() => setIsCollapsed(!isCollapsed)}>
            <Subtitle
              content="Módulo 1"
              style={
                [
                  GlobalStyles.marginBottomSmall,
                  { fontSize: light.theme.sizes[5] },
                ] as never
              }
            />
            <Text
              content="Expandir móodulo"
              style={{ fontSize: light.theme.fontSizes[4] }}
            />
          </Button>
        </CollapsibleCollapsedContainer>
      ) : (
        <CollapsibleExpandedContainer>
          <Button onPress={() => setIsCollapsed(!isCollapsed)}>
            <Subtitle
              content="Módulo 1"
              style={
                [
                  GlobalStyles.marginBottomSmall,
                  { fontSize: light.theme.sizes[5] },
                ] as never
              }
            />
            <Text
              content="Recolher móodulo"
              style={{ fontSize: light.theme.fontSizes[4] }}
            />
          </Button>
          <Collapsible collapsed={isCollapsed}>
            <ClassCard
              classTitle="Como criar negócios rentáveis mesmo sendo um emprego CLT no Brasil"
              classDuration="08:28"
              wasWatched
            />
            <ClassCard
              classTitle="Como criar negócios"
              classDuration="08:28"
              wasWatched
            />
            <ClassCard
              classTitle="Como criar negócios rentáveis"
              classDuration="08:28"
            />
          </Collapsible>
        </CollapsibleExpandedContainer>
      )}
    </Container>
  );
}
