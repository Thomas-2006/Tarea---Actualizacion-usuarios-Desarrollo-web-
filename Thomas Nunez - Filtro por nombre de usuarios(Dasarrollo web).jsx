const [search, setSearch] = useState('');

const filteredPosts = posts.filter(post =>
  post.user.name.toLowerCase().includes(search.toLowerCase())
);

return (
  <>
    <input
      type="text"
      placeholder="Buscar por usuario"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    {filteredPosts.map(post => (
      <PostCard key={post.id} post={post} />
    ))}
  </>
);