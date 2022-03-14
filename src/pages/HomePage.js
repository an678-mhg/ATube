import { getVideoHomePage } from "../redux/slice/infinityLoadSlice";
import { useState } from "react";
import InfinityLoadPage from "../components/InfinityLoadPage";
import Title from "../components/Title";

const HomePage = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <Title title={"ATube - Video sharing website"} />
      <InfinityLoadPage
        page={page}
        setPage={setPage}
        functionGetData={getVideoHomePage}
      />
    </>
  );
};

export default HomePage;
