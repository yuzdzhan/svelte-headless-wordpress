import WordPressAPI from '$lib/wordpressAPI';
import { json } from '@sveltejs/kit';
import { API_URL } from '$env/static/private';

const wp = new WordPressAPI(API_URL);

export async function GET({ url }) {
  const slug = url.searchParams.get('slug') || '';
  const id = Number(url.searchParams.get('id')) || null;
  const page = Number(url.searchParams.get('page')) || 1;
  const perPage = Number(url.searchParams.get('perPage')) || 10;
  
  try {
    let result;

      if(id) {
        result = await wp.getCategory(id);
      }else {
        result = await wp.getPostsByCategorySlug({ slug, page, perPage });
      }
    return json(result);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}