"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [contributions, setContributions] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchContributions = async () => {
        try {
            const response = await axios.get(
                `https://api.github.com/users/Himanshu7614/events`
            );
            const contributions = response.data.filter(
                (event: { type: string }) =>
                    event.type === "PushEvent" || event.type === "PullRequestEvent"
            );
            for (const contribution of contributions) {
                if (contribution.payload.commits) {
                  for (const commit of contribution.payload.commits) {
                    const commitResponse = await axios.get(commit.url);
                    console.log(commitResponse.data)
                  }
                }
              }
          
            setContributions(JSON.parse(response.data));
        } catch (error) {
            console.error("Error fetching GitHub contributions:", error);
        }
    };

    fetchContributions();
  }, []);

  console.log(contributions);
  return <div>Git hub

    <img src="https://api.github.com/users/Abhaykumar404" alt="" className="w-[500px] h-[500px]"  />
  </div>;
}

export default page;
