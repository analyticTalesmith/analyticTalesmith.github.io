const App = () => {

    return (
        <div className="border-black border bg-tertiary dark:bg-tertiary-d p-2.5 rounded-[50%] inline-block h-15 w-15 drop-shadow-harsh" /*style={{ width: '80px', height: '80px' }}*/>
            <div className="flex justify-between items-center h-fit w-fit mx-auto my-auto">
                <svg className="h-8 w-8 stroke-on-tertiary dark:stroke-on-tertiary-d" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
            </div>
        </div>
    )
};

export default App;