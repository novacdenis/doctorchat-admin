import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "./router";
import routes from "./router/routes";
import { setGlobalPrivateRequisites } from "./store/actions/bootstrapAction";
import { getUser } from "./store/actions/userAction";

function App() {
  const dispatch = useDispatch();
  const { isAuthorized } = useSelector((state) => ({
    isAuthorized: state.user.isAuthorized,
  }));

  useEffect(() => {
    if (isAuthorized) {
      getUser()(dispatch);
      dispatch(setGlobalPrivateRequisites());
    }
  }, [dispatch, isAuthorized]);

  return <Router routes={routes} />;
}

export default App;
