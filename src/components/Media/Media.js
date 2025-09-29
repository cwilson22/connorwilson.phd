import React from 'react';
import {FaEnvelope, FaGraduationCap, FaLinkedin} from "react-icons/fa"
import {AiFillGithub} from 'react-icons/ai'
import { useTheme } from '../../contexts/ThemeContext';
import { StyledSocialMedia } from '../Header/styles';

export const Media = ({media}) => {
  const { colors } = useTheme();
  
  return (
      <div className="col-6 col-md-6">
        <StyledSocialMedia>
          <ul className="list-unstyled text-small mb-0">
            <li>
              <div>
                <FaEnvelope style={{ color: colors.textMuted }} />
                &nbsp;
                <a style={{ color: colors.textMuted }} href="mailto:wilson.conn@northeastern.edu">Email</a>
              </div>
            </li>
            {media.profiles.map((prof, idx) => (
              <li key={idx}>
                <span>
                    {(function(){
                      switch(prof.iconName){
                        case 'github':
                          return <AiFillGithub style={{ color: colors.textMuted }} />
                        case 'linkedin':
                          return <FaLinkedin style={{ color: colors.textMuted }} />
                        case 'scholar':
                          return <FaGraduationCap style={{ color: colors.textMuted }} />
                      }
                    })()}
                    &nbsp;
                </span>
                <a key={idx} style={{ color: colors.textMuted }}
                href={prof.url}>
                  {prof.network}
                </a>
              </li>
            ))} 
          </ul>
        </StyledSocialMedia>
      </div>
    )
}

export default Media