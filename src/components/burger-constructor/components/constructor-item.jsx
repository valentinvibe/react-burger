import { useDispatch, useSelector } from 'react-redux';
import styles from './constructor-item.module.css';
import {
    delOrderIngredient
} from '../../../services/actions/actions';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';

const ConstructorItem = ({element, index, moveListItem}) => {
    const dispatch = useDispatch();
    const selectedIngredients = useSelector(store => store.data.selectedIngredient.data)

    const onHandleClose = (index) => {
        dispatch(delOrderIngredient(selectedIngredients, index))
    }

    const [{ isDragging }, dragRef] = useDrag({
        type: 'item',
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    })

    const [spec, dropRef] = useDrop({
        accept: 'item',
        hover: (item, monitor) => {
            const dragIndex = item.index
            const hoverIndex = index
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
            if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

            moveListItem(dragIndex, hoverIndex)
            item.index = hoverIndex
        },
    })

    const ref = useRef(null)
    const dragDropRef = dragRef(dropRef(ref))

    const opacity = isDragging ? 0.5 : 1

    return (
        <div ref={dragDropRef} style={{opacity}}>
        <li 
          key={index}
          className={`${styles.item} mr-2`}
          ref={dragDropRef}
        >
            <DragIcon type="primary" />
            <ConstructorElement
                text={element.name}
                price={element.price ? element.price : 0}
                thumbnail={element.image_mobile}
                handleClose={() => onHandleClose(index)}
            />
        </li>
        </div>
    )
}

export default ConstructorItem