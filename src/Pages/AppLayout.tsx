import UnityGame from "../Components/UnityGame";

function AppLayout() {
  //const { isPostFormOpen, dispatch, isLoading, tagsAll } = usePosts();
  //const { isLoginLoading } = useAuth();
  // if (isLoginLoading) {
  //   return <Spinner />;
  // }
  //const GamePage = lazy(() => import("../Components/Game"));
  return (
    <>
      <section>
        {/* <Game /> */}
        {/* <Game></Game> */}

        <UnityGame />
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
