import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import Auth from '~/store/auth';
import Users from '~/store/users';

/* eslint import/no-mutable-exports: 0 */
let authStore: Auth
let usersStore: Users

function initialiseStores(store: Store<any>): void {
  authStore = getModule(Auth, store)
  usersStore = getModule(Users, store)
}

export { initialiseStores, authStore, usersStore }