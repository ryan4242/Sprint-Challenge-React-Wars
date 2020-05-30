import styled from 'styled-components';

const Container = styled.div`
  width: 85vw;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled.div`
  background: rgba(236, 236, 236, 0.8);
  border-radius: 10px;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.4);
  padding: 1rem;
  width: 200px;
  margin-top: 20px;
`;

export {Container, Card};