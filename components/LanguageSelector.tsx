import styled from 'styled-components';

const LanguageSelectorWrapper = styled.div`
  font-size: 13px;

  a {
    padding: 6px 12px;
    opacity: 0.5;

    &.active {
      opacity: 1;
    }
  }
`;

const LanguageSelector = () => {
  return (
    <LanguageSelectorWrapper className="language-selector">
      <a href="/" className="active">
        EN
      </a>
      | <a href="/">ES</a>
    </LanguageSelectorWrapper>
  );
};

export default LanguageSelector;
