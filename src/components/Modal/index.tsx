import { useContext } from "react"
import { CartContext } from "../../contexts/cartContext"
import { DivWrapper, ModalContent } from "./styles"

export const ModalApp = () =>{
    const { setIsModalOpen, productsCart } = useContext(CartContext)

    return (
        <DivWrapper>
            <ModalContent>
                <header>
                    <h2>Carrinho de compras</h2>
                    <i onClick={() => setIsModalOpen(false)}>X</i>
                </header>
                {productsCart.length === 0 ? (
                    <div>
                        <h2>Sua sacola está vazia</h2>
                        <span>Adicione itens</span>
                    </div>
                ) : (
                    <></>
                )}
            </ModalContent>
        </DivWrapper>
    )
}