import WordPressAPI from '$lib/wordpressAPI';
import { json } from '@sveltejs/kit';
import { API_URL } from '$env/static/private';

const wp = new WordPressAPI(API_URL);

export async function GET({ url }) {
  const page = Number(url.searchParams.get('page')) || 1;
  const perPage = Number(url.searchParams.get('perPage')) || 10;
  const searchTerm = url.searchParams.get('search');
  
  try {
    let result;
    if (searchTerm) {
      result = await wp.searchPosts({ searchTerm, page, perPage });
    } else {
      result = await wp.getPosts({ page, perPage });
    }
    
    return json(result);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}