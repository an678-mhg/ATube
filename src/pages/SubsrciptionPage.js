import InfinityLoadPage from "../components/InfinityLoadPage";
import { getVideoSubsrciption } from "../redux/slice/infinityLoadSlice";
import { useState } from "react";
import Title from "../components/Title";

const SubsrciptionPage = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <Title title={"Subsrciption | ATube - Video sharing website"} />
      <InfinityLoadPage
        page={page}
        setPage={setPage}
        functionGetData={getVideoSubsrciption}
      />
    </>
  );
};

export default SubsrciptionPage;
