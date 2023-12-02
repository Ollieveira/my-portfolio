import axios from 'axios'
import { useState, useEffect } from 'react'

import { ProjetosStyle } from './Projetos.style'
import Card from '../../Card'

const Projetos = () => {
  const imgProject = [
    'calculator-react-project-img.png',
    'final-challenge-vnw-img.png',
    'Mapadev-Week-img.png',
    'Maratona-Explorer-img.png',
    '' || "Not a Image",
    'NLW-img.png',
    'Nlw-Setup-img.jpg',
    'projeto-capsula-do-tempo-nlw-img.png',
    'Projeto-pokemon-img.png',
    'simpsons-project-img.png'
  ]
  const [dataProject, setDataProject] = useState([])
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
      <Card imgProject={imgProject} type="projetos" dataProject={dataProject}></Card>
    </ProjetosStyle>
  )
}

export default Projetos
