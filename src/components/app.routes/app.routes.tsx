import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const CustomLibrary = lazy(
  () => import('../pages/custom.library/custom.library.page')
);

const Home = lazy(() => import('../pages/character.page/character.page'));

const ErrorPage = lazy(() => import('../pages/error.page/error.page'));

const DetailsPage = lazy(() => import('../pages/details.page/details.page'));

const Form = lazy(() => import('../pages/form.page/form'));
export function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/custom-library"
          element={<CustomLibrary></CustomLibrary>}
        ></Route>
        <Route path="/*" element={<ErrorPage></ErrorPage>}></Route>
        <Route
          path="/details/:id/"
          element={<DetailsPage></DetailsPage>}
        ></Route>
        <Route path="/form" element={<Form></Form>}></Route>
      </Routes>
    </Suspense>
  );
}
