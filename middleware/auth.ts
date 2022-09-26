import { Middleware } from "@nuxt/types";
const authMidlleware: Middleware = function({ store, redirect, }) {

  if (!store.state.auth.isAuth) {
    redirect('/');
  }
}

export default authMidlleware;