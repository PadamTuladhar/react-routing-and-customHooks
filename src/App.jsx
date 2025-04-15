
import { Link, Route, Routes, useLocation, useNavigate, useRoutes } from 'react-router-dom';
import './App.css';
import CommentsComponent from './Components/comments';
import RecipeCompoent from './Components/recipe';
import RecipeDetails from './Components/recipe-details';
import NotFoundComponent from './Components/not-found';
import LayoutComponent from './Components/layout';
import CustomHooksExample from './Components/custom-hooks-example';
import ReactHookForm from './Components/react-hook-form';
import UseRefHook from './Components/hooks/use-ref';
import UseMemoHook from './Components/hooks/use-memo';

function CustomRoutes() {
  const element = useRoutes([
    {
      path: '/home', element: <LayoutComponent />,
      children: [
        {
          path: 'recipe', element: <RecipeCompoent />
        },
        {

          path: 'comments', element: <CommentsComponent />
        },
        {

          path: 'recipe-details/:id', element: <RecipeDetails />
        }
      ]
    },
    {
      path: '*', element: <NotFoundComponent />
    },
    {
      path: 'react-hook-form', element: <ReactHookForm />
    },
    {
      path: 'hooks/use-ref', element: <UseRefHook />
    },
    {
      path: 'hooks/use-memo', element: <UseMemoHook />
    }
  ]);

  return element;

}

function App() {

  const navigate = useNavigate()
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <h1>Routing hooks and custom routing concept</h1>
      <div>
        <Link className='button' to={'home/recipe'} >Alternative way of navigation to recipe</Link>
        <Link className='button' to={'home/comments'} >Alternative way of navigation to comment</Link>
      </div>
      <div>

        <button onClick={() => navigate('home/recipe')} className='button'>Go to recipe</button>
        <button onClick={() => navigate('home/comments')} className='button'>Go to comments</button>
      </div>

      {/* <Routes>
        <Route path="/home" element={<LayoutComponent />}>
          <Route path="/" element={<RecipeCompoent />} />
          <Route path='recipe' element={<RecipeCompoent />} />
          <Route path='comments' element={<CommentsComponent />} /> */}
      {/* //dynamic routing */}
      {/* <Route path='recipe-details/:id' element={<RecipeDetails />} />
        </Route>
        <Route path="*" element={<NotFoundComponent />} />
      </Routes> */}
      {/* <CustomHooksExample /> */}
      <CustomRoutes />
    </>
  )
}

export default App
