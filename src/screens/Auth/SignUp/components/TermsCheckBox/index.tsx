import { Checkbox, CheckboxProps } from '@components/Miscellaneous/Checkbox';
import { useNavigation } from '@react-navigation/native';
import { TAuthRoutesStack } from '@routes/auth.routes';
import { light } from '@themes/light';
import { CSSProperties } from 'styled-components';
import {
  Button,
  ColumnContainer,
  Container,
  LinkText,
  RowContainer,
  Text,
} from './styles';

interface TermsCheckBoxProps extends CheckboxProps {
  style?: CSSProperties;
}

export function TermsCheckBox({ checked, onCheck, style }: TermsCheckBoxProps) {
  const navigation = useNavigation<TAuthRoutesStack>();
  return (
    <Container style={style as never}>
      <Checkbox
        checked={checked}
        onCheck={onCheck}
        checkboxStyle={{ marginRight: light.theme.spacings[2] }}
      />
      <ColumnContainer>
        <RowContainer>
          <Text>Concordo com os</Text>
          <Button onPress={() => navigation.navigate('UseTerms')}>
            <LinkText> Termos de Uso </LinkText>
          </Button>
          <Text>e</Text>
        </RowContainer>
        <Button onPress={() => navigation.navigate('PolicyPrivacy')}>
          <LinkText>Política de Privacidade</LinkText>
        </Button>
      </ColumnContainer>
    </Container>
  );
}
