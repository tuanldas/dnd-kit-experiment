import {DndContext, DragEndEvent} from '@dnd-kit/core';
import Droppable from './components/Droppable.tsx';
import {useState} from 'react';
import Draggable from './components/Draggable.tsx';

function App() {
    const fruits = ['Apple', 'Banana', 'Lemon', 'Pear', 'Mango'];
    const [cartItems, setCartItems] = useState<string[]>([]);

    const addItemsToCart = (e: DragEndEvent) => {
        console.log(e);
        const newItem = e.active.data.current?.title;
        if (e.over?.id !== 'cart-droppable' || !newItem) return;
        const temp = [...cartItems];
        temp.push(newItem);
        setCartItems(temp);
    };

    return (
        <>
            <DndContext onDragEnd={addItemsToCart}>
                <main className="flex gap-4 p-2 flex-col items-center">
                    <div className="flex items-center gap-2">
                        <h1 className="text-base">Fruit List</h1>
                        <ul className="flex justify-center w-full gap-6">
                            {fruits.map((fruit) => (
                                <Draggable key={fruit}>{fruit}</Draggable>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-center w-full gap-6 items-center">
                        <h1>My Cart</h1>
                        <Droppable id={'cart-droppable-1'} items={cartItems}/>
                    </div>
                </main>
            </DndContext>
        </>
    );
}

export default App;
