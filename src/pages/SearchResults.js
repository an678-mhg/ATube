import React, { useEffect, useState } from "react";
import { searchVideoApi } from "../api/videoApi";
import { useSearchParams } from "../hooks/useSearchParms";
import Title from "../components/Title";
import VideoCardRow from "../components/Video/VideoCardRow";
import LoadingSpin from "../components/LoadingSpin";
import NoResults from "../components/NoResults";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  const searchTerm = searchParams.get("q");

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await searchVideoApi(searchTerm);
        if (res.data.success) {
          setResults(res.data.videos);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    })();
  }, [searchTerm]);

  if (loading) return <LoadingSpin />;

  return (
    <>
      {results.length > 0 ? (
        <div className="w-full md:w-[70%] lg:w-[45%] lg:ml-[50px] text-white">
          <Title title={`${searchTerm} | ATube - Video sharing website`} />
          {results.map((p) => (
            <VideoCardRow maxlengthTitle={30} key={p?._id} data={p} />
          ))}
        </div>
      ) : (
        <NoResults />
      )}
    </>
  );
};

export default SearchResults;
