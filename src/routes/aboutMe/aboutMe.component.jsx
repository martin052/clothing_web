import './aboutMe.styles.scss';
import MelissaIllusionLogo from '../../assets/asd.jpg';

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="text-content">
        <h1>About me</h1>
        <p className="myThings">Hi all, my name is Gabi and making bracelets 
        from healing stones. All my products are quality "Grade A" 
        to be able to deliver clients the best 
        quality of products. asdffdsnhjsfsdbfhjsbdfhjbsdfhsjd fbsdjhfbsbfdsjf bsjhfbjsdhbfjbs</p>
      </div>
      <div className='myImageAbout'>
        <img src={MelissaIllusionLogo} alt='Meliss_Illusion_Logo' width="600" height="450" />
      </div>
    </div>
  );
}

export default AboutMe;
