import styled from 'styled-components';

export const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme?.colors?.text || 'inherit'};
`;

export const Paragraph = styled.p`
  white-space: pre-wrap;
  color: ${props => props.theme?.colors?.textSecondary || 'inherit'};
`;

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  font-weight: bold;
  background-color: ${props => props.theme?.colors?.surface || '#f8f9fa'};
  color: ${props => props.theme?.colors?.text || 'inherit'};
  border: 1px solid ${props => props.theme?.colors?.border || '#dee2e6'};
`;

export const PageHeader = styled.h2`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme?.colors?.text || 'inherit'};
`;
