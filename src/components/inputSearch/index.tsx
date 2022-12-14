import { FormInput, IconLup, InputStyled } from "./styled"

export const InputSearch = ({}) =>{
    return (
        <FormInput noValidate>
            <InputStyled placeholder="Digitar pesquisa..."/>
            <IconLup className="fa-solid fa-search"/>
        </FormInput>
    )
}