export default function Team({ status }) {
  return (
    <div className="yourTeam">
      <h3>Your Team</h3>
      {!status && <p>You have to be logged in to create a team.</p>}
    </div>
  );
}
