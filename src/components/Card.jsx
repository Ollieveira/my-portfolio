import styled from 'styled-components'
import Image from './Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

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
    justify-content: flex-start;
    gap: 0.8rem;
    padding: 30px;
    width: 360px;
    height: 460px;
    margin-bottom: 20px;
  }

  &.card-projeto img {
    border-radius: 30px;
  }

  &.card-projeto .homepage-link {
    color: #333;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  &.card-projeto .homepage-link:hover {
    color: #007bff;
  }

  &.card-projeto .github-icon-link {
    color: #000;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }

  &.card-projeto .github-icon-link:hover {
    color: #0366d6;
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

const Card = ({ imgProject, type, dataProject, data }) => {
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
        dataProject.map((item, index) => (
          <CardStyle className={cardClass}>
            {imgProject[index] && (
              <Image
                src={`src/assets/${imgProject[index]}`}
                alt={`img-project-${index}`}
                width={296}
                height={160}
              />
            )}
            <CardText className={cardClass}>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </CardText>
            <CardItem className={cardClass}>
              {item.techs.map(tech => (
                <p>#{tech}</p>
              ))}
            </CardItem>
            {item.homepage && (
              <a
                href={item.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="homepage-link"
              >
                Veja o Projeto aqui!
              </a>
            )}
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-icon-link"
              >
                <FontAwesomeIcon style={{ fontSize: 30 }} icon={faGithub} />
              </a>
            )}
          </CardStyle>
        ))}
    </>
  )
}

export default Card
