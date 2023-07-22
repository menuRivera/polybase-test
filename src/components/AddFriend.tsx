import { usePolybase } from '@polybase/react'
import { useState } from 'react'

const AddFriend: React.FC = () => {
	const polybase = usePolybase()

	const [name, setName] = useState('')
	const [friendName, setFriendName] = useState('')
	const [loading, setLoading] = useState(false)

	const addFriend = async () => {
		setLoading(true)
		try {
			const user = await polybase.collection('User').record(name).get()
			const friend = await polybase.collection('User').record(friendName).get()

			const response = await polybase.collection('Follow').create([user.id, friend.id])

			console.log({response})
		} catch (err) {
			console.error(err)
		}
		setLoading(false)
	}


	return (
		<>
		<div style={{ display: 'flex' }}>
			<input type="text" placeholder='Pancho' onChange={(e) => setName(e.target.value)} />
			<span style={{margin: '0 10px'}}>will now follow</span>
			<input type="text" placeholder='Pedro' onChange={(e) => setFriendName(e.target.value)} />

			<button onClick={addFriend}>Perform</button>
		</div>
		{loading && <pre>Loading...</pre>}
		</>
	)
}

export default AddFriend
