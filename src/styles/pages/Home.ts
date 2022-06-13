import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: 300;
    font-size: 1.6rem;
    width: 450px;

    margin-top: 64px;
  }

  @media (max-width: 700px) {
    h1 {
      width: 100%;
    }
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  height: 300px;
  justify-content: center;
`

export const ContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 16px;
`

export const ReadMoreButton = styled.a`
  font-size: 0.9rem;
  font-family: inherit;
  font-weight: 500;
  white-space: nowrap;
  vertical-align: middle;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  border: 1px solid white;
  display: inline-block;
  cursor: pointer;
  border-radius: 4px;
  padding: 0.6rem 0.8rem;
  background: none;
  color: inherit;
  transition: background 0.25s;

  &:hover {
    background: rgba(15, 52, 96, 0.5);
  }
`
export const ContactButton = styled.a`
  border: 0;
  margin-right: 32px;
  font-size: 0.9rem;
  font-family: inherit;
  font-weight: 500;
  white-space: nowrap;
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  vertical-align: middle;
  display: inline-block;
  cursor: pointer;
  border-radius: 4px;
  padding: 0.6rem 0.8rem;
  background: rgb(15, 52, 96);
  color: inherit;
  border: 1px solid rgb(15, 52, 96);
  transition: background 0.25s;

  &:hover {
    background: #16213e;
  }
`

export const Services = styled.div`
  margin-top: 50px;

  width: 100%;
  background: rgba(22, 33, 62, 0.7);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 32px;

  /* background-image: url('/traffic.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 600px; */

  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
  }
`
export const Service = styled.div`
  border: 1px solid rgb(225, 225, 230, 0.9);
  padding: 12px;
  border-radius: 6px;
  width: 300px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 32px;
  background: rgba(26, 26, 46, 0.5);
  transition: border 0.2s;

  h3 {
    font-size: 20px;
    color: rgb(225, 225, 230, 0.9);

    font-weight: 300;
  }

  img {
    margin-top: 8px;
    border-radius: 5px;
    width: 100%;
    height: 335px;
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 400px;
    margin-right: unset;
    margin-bottom: 24px;
  }
`
export const ServicesContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  padding: 0 1.6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-top: 16px;
    font-size: 24px;
    color: rgb(225, 225, 230, 0.8);

    font-weight: 200;
    margin-bottom: 24px;
  }
`

export const ServiceContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-right: 20px; */
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

export const About = styled.div`
  width: 100%;
  background-color: rgba(26, 26, 46, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 5;

  img {
    width: 60px;
  }
`

export const AboutContent = styled.div`
  position: relative;
  width: 100%;
  flex-direction: column;
  max-width: 1200px;
  padding: 0 1.6rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  h2 {
    margin-bottom: 16px;
    margin-top: 32px;
    font-size: 24px;
    color: rgb(225, 225, 230, 0.8);
    font-weight: 300;
  }

  p {
    font-weight: 200;
    color: #f2f2f2;
  }
`
export const More = styled.div`
  display: flex;
  margin-top: 16px;
  margin-bottom: 32px;
`
export const Contact = styled.div`
  width: 100%;
  background: rgba(22, 33, 62, 0.7);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  span {
    margin-top: 16px;
    font-weight: 300;
  }

  .phone {
    margin-top: 8px;
    font-weight: 300;
  }

  strong {
    font-weight: 400;
    margin-right: 8px;
  }

  p {
    margin-top: 16px;
    font-weight: 400;
    color: rgba(123, 173, 234, 0.8);
  }
`

export const ContactContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  padding: 1.6rem 1.6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 24px;
    color: rgb(225, 225, 230, 0.8);

    font-weight: 200;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 24px;

    input {
      padding: 15px;
      border: 0;
      height: 40px;
      border-radius: 5px;
      margin-bottom: 8px;
      background-color: rgba(26, 26, 46, 0.8);
      border: 1px solid rgb(225, 225, 230, 0.7);
      color: ${props => props.theme.colors.text};
    }

    textarea {
      margin-top: 8px;
      border: 0;
      padding: 15px;
      height: 100px;
      border-radius: 5px;
      margin-bottom: 8px;
      border: 1px solid rgb(225, 225, 230, 0.7);

      background-color: rgba(26, 26, 46, 0.8);
      color: ${props => props.theme.colors.text};
    }
  }
`

export const SendMessage = styled.div`
  margin-left: auto;

  @media (max-width: 700px) {
    margin-left: unset;
  }
`

export const SendMessageButton = styled.button`
  border: 0;
  width: 200px;
  font-size: 0.9rem;
  font-family: inherit;
  font-weight: 500;
  color: ${props => props.theme.colors.text};
  display: inline-block;
  cursor: pointer;
  border-radius: 4px;
  padding: 0.6rem 0.8rem;
  background: rgb(15, 52, 96);
  color: inherit;
  border: 1px solid rgb(15, 52, 96);
  transition: background 0.25s;

  &:hover {
    background: #16213e;
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`
