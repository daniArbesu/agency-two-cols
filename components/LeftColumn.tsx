import styled from 'styled-components';
import { Column } from '../styles/sharedstyles';
import LanguageSelector from './LanguageSelector';
import BrandingSwitcher from './BrandingSwitcher';
import Link from 'next/link';
import Footer from './Footer';
import Logo from './UI/Logo';

export const LeftColumnWrapper = styled(Column)`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100svh;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: relative;
    height: auto;
    gap: 2rem;

    footer {
      display: none;
    }
  }
`;

const ColumnHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .language-selector {
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: block;
    }
  }

  .branding-switcher {
    display: none;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: block;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: space-between;
  }
`;

const ColumnMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
  }

  h2 {
    font-size: 84px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    letter-spacing: -0.03em;
    line-height: 1;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 12vw;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    letter-spacing: -0.01em;

    @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
      font-size: 15px;
    }
  }
`;

interface Props {
  title: string;
  subtitle: string;
}

const LeftColumn = ({ title, subtitle }: Props) => {
  return (
    <LeftColumnWrapper>
      <ColumnHeader>
        <Logo />
        <LanguageSelector />
        <BrandingSwitcher />
      </ColumnHeader>
      <ColumnMain>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </ColumnMain>
      <Footer />
    </LeftColumnWrapper>
  );
};

export default LeftColumn;
