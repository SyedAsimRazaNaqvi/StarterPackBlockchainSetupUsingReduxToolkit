import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Web3 from "web3";

// contract 0x65a16A9773139D5101006A106caA7E3E5Ec167b5
export const initWeb3 = createAsyncThunk(
    "InitWeb3",
    async () => {
        if (Web3.givenProvider) {
            const web3 = new Web3(Web3.givenProvider);
            await Web3.givenProvider.enable();
         //   console.log(web3)
            return web3
        } else {
            console.log("Error in loading Web3")
        }
    }
)

const adoptSlice = createSlice({
    name: "AdoptSlice",
    initialState: {
        web3: null,
        contract: null
    },
    reducers: {
        adopt: () => {

        }
    },
    extraReducers: {
        [initWeb3.fulfilled]: (state, action) => {
           // console.log("In fulfill =",action.payload)
            state.web3 = action.payload
        }
    }
})

export const adoptReducer = adoptSlice.reducer;
export const { adopt } = adoptSlice.actions;
