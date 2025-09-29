import React from 'react';
import {FaEnvelope, FaGraduationCap, FaLinkedin} from "react-icons/fa"
import {AiFillGithub} from 'react-icons/ai'
import { StyledSocialMedia } from '../Header/styles';

export const Media = ({media}) => {
  return (
      <div className="col-6 col-md-6">
        <StyledSocialMedia>
          <ul className="list-unstyled text-small mb-0">
            <li>
              <div>
                <FaEnvelope style={{ color: '#6c757d' }} />
                &nbsp;
                <a style={{ color: '#6c757d' }} href="mailto:wilson.conn@northeastern.edu">Email</a>
              </div>
            </li>
            {media.profiles.map((prof, idx) => (
              <li key={idx}>
                <span>
                    {(function(){
                      switch(prof.iconName){
                        case 'github':
                          return <AiFillGithub style={{ color: '#6c757d' }} />
                        case 'linkedin':
                          return <FaLinkedin style={{ color: '#6c757d' }} />
                        case 'scholar':
                          return <FaGraduationCap style={{ color: '#6c757d' }} />
                      }
                    })()}
                    &nbsp;
                </span>
                <a key={idx} style={{ color: '#6c757d' }}
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