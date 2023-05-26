import Link from 'next/link';
import styled from 'styled-components';

const LogoWrapper = styled.h1`
  font-size: 24px;
  line-height: 30px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: -0.01em;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <Link href="/">Agency</Link>
    </LogoWrapper>
  );
};

export default Logo;
