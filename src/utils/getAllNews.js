const getAllNews = async category_id => {
  // let url = "http://localhost:5000/db.json";
  let url = "https://the-news-dragon-server-ittarek.vercel.app/news";

  if (category_id) {
    url += "?category_id=" + category_id;
  }

  try {
    const res = await fetch(url, {
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error.message);
    // You might want to handle the error appropriately or rethrow it.
    throw error;
  }
};

export default getAllNews;
