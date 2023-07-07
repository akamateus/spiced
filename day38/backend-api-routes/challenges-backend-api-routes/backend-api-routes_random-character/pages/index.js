import useSWR from "swr";

const URL = "/api/random-character";

const fetcher = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default function Home() {
  const { data: characterData, error } = useSWR(URL, fetcher);

  if (error) return <div>Failed to load❌</div>;
  if (!characterData) return <div>Loading🔃</div>;

  return (
    <div>
      <h1>Random Character</h1>
      <p>First Name: {characterData.firstName}</p>
      <p>Last Name: {characterData.lastName}</p>
      <p> Twitter tag: {characterData.twitter}</p>
      <p> Geohash: {characterData.geohash}</p>
    </div>
  );
}
