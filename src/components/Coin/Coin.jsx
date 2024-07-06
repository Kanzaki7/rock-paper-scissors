import './Coin.css';

export default function Coin(props) {
    return(
        <div className='chooseCoinDiv'>
            <div className='Coin'>
                <div className='divPieces'>
                    <div className='divforshadow1'>
                        <div className='piecePaper' onClick={props.coinChoose}></div>
                    </div>
                    <div className='divforshadow2'>
                        <div className='pieceScissors' onClick={props.coinChoose}></div>
                    </div>
                    <div className='divforshadow3'>
                        <div className='pieceRock' onClick={props.coinChoose}></div>
                    </div>
                </div>
            </div>
            <div className='rules'>
                <div className='rulesModal' onClick={props.display}>RULES</div>
            </div>
        </div>
    )
}