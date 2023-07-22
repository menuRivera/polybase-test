import { usePolybase, useCollection } from '@polybase/react'
import User from './User'

const List: React.FC = () => {
	const polybase = usePolybase()
	const { data, error, loading } = useCollection(polybase.collection('User'))

	if (loading) return <h1>loading users...</h1>
	else if (error) return <pre>{JSON.stringify(error)}</pre>

	return (
		<ul style={{textAlign: 'start'}}>
			{data?.data.map((user, index) => <User user={user} key={index} />)}
		</ul>
	)
}

export default List
