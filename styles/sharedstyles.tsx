import styled from 'styled-components';
import { theme } from './theme';

export const Container = styled.div`
  max-width: 1136px;
  padding: 0 32px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 20px;
  }
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  grid-column-gap: 54px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Column = styled.section`
  padding: 32px 0;
`;
