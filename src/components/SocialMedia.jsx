import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  padding: 2.5rem 0;
`
const IconContainer = styled.div`
  border: 1px solid #fff;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease-in-out;

  &:hover {
    border: 1px solid #b3b3b3;
    cursor: pointer;
  }
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
        <IconContainer>
          <SocialIcon
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon style={{ fontSize: 20 }} icon={item.icon} />
          </SocialIcon>
        </IconContainer>
      ))}
    </SocialMediaWrapper>
  )
}

export default SocialMedia
