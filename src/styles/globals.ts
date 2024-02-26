import { light } from '@themes/light';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const RowContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const ColumnContainer = styled.View`
  width: 100%;
`;

export const GlobalStyles = StyleSheet.create({
  marginTopSmall: {
    marginTop: light.theme.spacings[2],
  },
  marginTopMedium: {
    marginTop: light.theme.spacings[5],
  },
  marginTopLarge: {
    marginTop: light.theme.spacings[8],
  },
  marginTopExtraLarge: {
    marginTop: light.theme.spacings[10],
  },
  marginBottomSmall: {
    marginBottom: light.theme.spacings[2],
  },
  marginBottomMedium: {
    marginBottom: light.theme.spacings[5],
  },
  marginBottomLarge: {
    marginBottom: light.theme.spacings[8],
  },
  marginBottomExtraLarge: {
    marginBottom: light.theme.spacings[10],
  },
  marginVerticalSmall: {
    marginTop: light.theme.spacings[2],
    marginBottom: light.theme.spacings[2],
  },
  marginVerticalMedium: {
    marginTop: light.theme.spacings[5],
    marginBottom: light.theme.spacings[5],
  },
  marginVerticalLarge: {
    marginTop: light.theme.spacings[8],
    marginBottom: light.theme.spacings[8],
  },
  marginVerticalExtraLarge: {
    marginTop: light.theme.spacings[10],
    marginBottom: light.theme.spacings[10],
  },
  paddingTopSmall: {
    paddingBottom: light.theme.spacings[2],
  },
  paddingTopMedium: {
    paddingTop: light.theme.spacings[5],
  },
  paddingTopLarge: {
    paddingTop: light.theme.spacings[8],
  },
  paddingTopExtraLarge: {
    paddingTop: light.theme.spacings[10],
  },
  paddingBottomSmall: {
    paddingBottom: light.theme.spacings[3],
  },
  paddingBottomMedium: {
    paddingBottom: light.theme.spacings[5],
  },
  paddingBottomLarge: {
    paddingBottom: light.theme.spacings[8],
  },
  paddingBottomExtraLarge: {
    paddingBottom: light.theme.spacings[10],
  },
  paddingVerticalSmall: {
    paddingTop: light.theme.spacings[2],
    paddingBottom: light.theme.spacings[2],
  },
  paddingVerticalMedium: {
    paddingTop: light.theme.spacings[5],
    paddingBottom: light.theme.spacings[5],
  },
  paddingVerticalLarge: {
    paddingTop: light.theme.spacings[8],
    paddingBottom: light.theme.spacings[8],
  },
  paddingVerticalExtraLarge: {
    paddingTop: light.theme.spacings[10],
    paddingBottom: light.theme.spacings[10],
  },
  paddingLeftSmall: {
    paddingLeft: light.theme.spacings[2],
  },
  paddingLeftMedium: {
    paddingLeft: light.theme.spacings[5],
  },
  paddingLeftLarge: {
    paddingLeft: light.theme.spacings[8],
  },
  paddingLeftExtraLarge: {
    paddingLeft: light.theme.spacings[10],
  },
  paddingRightSmall: {
    paddingRight: light.theme.spacings[2],
  },
  paddingRightMedium: {
    paddingRight: light.theme.spacings[5],
  },
  paddingRightLarge: {
    paddingRight: light.theme.spacings[8],
  },
  paddingRightExtraLarge: {
    paddingRight: light.theme.spacings[10],
  },
  paddingHorizontalSmall: {
    paddingLeft: light.theme.spacings[2],
    paddingRight: light.theme.spacings[2],
  },
  paddingHorizontalMedium: {
    paddingLeft: light.theme.spacings[5],
    paddingRight: light.theme.spacings[5],
  },
  paddingHorizontalLarge: {
    paddingLeft: light.theme.spacings[8],
    paddingRight: light.theme.spacings[8],
  },
  paddingHorizontalExtraLarge: {
    paddingLeft: light.theme.spacings[10],
    paddingRight: light.theme.spacings[10],
  },
  marginLeftSmall: {
    marginLeft: light.theme.spacings[2],
  },
  marginLeftMedium: {
    marginLeft: light.theme.spacings[5],
  },
  marginLeftLarge: {
    marginLeft: light.theme.spacings[8],
  },
  marginLeftExtraLarge: {
    marginLeft: light.theme.spacings[10],
  },
  marginRightSmall: {
    marginRight: light.theme.spacings[2],
  },
  marginRightMedium: {
    marginRight: light.theme.spacings[5],
  },
  marginRightLarge: {
    marginRight: light.theme.spacings[8],
  },
  marginRightExtraLarge: {
    marginRight: light.theme.spacings[10],
  },
  marginHorizontalSmall: {
    marginLeft: light.theme.spacings[2],
    marginRight: light.theme.spacings[2],
  },
  marginHorizontalMedium: {
    marginLeft: light.theme.spacings[5],
    marginRight: light.theme.spacings[5],
  },
  marginHorizontalLarge: {
    marginLeft: light.theme.spacings[8],
    marginRight: light.theme.spacings[8],
  },
  marginHorizontalExtraLarge: {
    marginLeft: light.theme.spacings[10],
    marginRight: light.theme.spacings[10],
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsFlexStart: {
    alignItems: 'flex-start',
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end',
  },
  alignItemsBaseline: {
    alignItems: 'baseline',
  },
  alignItemsStretch: {
    alignItems: 'stretch',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentFlexStart: {
    justifyContent: 'flex-start',
  },
  justifyContentFlexEnd: {
    justifyContent: 'flex-end',
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyContentSpaceAround: {
    justifyContent: 'space-around',
  },
  justifyContentSpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  textCenter: {
    textAlign: 'center',
  },
  containerCenterItems: {
    alignItems: 'center',
  },
});
