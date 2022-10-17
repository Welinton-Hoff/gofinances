import React, { useState } from "react";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";
import { ActivityIndicator, Alert, Platform } from "react-native";

import LogoSvg from "../../assets/logo.svg";
import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";

import { useAuth } from "../../hooks/auth";
import { SignInSocialButton } from "../../components/SignInSocialButton";

import {
  Title,
  Header,
  Footer,
  Container,
  SignInTitle,
  TitleWrapper,
  FooterWrapper,
} from "./styles";

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const theme = useTheme();
  const { signInWithGoogle, signInWithApple } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      return await signInWithGoogle();
    } catch (error) {
      Alert.alert("Não foi possivel conectar a conta Google");
      setIsLoading(false);
    }
  }

  async function handleSignInWithApple() {
    try {
      setIsLoading(true);
      return await signInWithApple();
    } catch (error) {
      Alert.alert("Não foi possivel conectar a conta Apple");
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />

          <Title>
            Controle suas{"\n"}finanças de forma{"\n"}muito simples
          </Title>

          <SignInTitle>
            Faça seu login com{"\n"}umas das contas abaixo
          </SignInTitle>
        </TitleWrapper>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            svg={GoogleSvg}
            title="Entrar com Google"
            onPress={handleSignInWithGoogle}
          />

          {Platform.OS === "ios" && (
            <SignInSocialButton
              svg={AppleSvg}
              title="Entrar com Apple"
              onPress={handleSignInWithApple}
            />
          )}
        </FooterWrapper>

        {isLoading && (
          <ActivityIndicator
            size="large"
            style={{ marginTop: 18 }}
            color={theme.colors.SHAPE}
          />
        )}
      </Footer>
    </Container>
  );
}
