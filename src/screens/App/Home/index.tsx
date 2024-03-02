import { IMAGE_TRANSITION_MS_FAST } from '@appConstants/miscellaneous';
import { CollapsibleCard } from '@components/Miscellaneous/CollapsibleCard';
import { CourseProgress } from '@components/Miscellaneous/CourseProgress';
import { Subtitle } from '@components/Typography/Subtitle';
import { ColumnContainer, GlobalStyles, RowContainer } from '@styles/globals';
import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SvgXml } from 'react-native-svg';
import { logoSmallSvg } from '../../../assets/svgs';
import { GreetUser } from './components/GreetUser';
import { ReturnLastClassCard } from './components/ReturnLastClassCard';
import { Container, Styles } from './styles';

export function Home() {
  const bgImgPath = '../../../assets/imgs/course_img_bg.png';
  const [isCollapsed, setIsCollapsed] = useState(true);
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
      <ColumnContainer style={GlobalStyles.marginVerticalSmall}>
        <Subtitle content="Sobre o curso" />
      </ColumnContainer>
      <ColumnContainer style={GlobalStyles.marginBottomMedium}>
        <CollapsibleCard
          content={'Lorem ipsum dolor sit amet, consectetur'}
          isCollapsed={isCollapsed}
          onCollapse={() => setIsCollapsed(!isCollapsed)}
        />
      </ColumnContainer>
      <CourseProgress totalCourseClasses={210} totalWatchedClasses={95} />
      <ColumnContainer style={GlobalStyles.marginTopMedium}>
        <ReturnLastClassCard
          classDuration="10:45"
          classTitle="Como organizar finanças pessoais"
        />
      </ColumnContainer>
    </Container>
  );
}
