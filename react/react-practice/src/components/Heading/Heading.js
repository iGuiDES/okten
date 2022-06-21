import './Heading.css';

export default function Heading(props) {
    const {title} = props;
    return (
        <header className={'heading'}>
            <h2>{title}</h2>
        </header>
    );
}