import { Dimensions } from 'react-native';

const PERCENTAGE_REASON = 100;

const getScreenWidth = () => {
  return Dimensions.get('screen').width;
};

const getScreenHeight = () => {
  return Dimensions.get('screen').height;
};

const getScreenHeightPercent = (percent: number) => {
  return (Dimensions.get('screen').height * percent) / PERCENTAGE_REASON;
};

const getScreenWidthPercent = (percent: number) => {
  return (Dimensions.get('screen').width * percent) / PERCENTAGE_REASON;
};

export {
  getScreenWidth,
  getScreenHeight,
  getScreenWidthPercent,
  getScreenHeightPercent,
};
