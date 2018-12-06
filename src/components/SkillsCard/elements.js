import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 95%;
`

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0.5rem 0 1rem 0;
  background-color: "white";
  box-sizing: "border-box";
  border-radius: 2px;
  background-clip: padding-box;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
  margin-left: 5%;
  margin-bottom: 5%;
`

export const CardContent = styled.div`
  padding: 20px;
  border-radius: 0 0 2px 2px;
  box-sizing: border-box;
  background-clip: padding-box;
`

export const CardHeader = styled.h4`
  border-bottom: 1px solid #ddd;
  margin-bottom: 30px;
  padding-bottom: 20px;
  font-size: 2.28rem;
  line-height: 2.508rem;
  margin: 1.14rem 0 0.912rem 0;
  font-weight: 300;
`

export const Row = styled.div`
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  text-align: center;
  margin-bottom: 20px;
`

export const ImageContainer = styled.div`
  float: left;
  box-sizing: border-box;
  padding: 0 0.75rem;
  width: 16.66667%;
  margin-left: 0;
  margin-bottom: 20px;
`

export const Image = styled.img`
  margin: 0 auto;
  max-height: 100px;
  padding-bottom: 10px;
  text-align: center;
  vertical-align: middle;
  display: table-cell;
  max-width: 100%;
  height: auto;
  border: 0;
`