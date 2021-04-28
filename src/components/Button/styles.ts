import styled, { css } from 'styled-components';

import { ButtonProps } from '.';


export const Container = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #123122;
    border: 0;
    padding: 0.8rem 2.4rem;
    border-radius: 4px;
    color: #f2f2f2;

    :disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
`;
