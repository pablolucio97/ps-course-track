import { IMAGE_TRANSITION_MS_FAST } from '@appConstants/miscellaneous';
import { GlobalStyles, RowContainer } from '@styles/globals';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { SvgXml } from 'react-native-svg';
import { logoSmallSvg } from '../../assets/svgs';
import { GreetUser } from './components/GreetUser';
import { Container, Styles } from './styles';

export function Home() {
  const bgImgPath = '../../assets/imgs/course_img_bg.png';
  return (
    <Container>
      <StatusBar style="dark" />
      <RowContainer
        style={[
          GlobalStyles.justifyContentSpaceBetween,
          GlobalStyles.alignItemsCenter,
        ]}
      >
        <GreetUser userName="John Doe" />
        <SvgXml xml={logoSmallSvg} />
      </RowContainer>
      <Image
        style={Styles.courseImage}
        source={require(bgImgPath)}
        transition={IMAGE_TRANSITION_MS_FAST}
      />
    </Container>
  );
}
