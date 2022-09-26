import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import { UsersResponseType, UsersStateType, UserType } from "./models"
import { $axios } from "~/utils/api";

@Module({ stateFactory: true, namespaced: true, name: 'users' })
export default class Users extends VuexModule implements UsersStateType {
  loading: boolean = false;
  users: UserType[] = [];

  @Mutation
  addUsers(users: UserType[]) {
    this.users.push(...users);
  }

  @Mutation
  resetUsers() {
    this.users = [];
  }

  @Mutation
  setLoading(loading: boolean) {
    this.loading = loading;
  }

  @Action({rawError: true})
  async getUsers(limit: number = 50) {
    this.setLoading(true);
    const response = await $axios.get(`https://randomuser.me/api/?results=${limit}&inc=name,location,picture,email,phone,dob`);
    this.setLoading(false);
    const result: UsersResponseType = response.data;

    this.addUsers(result.results);
  }
}
