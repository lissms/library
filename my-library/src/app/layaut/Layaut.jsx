import React from 'react'

//Images-logos
import logo from "../../asset/images/icono_short.png"
import logoLarge from "../../asset/images/Logo.png"
import book from "../../asset/images/book.png"

// Styled
import { HeaderStyled, ContentStyled, ButtonStyled, FooterStyled} from "./layaut.styled"


function Layaut(props) {
    return (
        <div>
            <HeaderStyled>
                <img className="logo" src={logo} alt="icono" />
                <h1 className="title"> My Library</h1>
            </HeaderStyled>

            <ContentStyled>
                {props.children}
            <ButtonStyled><img src={book} alt="book" /></ButtonStyled>
            </ContentStyled>

            
            <FooterStyled>
                <img src={logoLarge} alt="" />
            </FooterStyled>
        </div>
    )
}

Layaut.propTypes = {

}

export default Layaut


      