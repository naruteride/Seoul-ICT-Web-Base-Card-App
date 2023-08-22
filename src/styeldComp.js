import styled from 'styled-components'

export const Menu = styled.div`
  position: sticky; top: 0;
  width: 100%; height: 100px;
  font-size: 18px;
  color: #FFFFFF;
  display: flex; 
  justify-content: center;
  align-items: center;  
`

export const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%; margin: 0 auto;
  margin: auto;

  @media all and (max-width: 1500px){
    width: 80%;
  }
  @media all and (max-width: 1000px){
    width: 100%;
  }
`

export const Item = styled.div`
  cursor: pointer;
  width: 20rem; height: 30rem;
  margin: 2%;
  border-radius: 0.2rem;
  color: #FFFFFF;
  background-color: #393939;
  overflow: hidden;
  &:hover{
    transform: translate(0, -20px);
  }
  @media all and (max-width: 800px){
    width: 46%;
  }
  @media all and (max-width: 500px){
    width: 98%;
  }
`
export const Image = styled.div`
  height: 250px; 
  background-image: url(${props => props.imagePath});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media all and (max-width: 500px){
    background-size: 100% 100%;
  }
`
export const ColorBox = styled.div`
  height: 250px; 
  background-color: ${props => props.color};
  background-repeat: no-repeat;
  background-size: cover;
  @media all and (max-width: 500px){
    background-size: 100% 100%;
  }
`