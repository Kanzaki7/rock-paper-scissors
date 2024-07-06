import './Score.css';

function Score(props) {
    return(
      <div className='divScore'>
        <p className='titleScore'>SCORE</p>
        <p className='scoreText'>{props.score}</p>
      </div>
    )
}

export default Score;