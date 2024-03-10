import { AppVersion } from '@components/Miscellaneous/AppVersion';
import { useNavigation } from '@react-navigation/native';
import { TAppRoutesStack } from '@routes/app.routes';
import { Container, ScrollContainer } from './styles';

export function Profile() {
  const navigation = useNavigation<TAppRoutesStack>();

  return (
    <Container>
      <ScrollContainer>
        <AppVersion version="1.4.3" />
      </ScrollContainer>
    </Container>
  );
}
