import { useDispatch, useSelector } from "react-redux"
import * as actions from "./reducers" //Instead of importing actions one by one, all of the actions are being imported from the reducer file automatically with the * syntax.

export const useUpdateFields = () => {
    const dispatch = useDispatch()
    const fields = useSelector(state => state.book.form.fields)
    
    return {
        fields,
        setFormField : (field) => (value) => {
            console.log(`Updating field ${field} to ${value}`);
            return dispatch(actions.setFormField({field, value}))
        }
    }
}