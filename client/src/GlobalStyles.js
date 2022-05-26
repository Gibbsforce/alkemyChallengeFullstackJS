import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --maxWidthTablet: 768px;
        --maxWidthMobile: 414px;
        --maxWidthMobileSmall: 320px;
        --fontSuperbig: 2rem;
        --fontBig: 1.5rem;
        --fontMedium: 1.2rem;
        --fontSmall: 1rem;
        --fontSuperSmall: 0.8rem;
        --baskervilleFont: 'Libre Baskerville', serif;
        --avenirFont: 'Avenir Next', sans-serif;
        --avenirRomanFont: 'Avenir LT W01 55 Roman', sans-serif;
        --avenirBlackFont: 'AvenirLTW01-95BlackObli', sans-serif;
        --gray: #f5f5f5;
        --white: #fff;
        --lightGray: #fafafa;
        --darkGray: #eaeaea;
        --black: #000;
        --sky: #2c75d3;
        --skyLight: #9cc3f5;
    }
    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
        user-select: none;
    }
    body {
        margin: 0;
        padding: 0;
        h1 {
            font-size: var(--fontSuperbig);
            font-weight: 600;
            color: var(--lightGray);
        }
        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }
        p {
            font-size: 1rem;
            color: var(--white);
        }
    }
`
