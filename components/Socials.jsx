import { BiLogoFacebook, BiLogoInstagramAlt, BiLogoLinkedin, BiLogoGithub } from "react-icons/bi";

const socials = [
    {
        icon: <BiLogoFacebook />,
        link: "https://www.facebook.com/yourprofile",
    },
    {
        icon: <BiLogoInstagramAlt />,
        link: "https://www.instagram.com/yourprofile",
    },
    {
        icon: <BiLogoLinkedin />,
        link: "https://www.linkedin.com/in/rafiuayomide",
    },
    {
        icon: <BiLogoGithub />,
        link: "https://www.github.com/babyprogrammer1",
    }
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
          <div className={iconStyles}>
            {social.icon}
          </div>
        </a>
      ))}
    </div>
  )
}

export default Socials