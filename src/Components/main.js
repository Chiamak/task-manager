import React, { useState } from 'react';
import Delete from './delete.png';
import Completedtask from './completedtask';
import Deletedtask from './deletedtask';
const initialList = [
    {
      id: '1',
      task: 'Work in a barret!',
      reminder: '2023-02-22T18:22'
    }
  ];
const completedList = [
    {
        id: '1',
        task: 'Travel',
        reminder: '2023-01-23TI10:00'
    }
]  
const deletedList = [
    {
        id: '1',
        task: 'Wash plate',
        reminder: '2023-09-23TI10:00'
    }
]  

function Main() {
    const [input, setInput] = useState('Your name');
    const [task, setTask] = useState('');
    const [reminder, setReminder] = useState('');
    const [user, setUser] = React.useState(initialList);
    const [checked, setChecked] = useState(false);
    const [completed, setCompleted] =React.useState(completedList);
    const [deleted, setDeleted] = React.useState(deletedList);

    function handleTask(e) {
        e.preventDefault();

        const newUser = user.concat({task, reminder});
        setUser(newUser);
        setInput(input);
        setTask('');
        setReminder('');
    }

    function handleCheck(e) {
        setChecked(true);
        if(checked){
            const filteredUser = user.filter((val) => val.id !== e.target.key);
            const completedTask = user.filter((val) => val.id === e.target.key).concat(completed);
            // const newDonetask = completed.concat({completedTask});
            setUser(filteredUser);
            setCompleted(completedTask);
            console.log(completed);
        }else{
            setUser(user);
        }

    }
    function removeTask(e){
        if(e){
            const filteredUser = user.filter((val) => val.id !== e.target.key);
            const deletedTask = user.filter((val) => val.id === e.target.key).concat(deleted);
            // const newDonetask = completed.concat({completedTask});
            setUser(filteredUser);
            setDeleted(deletedTask);
            // console.log(completed);
        }else{
            setUser(user);
        }
    }


  return (
    <main className="w-4/5 h-screen bg-amber-400 flex items-center justify-start flex-col sm:w-full">
      <form className='w-4/5 rounded-md bg-slate-950 flex items-center justify-evenly h-2/5 mt-1 sm:pt-4 sm:pb-4' onSubmit={handleTask}>
      {/* sm:h-4/5 */}
        <div className='px-4 space-y-2'>
            <label htmlFor='username' className='text-sm text-yellow-400'>Your Name</label><br></br>
            <input typeof='text' className='rounded px-2 py-2 box-border border shadow-sm focus:outline-none focus:border' value={input} onChange={(e)=>setInput(e.target.value)}/><br></br>
        </div>
        <div className='px-4 space-y-2 w-3/5' id='c-task' >
            <h2 className='text-sm text-yellow-400'>Input your task</h2><br></br>
            <div className='h-3/5'>
                <textarea placeholder='Enter task' className='rounded px-2 py-2 box-border bg-yellow-300 text-sm w-4/5' value={task} onChange={(e)=>setTask(e.target.value)}></textarea><br></br>
                <label className='text-sm text-yellow-400'>Set reminder</label><br></br>
                <input type='datetime-local' className='rounded px-1 py-1' value={reminder} onChange={(e)=>setReminder(e.target.value)}/>
            </div>
            <button typeof='submit' className='bg-yellow-400 text-slate-950 text-sm py-1 rounded px-2'>Create</button>
        </div>
      </form>
      <div className='w-4/5 rounded-md bg-slate-950 h-3/5 mt-1 mb-1 px-4 py-4'>
      {/* sm:max-h-max */}
        <h1 className='text-4xl text-yellow-400'>Welcome <span className='text-amber-700 ml-2'>{input}</span>!</h1>
        <div className='w-full grid grid-cols-3 gap-x-3 h-4/5 items-center mt-4'>
        {/* sm:flex sm:flex-col, media query for small screen affects the big screen for the up div(grid)*/}
            <div className='bg-amber-700 rounded h-full p-2 box-border overflow-y-scroll'>
            {/* sm:w-full sm:m-2, this one too up div(rounded)*/}
                <h2 className='text-lg text-slate-950 text-center font-bold'>Tasklist</h2>
                {user.map((item) => (
                    <><div className='p-4 flex flex-col space-y-1' key={item.id}>
                        <div className='flex items-baseline'>
                            <input type='checkbox' onChange={handleCheck} value={checked} key={item.id}/>
                            <div className='flex flex-col w-4/5 ml-3'>
                                <li className='text-md text-amber-400 font-bold' key={item.id}>{item.task}</li>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-md text-amber-400'>{item.reminder}</p>
                            <img src={Delete} className='w-5 h-5' alt='delete-button' onClick={removeTask} key={item.id}/>
                        </div>
                    </div><hr></hr></>
                ))}
            </div>
            <Completedtask completed={completed}/>
            <Deletedtask deleted={deleted} />
        </div>
      </div>
    </main>
  )
}

export default Main