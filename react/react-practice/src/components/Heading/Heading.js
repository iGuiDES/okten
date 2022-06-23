import './Heading.css';

export default function Heading(props) {

    const {title} = props;

    return (
        <div className={'heading'}>
            <header>
                <h2>{title}</h2>
            </header>
        </div>
    )
}