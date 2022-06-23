import './Heading.css';

export default function Heading(props) {

    const {title} = props;

    return (
        <div className={'heading-title'}>
            <header className={'heading-title-content'}>
                <h2>{title}</h2>
            </header>
        </div>
    )
}