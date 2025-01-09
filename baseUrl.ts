import 'server-only';

export const baseUrl = process.env.BASE_URL;

export const fetchBlogs = async () => {
  try {
    const res = await fetch(`${baseUrl}/blogs`);
    const data = await res.json();
    return data;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
