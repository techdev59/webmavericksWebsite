<<<<<<< HEAD
function StatementSplitter({ statement }) {
  let parts = statement.split('<BR>');

  return (
    parts.map((part, i) => (
      <span key={i} style={{ display: 'block' }}>
        {part}
        {i !== parts.length - 1 ? <br /> : null}
      </span>
    ))
  )
}

=======
function StatementSplitter({ statement }) {
  let parts = statement.split('<BR>');

  return (
    parts.map((part, i) => (
      <span key={i} style={{ display: 'block' }}>
        {part}
        {i !== parts.length - 1 ? <br /> : null}
      </span>
    ))
  )
}

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default StatementSplitter;