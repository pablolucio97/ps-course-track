import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { light } from '@themes/light';

export const Styles = StyleSheet.create({
  checkbox: {
    width: RFValue(24),
    height: RFValue(24),
    borderWidth: RFValue(1),
    borderColor: light.theme.colors.absolute_gray,
    backgroundColor: light.theme.colors.inputs,
    borderRadius: RFValue(8),
  },
});
