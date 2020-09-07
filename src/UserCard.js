import React from 'react'
import styled from 'styled-components'

const UserCard = ({ name, picture, address, about }) => (
  <Card>
    <Header>
      <Picture src={picture} />
    </Header>
    <Info>
      <Title>{name}</Title>
      <Subtitle>{address}</Subtitle>
      <About>{about}</About>
    </Info>
  </Card>
)

const About = styled.p`
  margin-top: 1em;
`

const Subtitle = styled.p`
  font-style: italic;
  color: gray;
`

const Title = styled.h1`
  font-weight: 900;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2em 1em;
  flex: 2;
`

const Picture = styled.img`
  width: 80px;
  border: #903931 2px solid;
  border-radius: 50%;
`

const Header = styled.header`
  flex: 1;
  background: linear-gradient(#dE685E, #EE786E);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Card = styled.article`
  max-width: 450px;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1.5rem;
  display: flex;
  flex-direction: row;
`

export default UserCard