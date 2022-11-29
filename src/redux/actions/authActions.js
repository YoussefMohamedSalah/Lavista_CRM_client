import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT,
} from '../types/auth';

import { DOMAIN } from '../constants';

export const login = (loggin, password) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_REQUEST,
        });

        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        };

        const { data } = await axios.post(`${DOMAIN}/auth/login`, { loggin, password }, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data,
        });

        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        });
    }
};

export const register = (firstName, lastName, loggin, password) => async (dispatch) => {
    try {
        dispatch({
            type: REGISTER_REQUEST,
        });

        const config = {
            headers: {
                'Content-type': 'application/json',
            },
        };

        const { data } = await axios.post(
            `${DOMAIN}/auth/signup`,
            { firstName, lastName, loggin, password },
            config
        );

        dispatch({
            type: REGISTER_SUCCESS,
            payload: data,
        });

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data,
        });

        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        });
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: LOGOUT });
};
