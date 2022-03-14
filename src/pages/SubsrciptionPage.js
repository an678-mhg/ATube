import InfinityLoadPage from "../components/InfinityLoadPage";
import { getVideoSubsrciption } from "../redux/slice/infinityLoadSlice";
import { useState } from "react";
import Title from "../components/Title";
import WantLogin from "../components/WantLogin";
import { useSelector } from "react-redux";

const SubsrciptionPage = () => {
  const [page, setPage] = useState(1);
  const { currentUser } = useSelector((state) => state.auth);

  if (!currentUser) return <WantLogin />;

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