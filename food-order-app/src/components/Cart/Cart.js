import styles from './Cart.module.css'
import Button from '../UI/Button'
import Modal from '../UI/Modal'
import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = props => {
    const cartCtx = useContext(CartContext)
    const closeBtn = { className: styles['button--alt'], onClick: props.onHideCart }
    const orderBtn = { className: styles.button, onClick: () => console.log('Ordering') }
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const cartItemRemoveHandler = id => { 
        cartCtx.removeItem(id)
    }

    const cartItemAddHandler = item => { 
        cartCtx.addItem({...item, amount: 1})
    }

    const cartItems = <ul className={styles['cart-items']}>{cartCtx.items.map(item =>
        <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)} />)}
    </ul>
    return (
        <Modal onBackdropClick={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <Button options={closeBtn}>close</Button>
                {hasItems && <Button options={orderBtn}>order</Button>}
            </div>
        </Modal>
    )
}

export default Cart