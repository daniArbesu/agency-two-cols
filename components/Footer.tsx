import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
  line-height: 1.6;
  letter-spacing: -0.01em;

  span {
    opacity: 0.5;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>© Agency, All rights reserved</p>
      <span>‍No cookie Policy. No privacy policy.</span>
    </FooterWrapper>
  );
};

export default Footer;
