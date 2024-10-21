import styled from 'styled-components'
import {Image} from 'react-bootstrap'

export const StyledImage = styled(Image)`
    transition: transform .2s;
    &:hover {
        position: relative;
        transform: scale(2.5);
        z-index: 1;
    }
`;
