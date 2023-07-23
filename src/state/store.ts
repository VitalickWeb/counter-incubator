import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localStorage";

export const rootReducer = combineReducers({
    counter: counterReducer
})

//здесь получаем вторым параметром инициализационное значение из того что сетает нам subscriber
export const store = legacy_createStore(rootReducer, loadState())

export type AppRootStateType = ReturnType<typeof rootReducer>

//Для local storage используем паттерн observer - который принимает слушателя - callback который следит за изменениями
//и при изменении state этот код будет отрабатывать. В этом случае сетать в localStorage какие-то значения
store.subscribe( () => {
    return saveState(store.getState());
})
// @ts-ignore
window.store = store