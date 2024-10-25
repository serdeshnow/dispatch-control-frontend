import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './styles/index.css';
import './styles/variables.css';
import './styles/normalize.css';
import './styles/class-names.scss';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store.ts';


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</StrictMode>,
);
