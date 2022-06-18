
export default function List({ toDoList, setToDoList }) {

    // function that toggles isDone prop
    function handleToggleIsDone(id) {

        setToDoList(prevToDoList => {
            return prevToDoList.map(item => {
                return item.id === id ? { ...item, isDone: !item.isDone } : item
            })
        })
    }

    // function that deletes the specific task
    function handleDeleteTask(id) {

        setToDoList(prevToDoList => {
            return prevToDoList.filter(item => {
                return item.id !== id
            })
        })
    }

    // maps the toDoList
    const list = toDoList.map(item => {

        // style condition for task prop
        const styleTaskProp = {
            textDecoration: item.isDone ? 'line-through' : 'none'
        }

        return (
            <div style={{ border: '1px solid', padding: '0.5rem 1rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            key={item.id}>

                <div style={{ display: 'flex', alignItems: 'center'}}>

                    <form>
                        <input type="checkbox"
                            name="isDone"
                            checked={item.isDone}
                            onChange={() => handleToggleIsDone(item.id)} />
                    </form>

                    <p style={styleTaskProp}>{item.task}</p>
                </div>

                <button onClick={() => handleDeleteTask(item.id)}>X</button>
            </div>
        )
    })

    return (
        <div style={{ width: '40%', margin: 'auto' }}>

            {list}

        </div>
    );
}