import { useEffect, useState } from "react";
import NewsApiService from "../services/api";

const Headlines = () => {
  const [headlines, setHeadlines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      const data = await NewsApiService.getAllArticles();
      setHeadlines(data.articles);
      console.log(data);
    }
    fetchArticles();
  }, []);

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="grid grid-cols-1 gap-2">
        <div className="bg-white box-border border p-2 border-gray-900 rounded-xl">
          <h1 className="Archivo text-2xl">
            Police chief warns UK to 'be alert, not alarmed' ahead of Christmas
            after Wisconsin parade deaths
          </h1>
          <p className="text-xl raleway font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur totam nostrum excepturi quod nemo est tempora quaerat
            similique, accusantium ea laudantium omnis ipsa deserunt architecto
            aspernatur cum adipisci nam reprehenderit.
          </p>
        </div>
        <div className="bg-white box-border border p-2 border-gray-900 rounded-xl">
          <h1 className="Archivo text-2xl">
            Police chief warns UK to 'be alert, not alarmed' ahead of Christmas
            after Wisconsin parade deaths
          </h1>
          <p className="text-xl raleway font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur totam nostrum excepturi quod nemo est tempora quaerat
            similique, accusantium ea laudantium omnis ipsa deserunt architecto
            aspernatur cum adipisci nam reprehenderit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Headlines;
