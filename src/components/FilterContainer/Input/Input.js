import { useDispatch } from 'react-redux';
const Input = ({ type, name, id, value, handler, ...props }) => {
  const dispatch = useDispatch();
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value}
      onChange={(e) => dispatch(handler(e))}
      {...props}
    />
  );
};

export default Input;
