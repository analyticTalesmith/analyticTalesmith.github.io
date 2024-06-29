import { IconX } from '@tabler/icons-react';

const App = () => {

    return (
        <div className="border-black border bg-secondary p-2.5 rounded-[50%] inline-block h-15 w-15 drop-shadow-harsh" /*style={{ width: '80px', height: '80px' }}*/>
            <div className="flex justify-between items-center h-fit w-fit mx-auto my-auto">
                < IconX color="black" size={30} />
            </div>
        </div>
    )
};

export default App;