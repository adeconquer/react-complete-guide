import { useContext, useEffect, useState } from "react"
import CartContext from "../../store/cart-context"
import CartIcon from "../Cart/CartIcon"
import Button from '../UI/Button'
import styles from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const cartCtx = useContext(CartContext)
    const numberOfCartItems = cartCtx.items.reduce((acc, cur)=> acc + cur.amount, 0)
    const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`
    const btn = {className: btnStyles, onClick: props.onClick}
    useEffect(() => {
        if(cartCtx.items.length === 0) return
        setBtnIsHighlighted(true)

        const timer = setTimeout(()=> {
            setBtnIsHighlighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [cartCtx.items])

    return <Button options={btn}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
    </Button>
}

export default HeaderCartButton