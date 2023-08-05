import { TwitterFollowCard } from './TwitterFollowCard'
import '/src/App.css'

const users = [
  {
    userName: 'willsmith',
    name: 'Will Smith',
  },
  {
    userName: 'theweeknd',
    name: 'Abel Tesfaye',
  },
  {
    userName: 'LA167x',
    name: 'Farruko',
  },
  {
    userName: '11K.store',
    name: '11K Store',
  }
]
export function App() {
  return (
    <section className="App">
      {
        users.map(({ userName, name }) => {
          return (
            <TwitterFollowCard
            key={userName}
            userName={userName}
            >
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  )
}

// const format = ( userName ) => `@${ userName }`
/* <TwitterFollowCard
  // formattedUserName={format} // callback functions as a prop.
  // number={[1, 2, 3]} // Arrays as a prop.
  isFollowing={false} // boolean values as a prop.
  userName="willsmith"
  name="Will Smith"/> */

  /* <TwitterFollowCard isFollowing userName="willsmith">
  Will Smith -> We can add more elements by children as a param. In this case <strong> turns into a parent element.
  </TwitterFollowCard> */
