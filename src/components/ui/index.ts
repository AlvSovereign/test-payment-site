import styled from 'styled-components';

const FieldContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 0.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-bottom: 4px;
  padding: 2rem 1.5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fonts};
`;

export { FieldContainer, Form };
