import React from 'react';
import SkillList from '../../components/Skills/SkillList/SkillList.jsx';
import TitleBlock from '../../components/UI/TitleBlock/TitleBlock.jsx';
import style from './Skills.scss';

const Skills = props => {
  const FrontEndSkills = [`JavaScript (ES5 and ES6)`, `HTML5`, `CSS3`, `CSS Modules`, `React`, `Redux`, `React Native`];
  const BackEndSkills = [`Node.js`, `Express`, `SQL`, `PostgreSQL`, `MongoDB`, `Mongoose`, `Sequelize`, `Cassandra`, `Firebase`, `RESTful API Development`];
  const DevTools = [`Git`, `npm`, `Webpack`, `Babel`, `Agile Methodology`];
  const Testing = [`Mocha`, `Chai`, `AWS EC2`, `AWS S3`, `Loader.io`, `New Relic`];
  
  return (
    <div>
      <TitleBlock>WHAT DO I KNOW!?!?</TitleBlock>
      <div className={style.SkillsContainer}>
        <SkillList subject='FRONT-END' list={FrontEndSkills}/>
        <SkillList subject='BACK-END' list={BackEndSkills}/>
        <SkillList subject='DEV TOOLS' list={DevTools}/>
        <SkillList subject='TESTING' list={Testing}/> 
      </div>
    </div>
  )
};

export default Skills;