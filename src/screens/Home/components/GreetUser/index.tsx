import React from 'react';
import { Container, GreetText, UserNameText } from './styles';

interface GreetUserProps {
  userName: string;
}

export function GreetUser({ userName }: GreetUserProps) {
  return (
    <Container>
      <GreetText>Olá,</GreetText>
      <UserNameText>{userName}</UserNameText>
    </Container>
  );
}
