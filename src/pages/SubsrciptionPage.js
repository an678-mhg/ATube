import InfinityLoadPage from "../components/InfinityLoadPage";
import { getVideoSubsrciption } from "../redux/slice/infinityLoadSlice";
import { useState } from "react";

const SubsrciptionPage = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <InfinityLoadPage
        page={page}
        setPage={setPage}
        functionGetData={getVideoSubsrciption}
      />
    </>
  );
};

export default SubsrciptionPage;
