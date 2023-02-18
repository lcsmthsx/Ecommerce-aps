export default function Button({ children, ...props }) {
  return (
    <button className='rounded-lg bg-blue-800 p-1' {...props}>
      {children}
    </button>
  );
}
