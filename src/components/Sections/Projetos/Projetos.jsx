import axios from 'axios'
import { useState, useEffect } from 'react'

import { ProjetosStyle } from './Projetos.style'
import Card from '../../Card'

const Projetos = () => {
  const imgProject = [
    'calculator-react-project-img.png' || 'Not a Image',
    'final-challenge-vnw-img.png' || 'Not a Image',
    'Mapadev-Week-img.png' || 'Not a Image',
    'Maratona-Explorer-img.png' || 'Not a Image',
    'my-portfolio.png' || 'Not a Image',
    'NLW-img.png' || 'Not a Image',
    'Nlw-Setup-img.jpg' || 'Not a Image',
    'projeto-capsula-do-tempo-nlw-img.png' || 'Not a Image',
    'Projeto-pokemon-img.png' || 'Not a Image',
    'simpsons-project-img.png' || 'Not a Image'
  ]
  const [dataProject, setDataProject] = useState([])
  const [showAllProjects, setShowAllProjects] = useState(false)
  const displayProjects = showAllProjects
    ? dataProject
    : dataProject.slice(0, 3)

  const handleClickShowMore = () => {
    setShowAllProjects(!showAllProjects)
  }
  useEffect(() => {
    const fetchProjectsInfos = async () => {
      const { data } = await axios.get(
        'https://api.github.com/users/Ollieveira/repos'
      )
      setDataProject(
        data.map(repo => ({
          title: repo.name,
          description: repo.description,
          homepage: repo.homepage,
          github: repo.html_url,
          techs: repo.topics || []
        }))
      )
    }
    fetchProjectsInfos()
  }, [])
  return (
    <ProjetosStyle id="projects">
      <h2>Projetos</h2>

      <Card
        imgProject={imgProject}
        type="projetos"
        dataProject={displayProjects}
      ></Card>

      {!showAllProjects ? (
        <button onClick={handleClickShowMore}>Ver mais projetos</button>
      ) : (
        <button onClick={handleClickShowMore}>Ver menos</button>
      )}
    </ProjetosStyle>
  )
}

export default Projetos
