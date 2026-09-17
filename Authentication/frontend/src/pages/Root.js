import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';

function RootLayout() {
  const submit = useSubmit();
  // aqui no es necesario usar useRouterLoaderData(id) ya que estamos en RootLayout, lugar donde se define el loader tokenLoader()
  const token = useLoaderData();

  useEffect(() => {
    if (!token) {
      return;
    }

    // este codigo no esta 100% bien
    // si hacemos login, pasan 10 minutos y hacemos refresh, el useEffect se ejecuta y el timeOut se reinicia 
    // mientras la expiracion del token se mantiene a 50m
    // Para arreglar esto, se debe guardar la fecha de expiracion en localStorage. En utils, añadir un metodo que calcule el tiempo que le queda
    // al loader que recoge el token, modificarlo para que cuando termine, se devuelva "EXPIRED" (ejemplo)

    // en este metodo, si el token esta expirado, se hace otra vez el submit a logout

    setTimeout(() => {
      // null porque no hay data que mandar, y action es la ruta a la que se quiere hacer submit
      submit(null, { action: '/logout', method: 'post' });
    }, 1 * 60 * 60 * 1000); // 1 hour
  }, [token, submit]);
  
  
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
