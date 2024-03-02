import { CollapsibleCard } from '@components/Miscellaneous/CollapsibleCard';
import { HeaderNavigation } from '@components/Miscellaneous/HeaderNavigation';
import { NextClassCard } from '@components/Miscellaneous/NextClassCard';
import { PreviousClassCard } from '@components/Miscellaneous/PreviousClassCard';
import { Subtitle } from '@components/Typography/Subtitle';
import { GlobalStyles } from '@styles/globals';
import { StatusBar } from 'expo-status-bar';
import { Container, PreviousAndNextClassContainer } from './styles';

export function WatchClass() {
  return (
    <Container>
      <StatusBar style="dark" />
      <HeaderNavigation screenTitle="Como criar negócios rentáveis" showsLogo />
      <PreviousAndNextClassContainer>
        <PreviousClassCard
          classDuration="10:44"
          classTitle="Como calcular custos corretamente"
          onPress={() => {}}
        />
        <NextClassCard
          classDuration="04:35"
          classTitle="Como calcular custos"
          onPress={() => {}}
        />
      </PreviousAndNextClassContainer>
      <Subtitle
        content="Sobre esta aula"
        style={
          [
            GlobalStyles.marginTopMedium,
            GlobalStyles.marginBottomSmall,
          ] as never
        }
      />
      <CollapsibleCard
        isCollapsed
        content="Maecenas at massa faucibus, pellentesque metus nec, pharetra nunc. Aliquam enim eros, eleifend id ornare nec, lacinia id justo. Nam magna tortor, sollicitudin ut arcu id, vulputate posuere nibh. "
        onCollapse={() => {}}
      />
    </Container>
  );
}
