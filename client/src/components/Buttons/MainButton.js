import styled from 'styled-components';
import { Button } from './Button';

export const MainButton = styled(Button)`
background: var(--mainBlue);
border: 0.05rem solid var(--mainBlue);
color: white;
&:hover {
    background: var(--mainOrange);
    color:white;
    border: 0.05rem solid white;
  };
  :disabled {
    cursor: text
    background: var(--mainOrange);
    color:white;
    border: 0.05rem solid white;
  }
  }
`;
