export default function Input({ type, placeholder, props }) {
  return (
    <input
      className='rounded-md p-1 w-full'
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
}
