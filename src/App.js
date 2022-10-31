import axios from "axios";
import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const getApi = () => {
    axios
      .get("https://random-data-api.com/api/v2/users")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="flex-col min-h-screen w-full bg-pink-300 flex justify-start items-center">
      {data && (
        <div className=" flex flex-col justify-center items-center gap-6">
          <img className="mb-5" src={data.avatar} alt="" />
          <p>
            Full name: {data.first_name} {data.last_name}
          </p>
          <p>Birthday: {data.date_of_birth}</p>
          <p>
            Address: {data.address.city} - {data.address.country}
          </p>
          <p>Username: {data.username}</p>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>
          <p>Gender: {data.gender}</p>
        </div>
      )}
      <button
        className=" mt-5 rounded-lg bg-black text-white p-2 hover:bg-white hover:text-black"
        onClick={() => getApi()}
      >
        Random
      </button>
    </div>
  );
};

export default App;
