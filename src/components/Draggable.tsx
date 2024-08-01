import {useDraggable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

const Draggable = (props: any) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: props.children,
        data: {title: props.children}
    });
    return (
        <>
            <div
                ref={setNodeRef}
                style={{transform: CSS.Translate.toString(transform)}}
                {...attributes}
                {...listeners}
                className="border-2 px-2 py-6 text-lg bg-white hover:cursor-grab active:cursor-grabbing"
            >
                {props.children}
            </div>
        </>
    );
};
export default Draggable;
