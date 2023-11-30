import { InicioStyle } from './Inicio.style'
import Image from '../../Image'

const Inicio = () => {
  return (
    <InicioStyle>
      <Image
        src="src\assets\perfil.png"
        alt="Imagem-de-Perfil"
        width={221}
        height={222}
      />
      <div>
        <p>Olá, me chamo Willys Oliveira! 👋</p>
        <p>Desenvolvedor Web Front-End </p>
      </div>
    </InicioStyle>
  )
}

export default Inicio
