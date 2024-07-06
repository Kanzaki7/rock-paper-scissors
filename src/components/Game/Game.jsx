import './Game.css';
// import paper from '../../assets/img/icon-paper.svg';

export default function Game(props) {
    return(
        <div className='gameDiv'>
            <div className='game'>
                <div className='player'>
                    <p className='playerText'>YOU PICKED</p>
                    <div className={props.playerCoin}>
                        <div className={props.classCoin}></div>
                    </div>
                </div>
                <div className='menuGame'>
                    <p className='winText'>{props.result}</p>
                    <div className='playAgain' onClick={props.restart}>PLAY AGAIN</div>
                </div>
                <div className='computerCoin'>
                    <p className='playerText'>THE HOUSE PICKED</p>
                    <div className={props.computerCoin}>
                        <div className={props.classComputer}></div>
                    </div>
                </div>
            </div> 
            <div className='rules'>
                <div className='rulesModal' onClick={props.display}>
                    RULES
                </div>
            </div>
        </div>
    )
}