/* eslint-disable quotes */
import { BorderlessButton } from '@components/Buttons/BorderlessButton';
import { PrimaryButton } from '@components/Buttons/PrimaryButton';
import { TextInput } from '@components/Inputs/TextInput';
import { CollapsibleCard } from '@components/Miscellaneous/CollapsibleCard';
import { HeaderNavigation } from '@components/Miscellaneous/HeaderNavigation';
import { NextClassCard } from '@components/Miscellaneous/NextClassCard';
import { PreviousClassCard } from '@components/Miscellaneous/PreviousClassCard';
import { Subtitle } from '@components/Typography/Subtitle';
import { Text } from '@components/Typography/Text';
import { classCommentaries } from '@data/mocks';
import { IStyledTheme } from '@interfaces/theme';
import { GlobalStyles } from '@styles/globals';
import { getScreenHeightPercent } from '@utils/layout';
import { ResizeMode, Video } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { SvgXml } from 'react-native-svg';
import { useTheme } from 'styled-components/native';
import { noDataSvg } from '../../../assets/svgs';
import {
  Container,
  NoDataContainer,
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
  const [isKeyboardActive, setIsKeyboardActive] = useState(false);
  const [commentary, setCommentary] = useState('');

  const handleOpenAllCommentariesModal = () => {
    allCommentariesModalRef?.current?.open();
  };

  const handleOpenWriteCommentaryModal = () => {
    writeCommentaryModalRef?.current?.open();
  };

  const TOTAL_ALLOWED_COMMENTARY_CHARACTERS_LENGTH = 320;
  const SEE_ALL_COMMENTARIES_MODAL_HEIGHT = getScreenHeightPercent(60);
  const WRITE_COMMENTARY_MODAL_HEIGHT = getScreenHeightPercent(45);
  const WRITE_COMMENTARY_MODAL_HEIGHT_KEYBOARD_ACTIVE =
    getScreenHeightPercent(80);

  const calcRemainingCharactersLength = () => {
    return TOTAL_ALLOWED_COMMENTARY_CHARACTERS_LENGTH - commentary.length;
  };

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardActive(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardActive(false);
    });

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

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
        {classCommentaries.length > 0 ? (
          <>
            <BorderlessButton
              title="Ver todos os comentários"
              onPress={handleOpenAllCommentariesModal}
              style={Styles.seeAllCommentariesText}
            />
            {classCommentaries.slice(0, 2).map(c => (
              <CollapsibleCard
                key={c.id}
                isCollapsed
                content={c.commentary}
                onCollapse={() => {}}
                style={[GlobalStyles.marginBottomSmall] as never}
              />
            ))}
          </>
        ) : (
          <NoDataContainer>
            <Text
              content={`Ainda não existem comentários\npara esta aula`}
              style={
                [
                  GlobalStyles.marginVerticalMedium,
                  GlobalStyles.textCenter,
                ] as never
              }
            />
            <SvgXml xml={noDataSvg} style={Styles.noDataSVG} />
          </NoDataContainer>
        )}

        <Subtitle
          content="Gostaria de escrever um comentário ou precisa acessar o suporte?"
          style={Styles.supportText}
        />
        <PrimaryButton
          title="Escrever comentário"
          onPress={handleOpenWriteCommentaryModal}
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
        modalHeight={SEE_ALL_COMMENTARIES_MODAL_HEIGHT}
        scrollViewProps={{
          showsVerticalScrollIndicator: false,
        }}
        modalStyle={[
          Styles.seeAllCommentariesModal,
          { backgroundColor: theme.colors.cards },
        ]}
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
        {classCommentaries.map(c => (
          <CollapsibleCard
            key={c.id}
            isCollapsed
            content={c.commentary}
            onCollapse={() => {}}
            style={[GlobalStyles.marginBottomMedium] as never}
          />
        ))}
      </Modalize>
      <Modalize
        ref={writeCommentaryModalRef}
        modalHeight={
          isKeyboardActive
            ? WRITE_COMMENTARY_MODAL_HEIGHT_KEYBOARD_ACTIVE
            : WRITE_COMMENTARY_MODAL_HEIGHT
        }
        modalStyle={[
          Styles.writeCommentaryModal,
          { backgroundColor: theme.colors.cards },
        ]}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <Subtitle
            content="Escrever comentário"
            style={
              [
                GlobalStyles.marginTopSmall,
                GlobalStyles.marginBottomMedium,
                GlobalStyles.textCenter,
              ] as never
            }
          />
          <TextInput
            label="Escreva seu comentário"
            multiline
            numberOfLines={40}
            value={commentary}
            maxLength={TOTAL_ALLOWED_COMMENTARY_CHARACTERS_LENGTH}
            onChangeText={setCommentary}
            style={Styles.textAreaInput}
          />
          <Subtitle
            content={`${calcRemainingCharactersLength()} caracteres restantes`}
            style={Styles.textAreaCharactersIndicator}
          />
          <PrimaryButton
            title="Enviar comentário"
            style={[GlobalStyles.marginVerticalMedium] as never}
          />
        </KeyboardAvoidingView>
      </Modalize>
    </Container>
  );
}
