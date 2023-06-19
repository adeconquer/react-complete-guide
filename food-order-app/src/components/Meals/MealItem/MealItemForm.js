import { useRef, useState } from 'react'
import Button from '../../UI/Button'
import Input from '../../UI/Input'
import styles from './MealItemForm.module.css'


const MealItemForm = props => {
    
    const amountInputRef = useRef()
    const inputObj = {id: `amount_${props.id}`, type: 'number', min: '1', max: '5', step: '1', defaultValue: '1'}
    const btn = {}

    const [amountIsValid, setAmountIsValid] = useState(true)

    const submitHandler = event => {
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value
        // console.log(enteredAmount)
        const enteredAmountNumber = +enteredAmount

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false)
            return
        }

        props.onAddToCart(enteredAmountNumber)

    }
    return <form className={styles.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="Amount" input={inputObj}/>
        <Button options={btn}>+ Add</Button>
        {!amountIsValid && <p>Please enter a valid number</p>}
    </form>
}

export default MealItemForm