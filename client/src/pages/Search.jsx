import { Button, Select, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    category: 'uncategorized',
  });

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Read params safely from URL
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    const searchTermFromUrl = urlParams.get('searchTerm') || '';
    const sortFromUrl = urlParams.get('sort') || 'desc';
    const categoryFromUrl = urlParams.get('category') || 'uncategorized';

    setSidebarData({
      searchTerm: searchTermFromUrl,
      sort: sortFromUrl,
      category: categoryFromUrl,
    });

    const fetchPosts = async () => {
      try {
        setLoading(true);
        const searchQuery = urlParams.toString();

        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/post/getposts?${searchQuery}`
        );

        const data = await res.json();

        if (!res.ok) {
          setLoading(false);
          return;
        }

        setPosts(data.posts);
        setLoading(false);
        setShowMore(data.posts.length === 9);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };

    fetchPosts();
  }, [location.search]);

  // ✅ Input change
  const handleChange = (e) => {
    setSidebarData({
      ...sidebarData,
      [e.target.id]: e.target.value,
    });
  };

  // ✅ Submit filters
  const handleSubmit = (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams();
    urlParams.set('searchTerm', sidebarData.searchTerm);
    urlParams.set('sort', sidebarData.sort);
    urlParams.set('category', sidebarData.category);

    navigate(`/search?${urlParams.toString()}`);
  };

  // ✅ Pagination
  const handleShowMore = async () => {
    const startIndex = posts.length;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);

    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/post/getposts?${urlParams.toString()}`
    );

    const data = await res.json();

    if (res.ok) {
      setPosts([...posts, ...data.posts]);
      setShowMore(data.posts.length === 9);
    }
  };

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='p-7 border-b md:border-r md:min-h-screen border-gray-500'>
        <form className='flex flex-col gap-8' onSubmit={handleSubmit}>
          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Search Term:</label>
            <TextInput
              id='searchTerm'
              type='text'
              placeholder='Search...'
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>

          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Sort:</label>
            <Select id='sort' value={sidebarData.sort} onChange={handleChange}>
              <option value='desc'>Latest</option>
              <option value='asc'>Oldest</option>
            </Select>
          </div>

          <div className='flex items-center gap-2'>
            <label className='font-semibold'>Category:</label>
            <Select
              id='category'
              value={sidebarData.category}
              onChange={handleChange}
            >
            <option value='uncategorized'>Select a category</option>
<option value='news'>News</option>
<option value='articles'>Articles</option>
<option value='updates'>Updates</option>

<option value='javascript'>JavaScript</option>
<option value='reactjs'>React.js</option>
<option value='nextjs'>Next.js</option>

<option value='java'>Java</option>
<option value='c'>C</option>
<option value='cpp'>C++</option>

<option value='html'>HTML</option>
<option value='css'>CSS</option>


            </Select>
          </div>

          <Button type='submit' outline gradientDuoTone='purpleToPink'>
            Apply Filters
          </Button>
        </form>
      </div>

      <div className='w-full'>
        <h1 className='text-3xl font-semibold border-b border-gray-500 p-3 mt-5'>
          Posts results:
        </h1>

        <div className='p-7 flex flex-wrap gap-4'>
          {!loading && posts.length === 0 && (
            <p className='text-xl text-gray-500'>No posts found.</p>
          )}

          {loading && <p className='text-xl text-gray-500'>Loading...</p>}

          {!loading &&
            posts.map((post) => <PostCard key={post._id} post={post} />)}

          {showMore && (
            <button
              onClick={handleShowMore}
              className='text-teal-500 text-lg hover:underline w-full'
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
