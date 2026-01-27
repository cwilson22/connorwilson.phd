import styled from 'styled-components'
import {Nav} from 'react-bootstrap'

export const StyledNavMain = styled(Nav.Link)`
    padding: 8px 16px;
    margin: 4px;
    font-weight: bold;
    color: ${props => props.theme?.colors?.textSecondary || 'inherit'} !important;
    transition: all 0.3s ease;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: none;

    &:hover {
        color: ${props => props.$isActive ? 'inherit' : '#0066cc'} !important;
        background: rgba(255, 255, 255, 0.15);
        
        transform: translateY(-1px);
    }

    &.active {
        color: #000000 !important;
        font-weight: bold;
        background: rgba(255, 255, 255, 0.2);
    }
    
    &:active {
        color: ${props => props.theme?.colors?.text || 'inherit'} !important;
        transform: translateY(0);
    }
`;

export const StyledBrand = styled.div`
    font-size: 2rem;
    padding: 8px 16px;
    margin: 4px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: none;
    transition: all 0.3s ease;
    cursor: pointer;
    display: inline-block;

    
`;

export const StyledNavSub = styled(Nav.Link)`
    color: ${props => props.theme?.colors?.textSecondary || 'rgba(0,0,0,1)'};
    padding-top: 0px;
    padding-bottom: 0px;
    transition: color 0.3s ease;
    
    &:hover {
        color: ${props => props.theme?.colors?.linkHover || 'inherit'};
    }
`;

export const StyledAboutSection = styled.div`
    padding: 24px;
    margin: 20px 0;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: none;
    transition: all 0.3s ease;

    &:hover {
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-1px);
    }
`;

export const StyledSocialMedia = styled.div`
    padding: 4px;
    margin: 4px 0 0 0;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: none;
`;

export const StyledFooter = styled.div`
    background: white;
    padding: 20px 0;
    margin-top: 40px;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    margin-bottom: 0;
    position: relative;
    transition: box-shadow 0.3s ease;

    ${props => props.showHoverShadow && `
        &:hover {
            box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.1);
        }
    `}
`;

export const StyledFooterContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
`;
