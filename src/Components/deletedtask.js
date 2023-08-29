import React from 'react';

function Deletedtask({deleted}) {
  return (
    <div className='bg-amber-400 rounded h-full  p-2 box-border overflow-y-scroll sm:w-full sm:m-2'>
        <h2 className='text-lg text-slate-950 text-center font-bold'>Deleted Task</h2>
        {deleted.map((del)=>(
                <><div className='p-4 flex flex-col space-y-1' key={del.id}>
                    <div className='flex items-baseline'>
                        <div className='flex flex-col w-4/5 ml-3'>
                            <li className='text-md text-amber-700 font-bold' key={del.id}>{del.task}</li>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-md text-amber-700'>{del.reminder}</p>
                    </div>
                </div><hr></hr></>
        ))}
    </div>
  )
}

export default Deletedtask