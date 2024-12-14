import React from 'react';
import TicTacToe from './TicTacToe';
import Image from "next/image";
import './About.css';

const About: React.FC = () => {
  return (
    <div>
      <header>
        <br></br>
        
          <Image 
            src="/logo.png" 
            alt="logo" 
            className= "logo-img" 
            width={500}  
            height={500} 
            style={{ alignSelf: 'center' }}
          />
        <br />
        <br />
        <h1><center><strong>About Santa's Karma Kids</strong></center></h1><br></br>
      </header>

      <div style={styles.content}>
        <h2>Santa's Karma Kids!</h2>

        <p>
          At <strong>Santa's Karma Kids</strong>, we believe that the true magic of the holiday season isn’t just in the gifts we give, but in the kindness we share.
        </p>
        <br></br>
        <p>
          Founded on the values of love, compassion, and good deeds, Santa's Karma Kids blends the magic of Christmas with the powerful idea of karma. We teach kids that every small act of kindness — whether it’s helping a friend, giving a smile, or spreading cheer — can make the world a better place.
        </p>
        <br></br>
        <p>
          Our activities, crafts, and programs encourage children to embrace the spirit of giving, foster empathy, and celebrate the joy of making a difference. From fun holiday projects to year-round acts of kindness, we help kids understand that they have the power to create positive change in their communities and beyond.
        </p>
        <br></br>
        <p>
          At <strong>Santa's Karma Kids</strong>, we know that the best gift we can give children is the ability to see the good in the world and be a part of spreading it. Through kindness, we can all make this world a little brighter, one deed at a time.
        </p>

      </div>
        <br></br>
        <center><p>Tic Tac Toe</p></center>
      
      <TicTacToe />
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#ff4040',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
  },
  content: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: 'white',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default About;
