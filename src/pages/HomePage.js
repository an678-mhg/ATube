import { getVideoHomePage } from "../redux/slice/infinityLoadSlice";
import { useState } from "react";
import InfinityLoadPage from "../components/InfinityLoadPage";

const HomePage = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <InfinityLoadPage
        page={page}
        setPage={setPage}
        functionGetData={getVideoHomePage}
      />
    </>
  );
};

export default HomePage;
