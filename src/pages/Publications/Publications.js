import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { SectionTitle} from '../../styles';
import { Row, Col} from 'react-bootstrap';
import {StyledImage, MenuContainer, MenuButton, ExpandedImageOverlay, ExpandedImageContainer, ExpandedImage, ExpandedTitle, ClickableTitle, ClickableImage, ImageCol} from './styles';

const BoldName = ({text = ''})=>{
    return (
        <div dangerouslySetInnerHTML={{
            __html: text.replace("Wilson, C", (match, i) => `<b>Wilson, C</b>`)
        }}>

        </div>
      )
}

const Papers = ({papers, onPaperClick}) => {
    return (
        <>
        {papers.map((pub, index) => (
            <Row key={pub.title} style={{ position: 'relative', marginBottom: '1rem' }}>
            <ImageCol xs={4} md={3}>
                <ClickableImage 
                    src={`${process.env.PUBLIC_URL}/${pub.image}`} 
                    thumbnail 
                    onClick={(e) => {
                        e.preventDefault();
                        onPaperClick(pub, e);
                    }}
                />
            </ImageCol>
            <Col xs={12} md={9}>
                <ClickableTitle 
                    style={{ color: "#000000", cursor: 'pointer' }}
                    onClick={(e) => {
                        e.preventDefault();
                        onPaperClick(pub, e);
                    }}
                >
                    {pub.title}
                </ClickableTitle>
                <p style={{ color: "#6c757d" }}>
                    <BoldName text={pub.authors}></BoldName>
                    {pub.venue}
                    {". "}
                    {pub.year}
                    {". "}
                    {pub.doi ? <><span>DOI:</span><a href={pub.fulldoi} style={{ color: "#0066cc" }}>{pub.doi}</a><span>.</span></> : null}
                    {pub.openaccess ? <><span>Open Access: </span><a href={pub.openaccess} style={{ color: "#0066cc" }}>{pub.openaccess}</a><span>.</span></> : null}
                </p>
                {/* <p style={{ color: "#6c757d" }}>
                    {pub.url ? <a href={pub.url} style={{ color: "#0066cc" }}>Preprint</a> : null}
                    {pub.supplement ? <span> | </span> : null}
                    {pub.supplement ? <a href={pub.supplement} style={{ color: "#0066cc" }}>Supplement</a> : null}
                    {pub.video ? <span> | </span> : null}
                    {pub.video ? <a href={pub.video} style={{ color: "#0066cc" }}>Video</a> : null}
                    {pub.previewvideo ? <span> | </span> : null}
                    {pub.previewvideo ? <a href={pub.previewvideo} style={{ color: "#0066cc" }}>Preview Video</a> : null}
                    {pub.code ? <span> | </span> : null}
                    {pub.code ? <a href={pub.code} style={{ color: "#0066cc" }}>Code</a> : null}
                    {pub.website ? <span> | </span> : null}
                    {pub.website ? <a href={pub.website} style={{ color: "#0066cc" }}>Website</a> : null}
                </p> */}
            </Col>
            </Row>
          ))}
        </>
    )
}

const Publications = ({ user }) => {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [expandedImageSrc, setExpandedImageSrc] = useState('');

  const handlePaperClick = (paper, event) => {
    setSelectedPaper(paper);
    const imageToUse = paper.bigimage || paper.image;
    setExpandedImageSrc(`${process.env.PUBLIC_URL}/${imageToUse}`);
    setIsImageExpanded(true);
  };

  const handleCloseMenu = () => {
    setSelectedPaper(null);
    setIsImageExpanded(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseMenu();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleCloseMenu();
    }
  };

  useEffect(() => {
    if (isImageExpanded) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isImageExpanded]);

  const getMenuItems = (paper) => {
    const items = [];
    if (paper.url) items.push({ label: '📄 Preprint/PDF', url: paper.url });
    if (paper.website) items.push({ label: '🌐 Website', url: paper.website });
    if (paper.supplement) items.push({ label: '📎 Supplement', url: paper.supplement });
    if (paper.video) items.push({ label: '▶️ Video', url: paper.video });
    if (paper.previewvideo) items.push({ label: '🎬 Preview Video', url: paper.previewvideo });
    if (paper.code) items.push({ label: '💻 Code', url: paper.code });
    if (paper.fulldoi) items.push({ label: '🔗 DOI', url: paper.fulldoi });
    return items;
  };

  return (
    <Layout user={user}>
      <div>
        <SectionTitle></SectionTitle>
        <Papers papers={user.publications} onPaperClick={handlePaperClick} />
      </div>

      {selectedPaper && isImageExpanded && (
        <ExpandedImageOverlay onClick={handleOverlayClick}>
          <ExpandedImageContainer onClick={expandedImageSrc.toLowerCase().endsWith('.pdf') ? undefined : handleCloseMenu}>
            {expandedImageSrc.toLowerCase().endsWith('.pdf') ? (
              <iframe
                src={expandedImageSrc}
                style={{
                  width: '100%',
                  maxWidth: '90vw',
                  height: '70vh',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                  marginBottom: '1.5rem',
                }}
                title={selectedPaper.title}
              />
            ) : (
              <ExpandedImage 
                src={expandedImageSrc} 
                alt={selectedPaper.title}
                onClick={handleCloseMenu}
              />
            )}
            <ExpandedTitle onClick={expandedImageSrc.toLowerCase().endsWith('.pdf') ? undefined : handleCloseMenu}>{selectedPaper.title}</ExpandedTitle>
            <MenuContainer>
              {getMenuItems(selectedPaper).map((item, index) => (
                <MenuButton
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    animationDelay: `${index * 0.05}s`,
                  }}
                >
                  {item.label}
                </MenuButton>
              ))}
            </MenuContainer>
          </ExpandedImageContainer>
        </ExpandedImageOverlay>
      )}
    </Layout>
  );
};

export default Publications;
