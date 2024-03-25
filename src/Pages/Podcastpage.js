import React, { useEffect, useState } from "react";
import Navbar from "../Componet/Header/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import { setPodcasts } from "../slices/podcastSlice";
import Podcastholder from "../Componet/PodcastHolder";
import InputComponet from "../Componet/Input/InputComponet";

const Podcastpage = () => {
  const dispatch = useDispatch();
  const podcasts = useSelector((state) => state.podcasts.podcasts);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "podcasts")),
      (querySnapshot) => {
        const podcastsData = [];
        querySnapshot.forEach((doc) => {
          podcastsData.push({ id: doc.id, ...doc.data() });
        });
        dispatch(setPodcasts(podcastsData));
      },
      (error) => {
        console.error("Error fetching podcasts:", error);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  console.log(podcasts);

  var filteredPodcasts = podcasts.filter((item) =>
    item.title?.trim().toLowerCase().includes(search?.trim().toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="input-wrapper" style={{ marginTop: "2rem" }}>
        <h1>Discover Podcasts</h1>
        <InputComponet
          state={search}
          setState={setSearch}
          placeholder="Search By Title"
          type="text"
        />

        {filteredPodcasts.length > 0 ? (
          <div className="podcasts-flex" style={{ marginTop: "1.5rem" }}>
            {filteredPodcasts.map((item) => {
              console.log(item)
              return (
                <Podcastholder
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  displayImage={item.displayImage}
                />
              );
            })}
          </div>
        ) : (
          <p>{search ? "Podcast Not Found" : "No Podcasts On The Platform"}</p>
        )}
      </div>
    </div>
  );
}

export default Podcastpage;
