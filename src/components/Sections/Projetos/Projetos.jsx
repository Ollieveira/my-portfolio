import axios from 'axios'
import { useState, useEffect } from 'react'

import { ProjetosStyle } from './Projetos.style'
import Card from '../../Card'

const Projetos = () => {
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
      <Card type="projetos" dataProject={dataProject}></Card>
    </ProjetosStyle>
  )
}

export default Projetos
