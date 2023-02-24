export default function Button({ children, ...props }) {
  return (
    <button
      className='rounded-md p-1 my-3 bg-gradient-to-r from-green-400 to-blue-500 hover:animate-pulse'
      {...props}
    >
      {children}
    </button>
  );
}
