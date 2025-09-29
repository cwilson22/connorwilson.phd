import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { PageHeader } from '../../styles';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import styled from 'styled-components';

// Styled components for the masonry layout
const MasonryContainer = styled.div`
  margin: 2rem 0;
`;

const ProjectCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 -2px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  background: ${props => props.theme.background || 'white'};
  margin: 8px;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15), 0 -4px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectHeader = styled.div`
  padding: 1rem 1rem 0.5rem;
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.3;
  color: ${props => props.theme.text || '#333'};
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ProjectFooter = styled.div`
  padding: 0.5rem 1rem 1rem;
`;

const ProjectSummary = styled.p`
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  line-height: 1.4;
  color: ${props => props.theme.text || '#666'};
`;

const TechPillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechPill = styled.span`
  background: ${props => props.bgColor || 'rgba(0, 0, 0, 0.1)'};
  border: 1px solid ${props => props.borderColor || 'rgba(0, 0, 0, 0.2)'};
  border-radius: 20px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: ${props => props.textColor || '#333'};
  white-space: nowrap;
`;

const SectionTitle = styled.h2`
  margin: 3rem 0 1.5rem 0;
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  
  &:first-child {
    margin-top: 0;
  }
`;

// Color mapping based on tag type from portfolio.json
const getTagColors = (tagType) => {
  switch (tagType) {
    case 'code':
      return {
        bgColor: '#e3f2fd',
        textColor: '#1565c0',
        borderColor: '#bbdefb'
      };
    case 'concept':
      return {
        bgColor: '#e8f5e8',
        textColor: '#2e7d32',
        borderColor: '#c8e6c9'
      };
    default:
      return {
        bgColor: 'rgba(255, 255, 255, 0.2)',
        textColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.3)'
      };
  }
};

// Modal components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: opacity 1s ease, visibility 1s ease;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  background: ${props => props.theme.background || 'white'};
  border-radius: 16px;
  max-width: 90vw;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  transform: ${props => props.isOpen ? 'scale(1)' : 'scale(0.9)'};
  transition: transform 1s ease;
  position: relative;
`;

const ModalHeader = styled.div`
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid ${props => props.theme.border || '#e0e0e0'};
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${props => props.theme.text || '#333'};
  line-height: 1.3;
`;

const ModalBody = styled.div`
  padding: 1rem 2rem 2rem 2rem;
`;

const ModalSummary = styled.p`
  margin: 0 0 1.5rem 0;
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme.text || '#666'};
`;

const ModalTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ModalTagsAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 801px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const ModalTechPill = styled.span`
  background: ${props => props.bgColor || props.theme.primary || '#007bff'};
  color: ${props => props.textColor || 'white'};
  border-radius: 20px;
  padding: 0.4rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
`;

const ModalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white !important;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  white-space: nowrap;
  min-width: fit-content;
  
  &:hover {
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    text-decoration: none;
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(102, 126, 234, 0.3);
  }
`;

const ModalImage = styled.img`
  width: calc(100% - 40px);
  height: auto;
  max-height: 400px;
  display: block;
  margin: 20px 20px 20px 20px;
  border: 2px solid ${props => props.theme.border || '#e0e0e0'};
  border-radius: 8px;
  object-fit: contain;
`;

const ModalImageSide = styled.img`
  width: calc(100% - 40px);
  height: auto;
  max-height: 400px;
  margin: 20px 20px 20px 20px;
  display: block;
  border: 2px solid ${props => props.theme.border || '#e0e0e0'};
  border-radius: 8px;
  flex-shrink: 0;
  object-fit: contain;
  
  @media (min-width: 769px) {
    flex: 0 0 55%; /* 55% of the container */
    width: auto;
    max-width: none;
    margin-right: 0; /* Remove right margin to prevent overflow */
  }
  
  @media (min-width: 769px) and (max-width: 1000px) {
    flex: none;
    width: calc(100% - 40px);
    margin: 20px;
  }
`;

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0; /* Prevents flex items from overflowing */
  gap: 1rem;
  
  @media (min-width: 769px) {
    flex-direction: row;
  }
  
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 0;
  }


`;

