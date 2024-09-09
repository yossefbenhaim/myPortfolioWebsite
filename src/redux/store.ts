import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { SlicesNames } from 'models/enums/slicesNames';

import storage from 'redux-persist/lib/storage';
import isContactWithMeReducer from './slice/isContactWithMe';
import activeSectionReducer from './slice/activeSection';

const persistConfig = {
    key: 'root',
    type: storage,
    storage,
    whitelist: [SlicesNames.IS_CONTACT_WITH_ME, SlicesNames.ACTIVE_SECTION],
};

const rootReducer = combineReducers({
    [SlicesNames.IS_CONTACT_WITH_ME]: isContactWithMeReducer,
    [SlicesNames.ACTIVE_SECTION]: activeSectionReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'],
            },
        }),
});

const persistedStore = persistStore(store);
export type AddDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;
export { store, persistedStore };
