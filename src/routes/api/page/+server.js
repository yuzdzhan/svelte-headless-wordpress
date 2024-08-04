import WordPressAPI from '$lib/wordpressAPI';
import { json } from '@sveltejs/kit';
import { API_URL } from '$env/static/private';

const wp = new WordPressAPI(API_URL);

export async function GET({ url }) {
  const id = Number(url.searchParams.get('id')) || null;

  try {
    let result = await wp.getPage(id);
    return json(result);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}