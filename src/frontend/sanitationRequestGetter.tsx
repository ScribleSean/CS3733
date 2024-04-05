import { useEffect, useState } from "react";
import { form } from "../types/form.ts";
import axios from "axios";
import { FeedBackDisplay } from "./sanitationRequestTable.tsx";

export function FeedBackGetter() {
  const [formData, setFormData] = useState<form[]>();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("/api/form");
      setFormData(res.data);
      console.log("successfully got data from get request");
    }
    fetchData().then();
  }, []);

  return (
      <div className="flex flex-colgap-5">
        {formData != undefined ? (
            formData.map((form) => {
              return <FeedBackDisplay form={form}></FeedBackDisplay>;
            })
        ) : (
            <></>
        )}
      </div>
  );
}
