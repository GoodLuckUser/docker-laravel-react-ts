import { RecoilRoot } from 'recoil';
import { AuthProvider } from './contexts/auth/AuthProvider';
import { HomeRoute } from './routes/HomeRoute';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <AuthProvider>
          <BrowserRouter>
            <RecoilRoot>
              <HomeRoute />
            </RecoilRoot>
          </BrowserRouter>
        </AuthProvider>
      </React.Suspense>
    </>
  );
}

export default App;
