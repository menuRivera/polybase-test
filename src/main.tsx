import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import PolybaseProviders from './polybase/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<PolybaseProviders>
			<App />
		</PolybaseProviders>
	</React.StrictMode>,
)
