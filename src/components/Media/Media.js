import React from 'react';
import {FaEnvelope, FaGraduationCap, FaLinkedin} from "react-icons/fa"
import {AiFillGithub} from 'react-icons/ai'
export const Media = ({media}) => {
  return (
      <div className="col-6 col-md">
      <ul className="list-unstyled text-small">
        <li>
          <div>
            <FaEnvelope/>
            &nbsp;
            <a className="text-muted" href="mailto:wilson.conn@northeastern.edu">Email</a>
          </div>
        </li>
        {media.profiles.map((prof, idx) => (
          <li key={idx}>
            <span>
                {(function(){
                  switch(prof.iconName){
                    case 'github':
                      return <AiFillGithub/>
                    case 'linkedin':
                      return <FaLinkedin />
                    case 'scholar':
                      return <FaGraduationCap />
                  }
                })()}
                &nbsp;
            </span>
            <a key={idx} className="text-muted"
            href={prof.url}>
              {prof.network}
            </a>
          </li>
        ))} 
      </ul>
    </div>
    )
}

export default Media