import styled from 'styled-components'
import {Image, Col} from 'react-bootstrap'

export const StyledImage = styled(Image)`
    transition: transform .2s;
    border: 1px solid ${props => props.theme?.colors?.border || '#dee2e6'};
    
    &:hover {
        position: relative;
        transform: scale(2.5);
        z-index: 1;
        border-color: ${props => props.theme?.colors?.link || '#0066cc'};
    }
`;

export const ClickableImage = styled(Image)`
    transition: transform .2s, box-shadow .2s;
    border: 1px solid ${props => props.theme?.colors?.border || '#dee2e6'};
    cursor: pointer;
    
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        border-color: ${props => props.theme?.colors?.link || '#0066cc'};
    }
`;

export const ImageCol = styled(Col)`
    @media (max-width: 767.98px) {
        display: none;
    }
`;

export const ClickableTitle = styled.h4`
    transition: color .2s;
    cursor: pointer;
    
    &:hover {
        color: ${props => props.theme?.colors?.link || '#0066cc'} !important;
    }
`;

export const ExpandedImageOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(8px);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease;
    overflow-y: auto;
    padding: 2rem;
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const ExpandedImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90vw;
    width: 100%;
    animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    
    @keyframes scaleIn {
        from {
            transform: scale(0.9);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
`;

export const ExpandedImage = styled.img`
    max-width: 100%;
    max-height: 70vh;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    margin-bottom: 1.5rem;
    cursor: pointer;
    transition: opacity 0.2s ease;
    
    &:hover {
        opacity: 0.9;
    }
`;

export const ExpandedTitle = styled.h2`
    color: white;
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    margin: 0 0 1.5rem 0;
    line-height: 1.3;
    max-width: 100%;
    cursor: pointer;
    transition: opacity 0.2s ease;
    
    &:hover {
        opacity: 0.8;
    }
    
    @media (max-width: 768px) {
        font-size: 1.4rem;
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    width: 100%;
    max-width: 800px;
`;

export const MenuButton = styled.a`
    background: #0066cc;
    color: white !important;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    white-space: nowrap;
    box-shadow: 0 4px 15px rgba(0, 102, 204, 0.3);
    opacity: 0;
    animation: menuItemAppear 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
    
    &:hover {
        background: #0052a3;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 102, 204, 0.4);
        text-decoration: none;
        color: white !important;
    }
    
    &:active {
        transform: translateY(0);
    }
    
    @keyframes menuItemAppear {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
