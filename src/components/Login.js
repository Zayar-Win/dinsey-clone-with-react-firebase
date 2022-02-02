import React from "react";
import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src='/images/cta-logo-one.svg' />
          <SingUp>Get All There</SingUp>
          <Description>
            Get premier Access to raya and the
            last drangon for an additional fee
            with a Disney+ subscription.As of
            03/26/21,the price of disney+ and the
            disney budel will increse by $1.
          </Description>
          <CTALogoTwo src='/images/cta-logo-two.png' />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  min-height: 100vh;
  height: 100%;
  box-sizing: border-box;
  padding: 80px 40px;
`;

const BgImage = styled.div`
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  z-index: -1;
`;

const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 0;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

const CTALogoOne = styled.img`
  max-width: 600px;
  display: block;
  width: 100%;
  min-height: 1px;
  margin-bottom: 12px;
`;

const SingUp = styled.a`
  display: block;
  font-weight: bold;
  width: 100%;
  color: #f9f9f9;
  font-size: 18px;
  letter-spacing: 2px;
  padding: 16.5px 0;
  background: #0063e5;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;
const CTALogoTwo = styled.img`
  max-width: 600px;
  width: 100%;
  display: inline-block;
  margin-bottom: 20px;
`;

export default Login;