const ModalTextContent = styled.div`
  flex: 1;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  min-width: 0; /* Prevents text overflow */
  
  @media (min-width: 769px) {
    flex: 1; /* Take remaining space */
    padding-left: 1rem; /* Reduce left padding to save space */
    padding-right: 1rem; /* Reduce right padding to save space */
    padding-top: 2rem;
  }
  
  @media (min-width: 769px) and (max-width: 1000px) {
    flex: none;
    padding-top: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  
  &::before {
    content: '×';
    transform: translateY(-2px);
  }
  
  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const ProjectItem = ({ project, type, onProjectClick }) => {
  const tags = project.tags || [];
  
  return (
    <ProjectCard onClick={() => onProjectClick(project)}>
      <ProjectHeader>
        <ProjectTitle>{project.title}</ProjectTitle>
      </ProjectHeader>
      <ProjectImage 
        src={`${process.env.PUBLIC_URL}/${project.image}`} 
        alt={project.title}
        loading="lazy"
      />
      <ProjectFooter>
        {/* <ProjectSummary>{project.summary}</ProjectSummary> */}
        <TechPillsContainer>
          {tags.map((tech, index) => {
            const colors = getTagColors(tech.type);
            return (
              <TechPill 
                key={index}
                bgColor={colors.bgColor}
                textColor={colors.textColor}
                borderColor={colors.borderColor}
              >
                {tech.name}
              </TechPill>
            );
          })}
        </TechPillsContainer>
      </ProjectFooter>
    </ProjectCard>
  );
};

const ProjectModal = ({ project, isOpen, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  const isImageSide = project.imageLayout === 'side';

  return (
    <ModalOverlay isOpen={isOpen} onClick={handleOverlayClick}>
      <ModalContent isOpen={isOpen}>
        <CloseButton onClick={onClose}></CloseButton>
        <ModalHeader>
          <ModalTitle>{project.title}</ModalTitle>
        </ModalHeader>
        
        {isImageSide ? (
          <ModalContentWrapper>
            <ModalImageSide 
              src={`${process.env.PUBLIC_URL}/${project.imageBig || project.image}`} 
              alt={project.title}
            />
            <ModalTextContent>
              <ModalSummary>{project.summary}</ModalSummary>
              <ModalTagsAndButtonWrapper>
                {project.tags && project.tags.length > 0 && (
                  <ModalTagsContainer>
                    {project.tags.map((tech, index) => {
                      const colors = getTagColors(tech.type);
                      return (
                        <ModalTechPill 
                          key={index}
                          bgColor={colors.bgColor}
                          textColor={colors.textColor}
                        >
                          {tech.name}
                        </ModalTechPill>
                      );
                    })}
                  </ModalTagsContainer>
                )}
                {((project.link && project.link.trim()) || (project.url && project.url.trim())) && (
                  <ModalLink 
                    href={project.link || project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View →
                  </ModalLink>
                )}
              </ModalTagsAndButtonWrapper>
            </ModalTextContent>
          </ModalContentWrapper>
        ) : (
          <>
            <ModalImage 
              src={`${process.env.PUBLIC_URL}/${project.imageBig || project.image}`} 
              alt={project.title}
            />
            <ModalBody>
              <ModalSummary>{project.summary}</ModalSummary>
              <ModalTagsAndButtonWrapper>
                {project.tags && project.tags.length > 0 && (
                  <ModalTagsContainer>
                    {project.tags.map((tech, index) => {
                      const colors = getTagColors(tech.type);
                      return (
                        <ModalTechPill 
                          key={index}
                          bgColor={colors.bgColor}
                          textColor={colors.textColor}
                        >
                          {tech.name}
                        </ModalTechPill>
                      );
                    })}
                  </ModalTagsContainer>
                )}
                {((project.link && project.link.trim()) || (project.url && project.url.trim())) && (
                  <ModalLink 
                    href={project.link || project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View →
                  </ModalLink>
                )}
              </ModalTagsAndButtonWrapper>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </ModalOverlay>
  );
};

const Projects = ({ user }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Combine selected projects and papers for a comprehensive view
  const allProjects = [
    ...(user.projects || [])
  ].filter(project => project.image);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <Layout user={user}>
      <MasonryContainer>
        <ResponsiveMasonry
          columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200: 4}}
        >
          <Masonry gutter="0">
            {allProjects.map((project, index) => (
              <ProjectItem 
                key={index} 
                project={project} 
                type={user.selectedprojects?.includes(project) ? 'project' : 'paper'}
                onProjectClick={handleProjectClick}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </MasonryContainer>
      
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </Layout>
  );
};

export default Projects;
