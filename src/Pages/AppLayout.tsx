import Button from "../Components/Button";
import Spinner from "../Components/Spinner";
import { useAuth } from "../Contexts/Hooks/AuthContextHook";
import Game from "../Components/Game";
import { lazy } from "react";

function AppLayout() {
  //const { isPostFormOpen, dispatch, isLoading, tagsAll } = usePosts();
  const { isLoginLoading } = useAuth();
  // if (isLoginLoading) {
  //   return <Spinner />;
  // }
  //const GamePage = lazy(() => import("../Components/Game"));
  return (
    <>
      <section>
        {/* <Game /> */}
        {/* <Game></Game> */}
        {/* {isPostFormOpen && <FormMakePost />}
        {!isPostFormOpen && (
          <Button
            className=""
            onClick={() => dispatch({ type: "posts/formToggle" })}
          >
            Create Post 🗣️
          </Button>
        )} */}
      </section>
    </>
  );
}

export default AppLayout;
