import { useState } from 'react'

let incrementingNum = 1;

export default function MainContainer({addToDoList}) {

    // to-do info state
    const [toDoInfo, setToDoInfo] = useState({
        id: 0,
        task: '',
        isDone: false
    })

    // function that change the state
    function handleChange(event) {

        //destructure
        const { name, value } = event.target

        setToDoInfo(prevToDoInfo => {
            return {
                ...prevToDoInfo,
                id: incrementingNum,
                [name]: value,
                isDone: false
            }
        })
    }

    // function that adds the to-do list
    function handleAdd(event) {

        event.preventDefault()

        // adds the toDoInfo
        addToDoList(toDoInfo)

        ++incrementingNum

        setToDoInfo({ task: "" })
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5rem' }}>
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <h2>To-do List</h2>

                <form onSubmit={handleAdd}>

                    <input style={{ margin: '1rem', padding: '0.5rem', width: '20rem' }}
                        type="text"
                        placeholder="Add a task"
                        name="task"
                        value={toDoInfo.task}
                        onChange={handleChange} />

                    <button style={{ padding: '0.5rem' }}>Add</button>

                </form>
            </div>
        </div>
    );
}