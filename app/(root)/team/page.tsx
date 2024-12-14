import React from 'react';
import './team.css'; 

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Kevin Lu',
    role: 'Page Developer',
    image: 'Kevin.webp',
    bio: 'Kevin is the Page Develop and has transformed the pages into providing useful information for anyone who wants to use the Santas Karma Website',
  },
  {
    name: 'Leo Shi',
    role: 'Game Developer',
    image: 'Leo.webp',
    bio: 'Leo created the games on our website along with creating pages in order to make the website work correctly .',
  },
  {
    name: 'Brandon Yu',
    role: 'Web Developer',
    image: 'Brand.webp',
    bio: 'Brandon is the Web Developer who created this website along with working on creating each page',
  },
  {
    name: 'Daniel Gao',
    role: 'Ai Development',
    image: 'Daniel.webp',
    bio: 'Daniel is the Ai Developer and is trying to spread Christmas Cheer by making sure people are approved by Santa. With his help you make you get presents this Christmas',
  },
];

const TeamPage: React.FC = () => {
  return (
    <div className="team-container">
      <h1 className="team-heading">Meet the Team</h1>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-member-image" />
            <h2 className="team-member-name">{member.name}</h2>
            <p className="team-member-role">{member.role}</p>
            <p className="team-member-bio">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;