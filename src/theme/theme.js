import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    bodyBackgroundColor: "#faf3f2",
    bodyColor: "#212121",
    serviceStyleBg: '#ffffff',
    backgroundStyle: '#ffe3f1',
    borderShadow: '#000000'
}
export const darkTheme = {
    bodyBackgroundColor: "#212121",
    bodyColor: "#faf3f2",
    serviceStyleBg: '#000000',
    backgroundStyle: '#383838',
    borderShadow: '#ffffff'
}

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${props => props.theme.bodyBackgroundColor};
        color: ${props => props.theme.bodyColor};
    }
    
    .link-style, .orders-link-style{
        color: ${props => props.theme.bodyColor};
    }
    .background-style{
        background-color: ${props => props.theme.backgroundStyle};
    }
    .service-styled:hover{
        background-color: ${props => props.theme.serviceStyleBg};
        border-radius: 5px;
        box-shadow: 2px 2px 4px ${props => props.theme.borderShadow}, -2px -2px 4px ${props => props.theme.borderShadow};
    }
    .login-field-style{
        padding:10px;
        border-radius: 5px;
        border: 2px solid ${props => props.theme.bodyColor};
    }
`;