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
  border-radius: 44px;
  border: 1px solid #000;
  background-color: #d9d9d9;
  box-shadow: 2px 4px 0px 4px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;

  &.card-sobre {
    align-items: center;
    justify-content: flex-start;
    width: 320px;
    height: 500px;
  }

  &.card-projeto {
    justify-content: flex-end;
    gap: 0.5rem;
    padding: 60px 30px;
    width: 360px;
    height: 460px;
    margin-bottom: 20px;
  }
`
const CardItem = styled.div`
  display: flex;

  &.card-sobre {
    align-items: center;
    justify-content: space-around;
    color: #000;
    margin-top: 60px;
    width: 90%;
  }

  &.card-projeto {
    flex-wrap: wrap;
    gap: 0.3rem;
    border: 1px solid blue;
  }
`
const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  &.card-sobre {
    flex: 1;
  }

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
  const cardClass = type === 'sobre' ? 'card-sobre' : 'card-projeto'
  return (
    <>
      {type === 'sobre' &&
        data.map(item => (
          <CardWrapper>
            <h2>{item.title}</h2>
            <CardStyle className={cardClass}>
              {item.cursos &&
                item.cursos.map(curso => (
                  <CardItem className={cardClass}>
                    <CardText className={cardClass}>
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
                  <CardItem className={cardClass}>
                    <FontAwesomeIcon
                      style={{ fontSize: 30, marginRight: 10 }}
                      icon={habilidade.icon}
                    />
                    <CardText className={cardClass}>
                      <p>{habilidade.nome}</p>
                    </CardText>
                  </CardItem>
                ))}
              {item.empresas &&
                item.empresas.map(empresa => (
                  <CardItem className={cardClass}>
                    <CardText className={cardClass}>
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
          <CardStyle className={cardClass}>
            <CardText className={cardClass}>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </CardText>
            <CardItem className={cardClass}>
              {item.techs.map(tech => (
                <p>#{tech}</p>
              ))}
            </CardItem>
            {item.github && (
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                Github Project
              </a>
            )}
            {item.homepage && (
              <a href={item.homepage} target="_blank" rel="noopener noreferrer">
                Veja o Projeto aqui!
              </a>
            )}
          </CardStyle>
        ))}
    </>
  )
}

export default Card
