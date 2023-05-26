import styled from 'styled-components';
import RightArrow from './RightArrow';
import Image from 'next/image';

const CardArrowWrapper = styled.div`
  position: absolute;
  right: 24px;
  bottom: 32px;
  width: 50px;
  z-index: 5;
  opacity: 0.2;
  color: white;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    opacity: 1;
  }
`;

const CardInfo = styled.div`
  position: absolute;
  left: 24px;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: white;
  z-index: 5;

  h3 {
    font-size: 20px;
    letter-spacing: 0.1px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  p {
    opacity: 0.5;
  }
`;

const CardWrapper = styled.article`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 20px;
  object-fit: contain;
  height: 100%;
  overflow: hidden;

  a {
    position: relative;
    display: block;
    padding-top: 50%;
    padding-bottom: 50%;

    &:hover {
      .cardInfo__description {
        opacity: 1;
        transition: opacity 500ms linear;
      }

      img {
        opacity: 0.6;
        transition: opacity 500ms linear;
      }
      ${CardArrowWrapper} {
        opacity: 1;
        transition: opacity 500ms linear;
      }
    }
  }
`;

const CardImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
  }
`;

interface Props {
  link: string;
  title: string;
  description: string;
  img: string;
}

const WorkCard = ({ link, title, description, img }: Props) => {
  return (
    <CardWrapper className="card-article">
      <a href={link}>
        <CardInfo>
          <h3>{title}</h3>
          <p className="cardInfo__description">{description}</p>
        </CardInfo>
        <CardImageWrapper>
          <Image src={img} alt={title} fill />
        </CardImageWrapper>
        <CardArrowWrapper>
          <RightArrow />
        </CardArrowWrapper>
      </a>
    </CardWrapper>
  );
};

export default WorkCard;
