import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PathName } from 'models/enums/pathName';
import { SlicesNames } from 'models/enums/slicesNames';

interface IsContactWithMe {
    activeSection: string;
}

const initialState: IsContactWithMe = {
    activeSection: PathName.HOME,
};

const ActiveSection = createSlice({
    name: SlicesNames.ACTIVE_SECTION,
    initialState,
    reducers: {
        setActiveSection(state, action: PayloadAction<IsContactWithMe>) {
            state.activeSection = action.payload.activeSection;
        },
    },
});

export const { setActiveSection } = ActiveSection.actions;
export default ActiveSection.reducer;
