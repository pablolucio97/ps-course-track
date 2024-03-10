import { useCallback, useEffect, useState } from 'react';
import { AppState } from 'react-native';

import DeviceInfo from 'react-native-device-info';

const useFontScale = () => {
  const [fontScale, setFontScale] = useState(1);

  const getDeviceFontScale = useCallback(async () => {
    const userFontScale = await DeviceInfo.getFontScale();
    setFontScale(userFontScale);
  }, []);

  useEffect(() => {
    getDeviceFontScale();

    const handleAppStateChange = (nextAppState: string) => {
      if (nextAppState === 'active') {
        getDeviceFontScale();
      }
    };

    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange
    );

    return () => {
      subscription.remove();
    };
  }, [getDeviceFontScale]);

  return fontScale;
};

export default useFontScale;
