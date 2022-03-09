import styled from '@emotion/styled';

export const Title = styled.h2`
    font-weight:700;
    fonst-size: 20px;
`

export const Button = styled.button`
    height: 40px;
    width: 100px;
    margin: 10px;
    border-color: transparent;
    border-radius: 10px;
    &:hover {
        border: 3px solid blue;
    }

    &[name="good"]{ 
        background-color: green;
    }
    &[name="neutral"]{ 
        background-color: yellow;
    }
    &[name="bad"]{ 
        background-color: red;
    }
   
`

export const ControlsSection = styled.section`
    margin-bottom: 30px;
` 

export const StatisticSection = styled.section`

`
export const InfoLabel = styled.p`
    font-style:italic;
    font-variant:small-caps;
    font-weight:700;

`
export const InfoValue = styled.span``

export const NotificationText = styled.h3`
    font-style:normal;
    font-weight:500;
`
