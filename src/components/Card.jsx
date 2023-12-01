import styled from 'styled-components'
import Image from './Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  & h2 {
    color: #b3b3b3;
    font-size: 2.5rem;
  }
`
const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 320px;
  height: 500px;
  border-radius: 44px;
  border: 1px solid #000;
  background-color: #d9d9d9;
  box-shadow: 2px 4px 0px 4px rgba(0, 0, 0, 0.7);
`
const CardItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #000;
  margin-top: 60px;
  width: 90%;
`
const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;

  & p:nth-child(1) {
    text-align: start;
    font-size: 1rem;
    font-weight: 500;
  }

  & p:nth-child(2) {
    font-size: 0.8rem;
  }
`

const Card = ({ type, dataProject, data }) => {
  return (
    <>
      {type === 'sobre' &&
        data.map(item => (
          <CardWrapper>
            <h2>{item.title}</h2>
            <CardStyle>
              {item.cursos &&
                item.cursos.map(curso => (
                  <CardItem>
                    <CardText>
                      <p>{curso.nome}</p>
                      <p>{curso.periodo}</p>
                    </CardText>
                    <Image
                      src={curso.icon}
                      alt="icone-curso"
                      width={82}
                      height={57}
                    />
                  </CardItem>
                ))}
              {item.habilidades &&
                item.habilidades.map(habilidade => (
                  <CardItem>
                    <FontAwesomeIcon
                      style={{ fontSize: 30, marginRight: 10 }}
                      icon={habilidade.icon}
                    />
                    <CardText>
                      <p>{habilidade.nome}</p>
                    </CardText>
                  </CardItem>
                ))}
              {item.empresas &&
                item.empresas.map(empresa => (
                  <CardItem>
                    <CardText>
                      <p>{empresa.nome}</p>
                      <p>{empresa.periodo}</p>
                    </CardText>
                  </CardItem>
                ))}
            </CardStyle>
          </CardWrapper>
        ))}
      {type === 'projetos' &&
        dataProject.map(item => (
          <CardStyle>
            <CardText>
              <p>{item.title}</p>
              <p>{item.description}</p>
              {item.techs.map(tech => (
                <span>{tech}</span>
              ))}
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                Github Project
              </a>
              <a href={item.homepage} target="_blank" rel="noopener noreferrer">
                Vejo o Projeto aqui!
              </a>
            </CardText>
          </CardStyle>
        ))}
    </>
  )
}

export default Card
