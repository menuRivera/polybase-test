import { usePolybase } from '@polybase/react'
import './App.css'
import { useState } from 'react'
import List from './components/List'
import AddFriend from './components/AddFriend'

function App() {
	const polybase = usePolybase()

	const [name, setName] = useState('')
	const [user, setUser] = useState({})
	const [loading, setLoading] = useState(false)

	const createRecord = async () => {
		if(!name) alert('error')
		setLoading(true)

		try {
			const result = await polybase.collection('User').create([name,name])
			setUser(result)
			setName('')
		} catch (e) {
			alert(e)
			console.error({e})
		}
		setLoading(false)
	}


	return (
		<>
			<h1>Users</h1>
			<input type="text" placeholder='Pancho' onChange={(e) => setName(e.target.value)} />
			<button onClick={createRecord}>Create user</button>

			<hr/>
			{loading ? <pre>Loading...</pre> : <pre>{JSON.stringify(user)}</pre> }
			
			<AddFriend />
			<List />
		</>
	)
}

export default App
