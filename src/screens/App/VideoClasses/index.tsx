import { ClassCard } from '@components/Miscellaneous/ClassCard';
import { Subtitle } from '@components/Typography/Subtitle';
import { Text } from '@components/Typography/Text';
import { Title } from '@components/Typography/Title';
import { mockedClasses } from '@data/mocks';
import { useNavigation } from '@react-navigation/native';
import { TAppRoutesStack } from '@routes/app.routes';
import { ColumnContainer, GlobalStyles } from '@styles/globals';
import { light } from '@themes/light';
import { useState } from 'react';
import Collapsible from 'react-native-collapsible';
import {
  Button,
  CollapsibleExpandedContainer,
  Container,
  ScrollContainer,
} from './styles';

export function VideoClasses() {
  const [collapsedModules, setCollapsedModules] = useState<string[]>([]);

  const navigation = useNavigation<TAppRoutesStack>();

  const collapseModule = (moduleId: string) => {
    const pushedModule = collapsedModules.push(moduleId);
    setCollapsedModules([...collapsedModules, pushedModule] as never);
  };

  const expandModule = (moduleId: string) => {
    const filteredModules = collapsedModules.filter(
      module => module !== moduleId
    );
    setCollapsedModules(filteredModules);
  };

  return (
    <Container>
      <ColumnContainer>
        <Title content="Videoaulas" style={GlobalStyles.marginBottomMedium} />
      </ColumnContainer>
      <ColumnContainer>
        <Subtitle
          content="05 módulos, 210 videoaulas"
          style={
            [
              GlobalStyles.marginBottomMedium,
              { fontSize: light.theme.sizes[5] },
            ] as never
          }
        />
      </ColumnContainer>

      <ScrollContainer showsVerticalScrollIndicator={false}>
        {mockedClasses.map(videoClass => (
          <CollapsibleExpandedContainer key={videoClass.id}>
            <Button
              onPress={
                collapsedModules.includes(videoClass.id)
                  ? () => expandModule(videoClass.id)
                  : () => collapseModule(videoClass.id)
              }
            >
              <Subtitle
                content={videoClass.module}
                style={
                  [
                    GlobalStyles.marginBottomSmall,
                    { fontSize: light.theme.sizes[5] },
                  ] as never
                }
              />
              <Text
                content="Sobre este módulo"
                style={
                  [
                    GlobalStyles.marginBottomSmall,
                    {
                      fontSize: light.theme.sizes[4],
                      fontFamily: light.theme.fonts.primary_700,
                    },
                  ] as never
                }
              />
              <Text
                content={videoClass.description}
                style={
                  [
                    GlobalStyles.marginBottomSmall,
                    { fontSize: light.theme.sizes[4] },
                  ] as never
                }
              />
              <Text
                content={
                  collapsedModules.includes(videoClass.id)
                    ? 'Exibir aulas'
                    : 'Mostrar menos'
                }
                style={{ fontSize: light.theme.fontSizes[4] }}
              />
            </Button>
            <Collapsible collapsed={collapsedModules.includes(videoClass.id)}>
              {videoClass.classes.map(c => (
                <ClassCard
                  key={c.id}
                  classTitle={c.title}
                  classDuration={c.duration}
                  wasWatched={c.watched}
                  onPress={() => navigation.navigate('AssistirAula')}
                />
              ))}
            </Collapsible>
          </CollapsibleExpandedContainer>
        ))}
      </ScrollContainer>
    </Container>
  );
}
