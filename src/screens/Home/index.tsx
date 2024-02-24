import { Title } from '@components/Typography/Title';
import { Container } from './styles';
import { StatusBar } from 'expo-status-bar';

export function Home() {
  return (
    <Container>
      <StatusBar style="dark" />
      <Title content="Home" />
    </Container>
  );
}
