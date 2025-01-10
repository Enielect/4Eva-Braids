import 'server-only';

export const baseUrl = process.env.BASE_URL;

export const fetchBlogs = async () => {
  try {
    const res = await fetch(`${baseUrl}/blogs`);
    if (res.ok) {
      const data = await res.json();
      return data;
    }
    const data = await res.json();

    console.log(data, 'there was an error');
  } catch (err) {
    console.log(err);
  }
};
