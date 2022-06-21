import './SimpsonCharacter.css';

export default function SimpsonCharacter(props) {
    const {name, age, personInfo, picture} = props;

    return (
        <div className={'personal-info'}>
            <div className={'person-data'}>
                <h2>
                    <b>Name: </b>
                    {name}</h2>
                <span>
                    <b>Age: </b>
                    {age}</span>
                <p>
                    <b>Biography: </b>
                    {personInfo}</p>
            </div>
            <div className={'person-image'}>
                <img src={picture} alt={name}/>
            </div>
        </div>
    );
}