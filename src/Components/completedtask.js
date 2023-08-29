import React from 'react'

function Completedtask({completed}) {
  return (
    <div className='bg-amber-600 rounded h-full  p-2 box-border overflow-y-scroll sm:w-full sm:m-2'>
        <h2 className='text-lg text-slate-950 text-center font-bold'>Completed Task</h2>
        {completed.map((comp)=>(
                <><div className='p-4 flex flex-col space-y-1' key={comp.id}>
                    <div className='flex items-baseline'>
                        <div className='flex flex-col w-4/5 ml-3'>
                            <li className='text-md text-amber-400 font-bold' key={comp.id}>{comp.task}</li>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-md text-amber-400'>{comp.reminder}</p>
                    </div>
                </div><hr></hr></>
        ))}
    </div>
  )
}

export default Completedtask