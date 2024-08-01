import {useDroppable} from '@dnd-kit/core';
import {JSXElementConstructor, ReactElement, ReactNode, ReactPortal} from 'react';

const Droppable = (props: any) => {
    const {setNodeRef} = useDroppable({
        id: props.id
    });
    return (
        <>
            <div ref={setNodeRef} className="flex p-6 w-full min-h-5 border-2 justify-center gap-6 flex-wrap">
                {props.items.map((item: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, idx: any) => (
                    <div key={`${item}-${idx}`} className='border-2 px-2 py-6 text-base rounded-l h-fit'>
                        {item}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Droppable;
