import {UserType} from '~/types/common';

import $axios from './index';

const Users = {
  signIn: (login: string, password: string) => $axios.post<{token: string}>(`user/obtain_token/`, {login, password}),
  signUp: (username: string, email: string, password: string) => $axios.post<{token: string}>(`user/sign_up/`, {
    username,
    email,
    password,
  }),
  getProfile: () => $axios.get<UserType>(`user/get_profile/`),
};

export default Users;
