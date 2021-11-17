import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  padding:40px 60px;
  background:#232f3e;
  position: relative;
  bottom:0;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
    padding: 0 30px;
    
`
export const Row = styled.div`
    color:#fff;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 10px;
    
    @media (max-width: 1000px) {
    grid-template-columns: repeat(2,1fr);`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  `
export const Heading = styled.div`
  font-size: 18px;
  color: #eee;
  margin-bottom: 20px;
  font-weight: bold;
  `
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 15px;
  text-decoration: none;
   
  &:hover {
      text-decoration: underline;
      transition: 200ms ease-in;
  }
`;
export const Button = styled.div`
  width : 100%;
  text-align = center;
  font-size = 1.2rem;
  justify-content = center;
  background-color = #37475a;
   
`
