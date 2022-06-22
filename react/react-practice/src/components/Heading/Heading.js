export default function Heading(props) {
    const {title} = props;

    return (
        <div className={'heading'}>
            <header>
                <h1>{title}</h1>
            </header>
        </div>
    )
}