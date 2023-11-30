import { InicioStyle } from './Inicio.style'
import Image from '../../Image'
import SocialMedia from '../../SocialMedia'
import {
  faInstagram,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

const Inicio = () => {
  const socialIcons = [
    { link: 'https://www.instagram.com/woliveira96/', icon: faInstagram },
    { link: 'https://www.linkedin.com/in/willysoliveira/', icon: faLinkedin },
    { link: 'https://github.com/Ollieveira', icon: faGithub }
  ]
  return (
    <InicioStyle id="#home">
      <Image
        src="src\assets\perfil.png"
        alt="Imagem-de-Perfil"
        width={221}
        height={222}
      />
      <div>
        <p>Olá, me chamo Willys Oliveira! 👋</p>
        <p>Desenvolvedor Web Front-End </p>
        <SocialMedia socialIcons={socialIcons}></SocialMedia>
      </div>
    </InicioStyle>
  )
}

export default Inicio
