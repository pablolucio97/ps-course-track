import { BorderlessButton } from '@components/Buttons/BorderlessButton';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { CollapsibleCard } from '@components/Miscellaneous/CollapsibleCard';
import { HeaderNavigation } from '@components/Miscellaneous/HeaderNavigation';
import { NextClassCard } from '@components/Miscellaneous/NextClassCard';
import { PreviousClassCard } from '@components/Miscellaneous/PreviousClassCard';
import { Subtitle } from '@components/Typography/Subtitle';
import { IStyledTheme } from '@interfaces/theme';
import { GlobalStyles } from '@styles/globals';
import { getScreenHeightPercent } from '@utils/layout';
import { ResizeMode, Video } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { Modalize } from 'react-native-modalize';
import { useTheme } from 'styled-components/native';
import {
  Container,
  PreviousAndNextClassContainer,
  ScrollContainer,
  Styles,
} from './styles';

export function WatchClass() {
  const videoRef = useRef(null);
  const videoUrl = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';
  const theme = useTheme() as IStyledTheme;
  const allCommentariesModalRef = useRef<Modalize>(null);
  const writeCommentaryModalRef = useRef<Modalize>(null);

  const handleOpenAllCommentariesModal = () => {
    allCommentariesModalRef?.current?.open();
  };

  const handleOpenWriteCommentaryModal = () => {
    writeCommentaryModalRef?.current?.open();
  };

  const MODAL_HEIGHT = getScreenHeightPercent(60);

  return (
    <Container>
      <StatusBar style="light" />
      <HeaderNavigation screenTitle="Como criar negócios rentáveis" showsLogo />
      <Video
        ref={videoRef}
        source={{
          uri: videoUrl,
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        style={Styles.video}
        volume={1}
      />
      <ScrollContainer showsVerticalScrollIndicator={false}>
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
          style={[GlobalStyles.marginBottomSmall] as never}
        />
        <Subtitle
          content="Comentários"
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
          style={[GlobalStyles.marginBottomSmall] as never}
        />
        <CollapsibleCard
          isCollapsed
          content="Maecenas at massa faucibus, pellentesque metus nec, pharetra nunc. Aliquam enim eros, eleifend id ornare nec, lacinia id justo. Nam magna tortor, sollicitudin ut arcu id, vulputate posuere nibh. "
          onCollapse={() => {}}
          style={[GlobalStyles.marginBottomSmall] as never}
        />
        <BorderlessButton
          title="Ver todos os comentários"
          onPress={handleOpenWriteCommentaryModal}
          style={Styles.seeAllCommentariesText}
        />
        <Subtitle
          content="Gostaria de escrever um comentário ou precisa acessar o suporte?"
          style={Styles.supportText}
        />
        <PrimaryButton
          title="Escrever comentário"
          onPress={handleOpenAllCommentariesModal}
          style={[GlobalStyles.marginBottomSmall] as never}
        />
        <PrimaryButton
          title="Acessar suporte"
          bgColor={theme.colors.success}
          style={[GlobalStyles.marginBottomLarge] as never}
        />
      </ScrollContainer>
      <Modalize
        ref={allCommentariesModalRef}
        modalHeight={MODAL_HEIGHT}
        modalStyle={[Styles.modal, { backgroundColor: theme.colors.cards }]}
      ></Modalize>
      <Modalize
        ref={writeCommentaryModalRef}
        modalHeight={MODAL_HEIGHT}
        modalStyle={[Styles.modal, { backgroundColor: theme.colors.cards }]}
        scrollViewProps={{
          showsVerticalScrollIndicator: false,
        }}
      >
        <Subtitle
          content="Comentários"
          style={
            [
              GlobalStyles.marginTopSmall,
              GlobalStyles.marginBottomMedium,
              GlobalStyles.textCenter,
            ] as never
          }
        />
        <CollapsibleCard
          isCollapsed
          content="Maecenas at massa faucibus, pellentesque metus nec, pharetra nunc. Aliquam enim eros, eleifend id ornare nec, lacinia id justo. Nam magna tortor, sollicitudin ut arcu id, vulputate posuere nibh. "
          onCollapse={() => {}}
          style={[GlobalStyles.marginBottomSmall] as never}
        />
        <CollapsibleCard
          isCollapsed
          content="Maecenas at massa faucibus, pellentesque metus nec, pharetra nunc. Aliquam enim eros, eleifend id ornare nec, lacinia id justo. Nam magna tortor, sollicitudin ut arcu id, vulputate posuere nibh. "
          onCollapse={() => {}}
          style={[GlobalStyles.marginBottomSmall] as never}
        />
        <CollapsibleCard
          isCollapsed
          content="Maecenas at massa faucibus, pellentesque metus nec, pharetra nunc. Aliquam enim eros, eleifend id ornare nec, lacinia id justo. Nam magna tortor, sollicitudin ut arcu id, vulputate posuere nibh. "
          onCollapse={() => {}}
          style={[GlobalStyles.marginBottomSmall] as never}
        />
        <CollapsibleCard
          isCollapsed
          content="Maecenas at massa faucibus, pellentesque metus nec, pharetra nunc. Aliquam enim eros, eleifend id ornare nec, lacinia id justo. Nam magna tortor, sollicitudin ut arcu id, vulputate posuere nibh. "
          onCollapse={() => {}}
          style={[GlobalStyles.marginBottomSmall] as never}
        />
        <CollapsibleCard
          isCollapsed
          content="Maecenas at massa faucibus, pellentesque metus nec, pharetra nunc. Aliquam enim eros, eleifend id ornare nec, lacinia id justo. Nam magna tortor, sollicitudin ut arcu id, vulputate posuere nibh. "
          onCollapse={() => {}}
          style={[GlobalStyles.marginBottomSmall] as never}
        />
        <CollapsibleCard
          isCollapsed
          content="Maecenas at massa faucibus, pellentesque metus nec, pharetra nunc. Aliquam enim eros, eleifend id ornare nec, lacinia id justo. Nam magna tortor, sollicitudin ut arcu id, vulputate posuere nibh. "
          onCollapse={() => {}}
          style={[GlobalStyles.marginBottomSmall] as never}
        />
        <CollapsibleCard
          isCollapsed
          content="Maecenas at massa faucibus, pellentesque metus nec, pharetra nunc. Aliquam enim eros, eleifend id ornare nec, lacinia id justo. Nam magna tortor, sollicitudin ut arcu id, vulputate posuere nibh. "
          onCollapse={() => {}}
          style={[GlobalStyles.marginBottomSmall] as never}
        />
        <CollapsibleCard
          isCollapsed
          content="Maecenas at massa faucibus, pellentesque metus nec, pharetra nunc. Aliquam enim eros, eleifend id ornare nec, lacinia id justo. Nam magna tortor, sollicitudin ut arcu id, vulputate posuere nibh. "
          onCollapse={() => {}}
          style={[GlobalStyles.marginBottomSmall] as never}
        />
      </Modalize>
    </Container>
  );
}
