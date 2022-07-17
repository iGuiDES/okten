const TodoComponent = ({todo}) => {
    const {id, title} = todo;
    return (
        <div>
            <div>
                <h4>{id} - {title}</h4>
            </div>
        </div>
    )
}

export {
    TodoComponent
}