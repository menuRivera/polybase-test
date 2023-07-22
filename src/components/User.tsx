import { usePolybase, useCollection } from '@polybase/react'

interface Props {
	user: any
}
const User: React.FC<Props> = ({ user }) => {
	const polybase = usePolybase()
	const { data: followers, loading: loading1 } = useCollection(polybase.collection('Follow').where('followee', '==', user.data.id))
	const { data: following, loading: loading2 } = useCollection(polybase.collection('Follow').where('follower', '==', user.data.id))

	return (
		<li>
			{loading1 || loading2
				? <div>loading...</div>
				: <div><strong>{user.data.name}</strong> -- followers: {followers?.data.length} -- following: ({following?.data.length}) {JSON.stringify(following?.data.map(user => user.data.followee))}</div>
			}
		</li>
	)
}

export default User
