import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SlicesNames } from 'models/enums/slicesNames';

interface IsContactWithMe {
    isContactWithMe: boolean;
}

const initialState: IsContactWithMe = {
    isContactWithMe: false,
};

const IsContactWithMe = createSlice({
    name: SlicesNames.IS_CONTACT_WITH_ME,
    initialState,
    reducers: {
        setIsContactWithMe(state, action: PayloadAction<boolean>) {
            state.isContactWithMe = action.payload;
        },
    },
});

export const { setIsContactWithMe } = IsContactWithMe.actions;
export default IsContactWithMe.reducer;
