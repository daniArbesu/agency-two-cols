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

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 54px;
  gap: 32px;
  width: 100%;
  overflow: hidden;
  border: 1px solid #d6d6d6;
  border-radius: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    padding: 40px 16px;
    border-radius: 32px;
  }

  h2 {
    font-size: 16px;
    line-height: 1.2;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;
