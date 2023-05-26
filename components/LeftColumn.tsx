import styled from 'styled-components';
import { Column } from '../styles/sharedstyles';

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
  }
`;

const ColumnHeader = styled.header`
  display: flex;
  align-items: center;

  h1 {
    font-size: 24px;
    line-height: 30px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    letter-spacing: -0.01em;
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

const ColumnFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: -0.01em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }

  span {
    opacity: 0.5;
  }
`;

const LeftColumn = () => {
  return (
    <LeftColumnWrapper>
      <ColumnHeader>
        <h1>
          <a href="/">Agency</a>
        </h1>
      </ColumnHeader>
      <ColumnMain>
        <h2>We build outstanding brands.</h2>
        <p>
          We craft outstanding direct-to-consumer brands with the common
          ambition to offer true craftsmanship, timeless products that are
          carbon neutral – and this without ever making any concessions.
        </p>
      </ColumnMain>
      <ColumnFooter>
        <p>© Agency, All rights reserved</p>
        <span>‍No cookie Policy. No privacy policy.</span>
      </ColumnFooter>
    </LeftColumnWrapper>
  );
};

export default LeftColumn;
