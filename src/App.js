import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import PostListPage from './pages/PostList/PostList.tsx';
import PostPage from './pages/Post/Post.tsx';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<PostListPage />} />

        <Route path="/post/:id" element={<PostPage/>} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
