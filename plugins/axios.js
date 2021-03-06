export default ({ $axios, redirect, store, app }) => {
  $axios.onResponse(response => {
    if (response.data.two_factor === true) {
      redirect({ name: "auth-two-factor-challenge" });
    }
  });

  /**
   * Check if password confirmation is needed
   */
  $axios.onError(error => {
    if (error.response.status === 423) {
      redirect({
        name: "sudo",
        query: { redirectTo: app.router.currentRoute.name }
      });
      store.commit("alert/SHOW_ERROR", error.response.data.message);
    }

    if (error.response.status >= 400) {
      store.commit("alert/SHOW_ERROR", error.response.data.message);
    }
  });
};
