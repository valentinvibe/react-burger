import { useDispatch, useSelector } from "../../../services/types/hooks";
import styles from "./constructor-item.module.css";
import { delOrderIngredient } from "../../../services/actions/order";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { FC, useRef } from "react";
import { getSelectedIngredients } from "../../../utils/functions";
import { TIngredient } from "../../../services/types";

interface IConstructorItem {
  element: TIngredient,
  index: number,
  moveListItem: any
}

const ConstructorItem : FC<IConstructorItem> = ({ element, index, moveListItem }) => {
  const dispatch = useDispatch();
  const selectedIngredients = useSelector(getSelectedIngredients);

  const onHandleClose = (index : number) => {
    dispatch(delOrderIngredient(selectedIngredients, index));
  };

  const [, dragRef] = useDrag({
    type: "item",
    item: { index },
  });

  const [{ isOver }, dropRef] = useDrop({
    accept: "item",
    hover: (item : {index : number}, monitor) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      const hoverBoundingRect = ref.current?.getBoundingClientRect() || {bottom: 0, top: 0};
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverActualY = clientOffset ? clientOffset.y - hoverBoundingRect.top : 0;

      if (dragIndex === hoverIndex) return;
      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return;
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return;

      moveListItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const ref = useRef<HTMLDivElement>(null);
  dragRef(dropRef(ref));
  const opacity = isOver ? 0.7 : 1;

  return (
    <div ref={ref} style={{ opacity }} key={index}>
      <li className={`${styles.item} mr-2`}>
        <DragIcon type="primary" />
        <ConstructorElement
          text={element.name}
          price={element.price ? element.price : 0}
          thumbnail={element.image_mobile}
          handleClose={() => onHandleClose(index)}
        />
      </li>
    </div>
  );
};

export default ConstructorItem;
