import { useAppSelector, useAppDispatch } from "../store/hooks";
import { selectVal, incr2, incr } from "../store/slices/editorsSlice";

export function SliceDemo() {
  const val = useAppSelector(selectVal);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="">Hi</div>
      <div>{val}</div>
      <button onClick={() => dispatch(incr2(val))}>ClickMe</button>
      <button onClick={() => dispatch(incr())}>ClickMe</button>
    </>
  );
}
