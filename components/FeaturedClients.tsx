import { featuredClientsEvents } from '@/utils/FeaturedClientsEvents';
import Image from 'next/image';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 54px;
  gap: 32px;
  width: 100%;
  overflow: hidden;
  border: 1px solid #d6d6d6;
  border-radius: 20px;

  h2 {
    font-size: 16px;
    line-height: 1.2;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

const ClientsWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;

  li {
    position: relative;
    height: 20px;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      height: 30px;
    }
  }

  img {
    height: 100%;
    transition: 200ms;
  }
`;

const FeaturedClients = () => {
  return (
    <SectionWrapper>
      <h2>Some of my clients</h2>
      <ClientsWrapper>
        {featuredClientsEvents.map(({ id, name, logo }) => (
          <li key={id}>
            <Image src={logo} alt={`${name} Logo`} fill />
          </li>
        ))}
      </ClientsWrapper>
    </SectionWrapper>
  );
};

export default FeaturedClients;
