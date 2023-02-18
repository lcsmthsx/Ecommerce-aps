export default function Input({ placeholder, props }) {
  return (
    <input className='rounded-lg p-1 ' placeholder={placeholder} {...props} />
  );
}
