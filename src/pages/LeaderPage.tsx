import Header from '@components/html/Header';
import Layout from '@layouts/Layout';
import LeaderGame from '@components/games/LeaderGame';

export default function LeaderPage() {

  return (
    <Layout>

      <Header>Become a True Leader Game</Header>

      <div className="leading-7 text-gray-800 space-y-3">
        <p>From time to time, every individual — including those who build our digital world — needs encouragement. We may choose to offer it, or we may look away and fail to recognise a colleague’s needs. When leader fades, a person may, in due course, depart. Worse still, they may remain, quiet and outwardly acquiescent. In such circumstances, the team has already lost a member, though it may not yet realise it.</p>
        <p>Let us, then, attend to one another with patience and respect. Endeavour to reach sixty points in the exercise below, and in so doing, demonstrate how truly you serve your team.</p>
        <p>Choose a person and take a desired action with one of the buttons below.</p>
      </div>

      <LeaderGame />

    </Layout>
  )
}
