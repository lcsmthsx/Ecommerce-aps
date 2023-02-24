export default function GeneralCard({ title, children }) {
  return (
    <div className='h-96 w-60 rounded-md shadow-lg bg-text1 text-center p-4'>
      <h2 className='my-5 text-2xl font-bold'>{title}</h2>
      {children}
    </div>
  );
}
