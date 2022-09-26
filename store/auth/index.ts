import { checkAuthData, getStorageAuth } from "./constants";
import { AuthRequestType, AuthStateType } from "./models"
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

@Module({ stateFactory: true, namespaced: true, name: 'auth' })
export default class Auth extends VuexModule implements AuthStateType {
  isAuth: boolean | null = null;

  @Mutation
  setIsAuth(__isAuth: boolean) {
    this.isAuth = __isAuth;
  }

  @Action
  async auth(
    { email, password }: AuthRequestType
    ) {
    const res = await checkAuthData(email, password);
    this.setIsAuth(res);
    return res;
  }
}
