import React from 'react';
import './VideoShowcase.css';
import video from '../assets/videos/female-coder-video.mp4';
// import skill1 from '../assets/images/skill1.png';
// import skill2 from '../assets/images/skill2.png';
// import skill3 from '../assets/images/skill3.png';

const VideoShowcase = () => {
  return (
    <div className="video-showcase">
      <video className="background-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="skills">
        <img src={skill1} alt="Skill 1" className="skill-image" />
        <img src={skill2} alt="Skill 2" className="skill-image" />
        <img src={skill3} alt="Skill 3" className="skill-image" /> */}
        {/* Add more skills as needed */}
      {/* </div> */}
    </div>
  );
};

export default VideoShowcase;
