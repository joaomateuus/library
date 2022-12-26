import React, {useContext} from "react";
import { Container } from "./styles";
import Switch from 'react-switch';
import  { ThemeContext } from 'styled-components';
import { shade } from 'polished';

interface Props {
    toggleTheme(): void;
}

export const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return(
        <Container>
            <img src="https://cdn-icons-png.flaticon.com/512/1903/1903162.png" style={{ height: '60px', width:'60px' }} alt="" />
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.15, colors.secundary)}
                onColor={colors.secundary}
            />
        </Container>
    )
}