import { Container, Label } from './styles';

interface AppVersionProps {
  version: string;
}

export function AppVersion({ version }: AppVersionProps) {
  return (
    <Container>
      <Label>V{version}</Label>
    </Container>
  );
}
