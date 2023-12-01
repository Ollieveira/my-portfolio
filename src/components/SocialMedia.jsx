import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 1.5rem 0;
`
const SocialIcon = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #b3b3b3;
  }
`

const SocialMedia = ({ socialIcons }) => {
  return (
    <SocialMediaWrapper>
      {socialIcons.map(item => (
        <SocialIcon href={item.link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon style={{ fontSize: 30 }} icon={item.icon} />
        </SocialIcon>
      ))}
    </SocialMediaWrapper>
  )
}

export default SocialMedia
