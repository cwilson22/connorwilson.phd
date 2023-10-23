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
            <a className="text-muted"> wilson.conn[at]northeastern.edu</a>
          </div>
        </li>
        {media.profiles.map((prof, idx) => (
          <li key={idx}>
            <a key={idx} className="text-muted"
            href={prof.url}>
              <div>
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
                &nbsp;{prof.network}
              </div>
            </a>
          </li>
        ))} 
      </ul>
    </div>
    )
}

export default Media