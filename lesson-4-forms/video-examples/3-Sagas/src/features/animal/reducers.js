import { createSlice } from '@reduxjs/toolkit'

const name = 'animal'

const initialState = {
    list: {
        animals: []
    },
    form: {
        fields: {
            common_name: null,
            scientific_name: null,
        },
    },
    create: {
        status: status.PENDING,
    },
    edit: {
        status: status.PENDING,
    },
}


const reducers = {
    
    createAnimal: (state) => {
        state.create.status = status.REQUESTING
    },
    createAnimalResult: (state, { payload }) => {
        state.create.status = status.SUCCESS
        state.list.animals = payload
    },
    createAnimalError: (state, { payload }) => {
    },
    createAnimalReset: (state) => {
        state.create.status = status.ERROR
        state.create.error = payload
    },
    setFormField: (state, { payload }) => {
      const current = state.form.fields
      const { field, value } = payload

      const fields = {
          ...current,
          [field]: value,
      }

      state.form.fields = fields
  },
}

const slice = createSlice({
    name,
    initialState,
    reducers,
})

export const {
  createAnimal,
  createAnimalResult,
  createAnimalError,
  createAnimalReset,
  setFormField
} = slice.actions

export default slice.reducer
